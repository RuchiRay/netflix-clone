import React, { useState,useEffect } from "react";
import netflixAvatar from "../images/Netflix-avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate, NavLink } from "react-router-dom";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [bgBlack, setBgBlack] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const user = await signOut(auth);
    console.log(user);
    dispatch(logout());
    navigate("/login", { replace: true });
  };
 useEffect(() => {
  const handler = ()=>{
      if(window.scrollY>=50)
      setBgBlack(true)
      else
      setBgBlack(false)
  }
  window.addEventListener('scroll',handler)
  return () => window.removeEventListener("scroll", handler);
 }, [])
  return (
    <div className={`${bgBlack && 'bg-black'} fade-top transition-colors ease-linear  flex fixed w-full justify-between py-3  px-12 left-0 top-0 z-[1]`}>
      <div className="flex items-center">
        <div className="w-40">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="red netflix logo text png"
          />
        </div>
        <div className="text-white flex gap-8 text-lg ml-12">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'font-bold' : "")}
          >
            Home
          </NavLink>
          <NavLink to="/tv">Tv Series</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/popular">New and popular</NavLink>
          <NavLink to="/mylist">My List</NavLink>
        </div>
      </div>
      <div className="w-12 h-12 cursor-pointer relative">
        <img
          src={netflixAvatar}
          alt=""
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={`${
            showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } flex border absolute w-28 p-2 flex-col bg-black transition duration-300 ease-in-out right-0 top-16 border-white/50`}
        >
          <button className="text-left">My Profile</button>
          <button className="text-left" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
