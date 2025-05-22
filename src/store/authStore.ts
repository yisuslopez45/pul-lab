import { create } from "zustand";
import { auth } from "../../firebase.config"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup , signOut , User } from "firebase/auth";

interface AuthState {
  userLooged: User | null
  loginGoogleWithPopUp: () => Promise<void>
  logout: () => Promise<void>
  obserAuthState: () => void
}

const provider = new GoogleAuthProvider()

export const useAuthStore = create<any>((set) => {

    const obserAuthState = () => {
        onAuthStateChanged(auth, (user) => {
            user ? set({ userLooged : user }) : set({ userLooged : null })
        })
    }

    obserAuthState()

    return {
        userLooged: null,

        loginGoogleWithPopUp : async () => {
            try {
                return await signInWithPopup(auth, provider )
            } catch (error) {
                console.error("Error logging in :" , error)
                
            }
        },

        logout : async () => {
            return await signOut(auth)
                .then(()=> set({userLooged : null}) )
                .catch((err)=> console.error("Error loggint out", err))
        }

    }
})


