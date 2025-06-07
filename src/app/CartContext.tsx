"use client";
import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  name: string;
  price: number;
  img: string;
  desc: string;
  quantity: number;
  available: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, qty: number) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">, qty: number) => {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        if (found.quantity + qty > item.available) return prev;
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const updateQuantity = (name: string, qty: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.name === name
          ? { ...i, quantity: Math.max(1, Math.min(qty, i.available)) }
          : i
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
