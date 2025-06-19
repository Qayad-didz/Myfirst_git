import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUser, User } from '../types';

interface AuthContextType {
  user: AuthUser;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'isAdmin'>) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('cookieStoreUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Admin authentication
    if (email === 'm-10408872@moe-dl.edu.my' && password === '@tda12345') {
      const adminUser: User = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'm-10408872@moe-dl.edu.my',
        studentId: 'M-10408872',
        phone: '+601 11093 7166',
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem('cookieStoreUser', JSON.stringify(adminUser));
      setIsLoading(false);
      return true;
    } 
    // Student authentication - any m-*@moe-dl.edu.my email with any password
    else if (email.match(/^m-\d+@moe-dl\.edu\.my$/)) {
      const studentId = email.split('@')[0].toUpperCase();
      const regularUser: User = {
        id: `user-${Date.now()}`,
        name: 'Student User',
        email: email,
        studentId: studentId,
        phone: '+60123456789',
        isAdmin: false
      };
      setUser(regularUser);
      localStorage.setItem('cookieStoreUser', JSON.stringify(regularUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'isAdmin'>): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Only allow registration with moe-dl.edu.my emails
    if (!userData.email.endsWith('@moe-dl.edu.my')) {
      setIsLoading(false);
      return false;
    }
    
    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}`,
      isAdmin: false
    };
    
    setUser(newUser);
    localStorage.setItem('cookieStoreUser', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cookieStoreUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}