export interface Cookie {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  allergens: string[];
  category: 'classic' | 'premium' | 'seasonal';
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem {
  cookie: Cookie;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  studentId: string;
  phone: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  pickupLocation: string;
  pickupTime: string;
  specialInstructions?: string;
  createdAt: string;
  updatedAt: string;
}

export type AuthUser = User | null;