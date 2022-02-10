import React from "react";

export const AuthRouter = ({children}) => {
  return (
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
