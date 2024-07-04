import { create } from "zustand";

type Model = "dragon" | "lycheee" | "pineapple";

interface ModelTypes {
  model: Model;
  isOpen: boolean;
  setModel: (newModel: Model) => void;
  setIsOpen: (newModel: boolean) => void;
}

export const useModel = create<ModelTypes>((set) => ({
  model: "dragon",
  isOpen: false,
  setModel: (newModel) => set({ model: newModel }),
  setIsOpen: (newState) => set({ isOpen: newState }),
}));
