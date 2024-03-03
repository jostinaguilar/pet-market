import { create } from 'zustand';

interface SideMenu {
  sideMenu: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useSideMenu = create<SideMenu>((set) => ({
  sideMenu: false,
  openSideMenu: () => set(() => ({ sideMenu: true })),
  closeSideMenu: () => set(() => ({ sideMenu: false })),
}));
