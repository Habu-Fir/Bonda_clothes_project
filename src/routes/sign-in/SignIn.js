import React from "react";
import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in Page </h1>

      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;