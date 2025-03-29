import { create } from 'zustand';

interface RoleStoreType{
    role: string;
    setRole: (role: string) => void;
}
export const useRole = create<RoleStoreType>((set) => ({
  role: "admin",
  setRole: (role: string) => set({ role }),
}));