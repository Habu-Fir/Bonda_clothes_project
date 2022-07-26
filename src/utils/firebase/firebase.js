import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCiYZ4gLbXM-pH0EQEjQR6lIQVlUqoZ1cM",

  authDomain: "bonda-clothing-db.firebaseapp.com",

  projectId: "bonda-clothing-db",

  storageBucket: "bonda-clothing-db.appspot.com",

  messagingSenderId: "965777668967",

  appId: "1:965777668967:web:02e51c2c1b996dd5f24dc2",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};
