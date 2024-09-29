// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCBa_yIPzFB9cQD8Rom6veGHYyqjN6fd-g",
  authDomain: "netflix-app-43704.firebaseapp.com",
  projectId: "netflix-app-43704",
  storageBucket: "netflix-app-43704",
  messagingSenderId: "451656821076",
  appId: "1:451656821076:web:41445547947c9fec1580c1",
  measurementId: "G-WHY8GZ2XEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
      // Do not store the password in Firestore
    });
  } catch (error) {
    console.error("Error signing up:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Sign In Method
const signin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const signOutUser = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { auth, db, signup, signin, signOutUser };
