import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
export const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("useffect");

    if (user.user) {
      console.log(user,'from protected');
      setLoading(false);
    }
    else
    console.log('no user');
    
  }, [user]);

  // console.log("loading from protected routing", loading);

  // const user = localStorage.getItem('user')
  // const userObj = JSON.parse(user)
  // console.log(userObj);
  // return userObj? children : <Navigate to="/login" replace={true} />;
  if (loading) return <Loader fullpage />;
  else return user.user ? children : <Navigate to="/login" replace={true} />;
};
