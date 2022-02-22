import React from "react";

export const Loader = ({fullpage}) => {
  return (
    <div className={`${fullpage&&'h-screen'} flex items-center justify-center `}>
      <div className={`${fullpage&&'h-48 w-48'} h-10 w-10 m-auto  border-4 border-gray-100 border-t-red-100 border-solid rounded-full animate-spin `}></div>
    </div>
  );
};
