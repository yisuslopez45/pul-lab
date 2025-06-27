import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "../../firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

type AuthStore = {
  userLooged: User | null;
  loading: boolean;
  loginGoogleWithPopUp: () => Promise<void>;
  logout: () => Promise<void>;
  initAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userLooged: null,
      loading: true,

      loginGoogleWithPopUp: async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          set({ userLooged: result.user });
        } catch (error) {
          console.error("Error logging in:", error);
        }
      },

      logout: async () => {
        try {
          await signOut(auth);
          set({ userLooged: null });
        } catch (error) {
          console.error("Error logging out:", error);
        }
      },

      initAuth: () => {
        set({ loading: true });
        onAuthStateChanged(auth, (user) => {
          set({ userLooged: user, loading: false });
        });
      },
    }),
    {
      name: "auth-store", // clave de almacenamiento en localStorage
      partialize: (state) => ({ userLooged: state.userLooged }), // qué guardar
    }
  )
);
