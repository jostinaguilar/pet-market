import { create } from 'zustand';
import { ProductType } from '../types/types';

interface CartStore {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeToCart: () => void;
  clearToCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeToCart: () => set(() => ({ cart: [] })),
  clearToCart: () => set(() => ({ cart: [] })),
}));
