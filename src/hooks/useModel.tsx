import { create } from "zustand";

export type Model = "dragon" | "lycheee" | "pineapple";

interface ModelTypes {
  model: Model;
  setModel: (newModel: Model) => void;
}

export const useModel = create<ModelTypes>((set) => ({
  model: "dragon",
  setModel: (newModel) => set({ model: newModel }),
}));
