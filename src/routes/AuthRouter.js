import React,{useState,useEffect} from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { login,logout,selectUser } from '../features/userSlice'
import { Navigate } from "react-router-dom";

export const AuthRouter = ({children}) => {
  // const user = useSelector(selectUser)
  // console.log(user);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //  const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
  //     if(currentUser){
  //       dispatch(login({uid:currentUser.uid,email:currentUser.email}))
  //     }
  //   })
  //   return unsubscribe
  // }, [])
  const user = useSelector(selectUser);
  // const user = localStorage.getItem('user')
  // const userObj = JSON.parse(user)
  // console.log(userObj);
 
  return (
    user.user ? <Navigate to="/home" replace={true} />:
    <div className=" items-center justify-center flex flex-col w-full h-screen bg-cover min-h-[650px] black-gradient ">
      <div className="fixed top-8 px-12 w-full">
        <div className="w-48">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="red netflix logo text png"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
