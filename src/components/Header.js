import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import brandLogo from "../assets/image_2023_11_23T11_55_19_614Z-removebg-preview (1).png";
import { changeLanguage } from "../utils/configSLice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black flex z-10 w-screen flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        // src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        src={brandLogo}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {gptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLangChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGPTSearch}
          >
            {gptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            //Or from useSelector user.photoUrl
            src="https://occ-0-2953-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR4AJx0I66jQvCokUBd40oGQO2pqYOAtik8UmV_9X1XPaIf1NatiHh2pqn_V9GAdFJgXMOEglomoGb0lroYyodjtlpzCWTA.png?r=181"
            alt="logo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
