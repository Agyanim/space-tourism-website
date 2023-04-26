import { create } from "zustand";

export const selectorStore = create((set, get) => ({
  technologySelector: 0,
  destinationSelector: 0,
  setTechnologySelector: (input) =>
    set((state) => ({ technologySelector: input })),
  setDestinationSelector: (input) =>
    set((state) => ({ destinationSelector: input })),
}));
