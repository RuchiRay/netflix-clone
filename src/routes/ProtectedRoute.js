import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  // const user = useSelector(selectUser);

  const user = localStorage.getItem('user')
  const userObj = JSON.parse(user)
  console.log(userObj);
  return userObj? children : <Navigate to="/login" replace={true} />;
  // return user.user? children : <Navigate to="/login" replace={true} />;
};
