import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  loginStatus: false,
  setAccessToken: (accessToken) => set({ accessToken }),
  setLoginStatus: (loginStatus) => set({ loginStatus }),
  clearAuth: () => set({ accessToken: null, loginStatus: false }),
}));

// create((set,get)=>{return {}})
// create(()=>({}))
