import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toogleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = async () => {
    console.log("INSIDE", auth, email, password, name);
    try {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );

      setErrorMessage(message);
      if (message) return;
      if (!isSignInForm) {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        updateProfile(credentials.user, {
          displayName: name.current.value,
          photoURL:
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        });
        console.log("sdadadsasd", credentials.user);
      } else {
        const credentials = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        console.log("sdadadsasd", credentials.user);
      }
    } catch (error) {
      const errorCode = error?.code;
      const errorMessage = error?.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div
        // onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-4 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full"
          onClick={() => handleSubmit()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignIn}>
          {isSignInForm ? "New ? Sign Up Now" : "Already Registered ? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
