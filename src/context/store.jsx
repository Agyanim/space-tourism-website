import { create } from "zustand";

export const selectorStore = create((set) => ({
  selector: 0,
  setSelector: (input) =>
    set((state) => ({ selector: input })),
}));
