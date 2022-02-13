import React,{useState} from "react";
import Select, { components } from "react-select";
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { login,logout,selectUser } from '../../features/userSlice'
import { Navigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleGetStarted = ()=>{
    navigate("/signup");
  }

 const handleSignIn = ()=>{
   navigate("/login")
 }
  const options = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
  ];
  const [lang, setLang] = useState(options[0]);
  const Control = ({ children, ...props }) => {

    return (
        <components.Control {...props}>
          <div className="flex w-32  items-center ">
            <div>
              <FaGlobe />
            </div>
            {children}
          </div>
        </components.Control>
    );
  };
  return (
    user.user ? <Navigate to="/home" replace={true} />:
    <div className=" items-center justify-center flex flex-col w-full h-screen bg-cover min-h-[650px] black-gradient ">
      <div className="flex justify-between fixed top-8 px-12 w-full">
        <div className="w-48">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="red netflix logo text png"
          />
        </div>
        <div className="flex gap-8">
          <div>
            <Select
              options={options}
              isSearchable='false'
              components={{ Control }}
              value={lang}
              onChange={(value)=>setLang(value)}
              className="exp-select"
              classNamePrefix="react"
            />
          </div>
          <button onClick={handleSignIn} className="bg-red-100 text-white  rounded px-5 h-[2.375rem]">Sign In</button>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[700px] justify-center items-center">
        <p className="text-[4rem] font-bold text-center leading-[5rem]">Unlimited movies, TV shows and more.</p>
        <p className="text-2xl my-4">Watch anywhere. Cancel anytime.</p>
        <p className="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex w-full mt-4">
          <input type="text" placeholder="Email address" className=" pl-3 h-16 w-full" />
          <button onClick={handleGetStarted} className="bg-red-100 w-80 text-3xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};
