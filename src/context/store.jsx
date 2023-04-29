import { create } from "zustand";

export const selectorStore = create((set) => ({
  selector: 0,
  setSelector: (input) => set(() => ({ selector: +input })),
  setIncreament: () => set((state) => ({ selector: state.selector + 1 })),
  resetSelector: () => set((state) => ({ selector: (state.selector = 0) })),
}));
