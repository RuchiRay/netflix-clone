import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/home',{ replace: true })
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-black/70 w-[30rem] p-12 rounded">
      <p className="text-3xl font-bold mb-6">Sign Up</p>
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
          <input
            type="password"
            placeholder="Repeat your password"
            className="h-14 rounded text-white bg-gray-100"
          />
          <button
            type="submit"
            onClick={(e) => register(e)}
            className="bg-red-100 h-14 rounded text-xl"
          >
            Sign Up
          </button>
        </form>
        <div className="h-px w-[90%] bg-white/30 mt-6 mb-5 m-auto"></div>

        <div className="flex gap-2 text-lg justify-center mt-2">
          <p className="text-white/30">Do you already have an account?</p>
          <p
            className="text-red-200 font-bold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
};
