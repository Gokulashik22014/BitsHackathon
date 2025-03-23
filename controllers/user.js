import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { auth } from "../firebaseConfig";
//login
export const handleLogin = async (email, password) => {
    const response=signInWithEmailAndPassword(auth, email, password)
    .then((response) => response)
    .catch((error) => error);
};
//logout

//sigin
export const handleSignIn = (type, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};
