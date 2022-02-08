import React from "react";
import netflixAvatar from "../../images/Netflix-avatar.png";
export const Nav = () => {
  return (
    <div className="flex fixed w-full justify-between py-3 px-12 left-0 top-0 z-[1]">
      <div className="flex items-center">
        <div className="w-48">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="red netflix logo text png"
          />
        </div>
        <div className="text-white flex">
            <p>Home</p>
            <p>Tv</p>
            <p>Movies</p>
            <p>New and popular</p>
        </div>
      </div>
      <div className="w-12 h-12">
        <img src={netflixAvatar} alt="" />
      </div>
    </div>
  );
};
