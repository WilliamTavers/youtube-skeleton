// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
import { functions } from './firebase';


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEO7bxA4Eod0tApsdgKvDSgqSQn6yBN4",
  authDomain: "yt-clone-e9067.firebaseapp.com",
  projectId: "yt-clone-e9067",
  appId: "1:552180429514:web:e3e3a08a2c307a845bfa33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
