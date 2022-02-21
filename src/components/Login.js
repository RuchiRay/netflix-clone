import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { Loader } from "./Loader";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
  }, []);

  
  const login = async (e) => {
    setLoader(true);
    console.log("login");
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-black/70 w-[30rem] p-12 rounded">
      <p className="text-3xl font-bold mb-6">Sign In</p>

      <div className="flex flex-col">
        <form className="flex flex-col gap-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="h-14 rounded text-white bg-gray-100"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="h-14 rounded text-white bg-gray-100"
          />
          <button
            type="submit"
            onClick={(e) => login(e)}
            className="bg-red-100 h-14 rounded text-xl"
          >
            {loader ? <Loader /> : "Sign In"}
          </button>
        </form>
        <div className="h-px w-[90%] bg-white/30 mt-6 mb-5 m-auto"></div>
        <div className="flex gap-2 text-lg justify-center">
          <p className="text-white/30">Haven't you registered yet</p>
          <p
            className="text-red-200 font-bold cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};
