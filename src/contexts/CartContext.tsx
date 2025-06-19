import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Cookie } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (cookie: Cookie, quantity?: number) => void;
  removeFromCart: (cookieId: string) => void;
  updateQuantity: (cookieId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cookieStoreCart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cookieStoreCart', JSON.stringify(items));
  }, [items]);

  const addToCart = (cookie: Cookie, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.cookie.id === cookie.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.cookie.id === cookie.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...currentItems, { cookie, quantity }];
    });
  };

  const removeFromCart = (cookieId: string) => {
    setItems(currentItems => currentItems.filter(item => item.cookie.id !== cookieId));
  };

  const updateQuantity = (cookieId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cookieId);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.cookie.id === cookieId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.cookie.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}