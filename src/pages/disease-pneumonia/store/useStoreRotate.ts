import { create } from "zustand";

interface RotationState {
  direction: "left" | "right" | null;
  setDirection: (dir: "left" | "right" | null) => void;
}

const useStoreRotation = create<RotationState>((set) => ({
  direction: null,
  setDirection: (dir) => set({ direction: dir }),
}));

export default useStoreRotation;
