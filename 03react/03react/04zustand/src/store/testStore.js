import { create } from 'zustand';

// const testStore = create((set,get)=>({}))
const testStore = create((set) => ({
  name: '홍길동',
  count: 0,
  increase: () => set((state) => ({ count: state.count + 2 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default testStore;
