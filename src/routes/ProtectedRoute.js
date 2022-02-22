import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { SplashAnimation } from "../components/splashAnimation/SplashAnimation";
export const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 4000);

  // console.log("loading from protected routing", loading);

  // const user = localStorage.getItem('user')
  // const userObj = JSON.parse(user)
  // console.log(userObj);
  // return userObj? children : <Navigate to="/login" replace={true} />;
  if (loading) return <SplashAnimation />;
  else return user.user ? children : <Navigate to="/login" replace={true} />;
};
