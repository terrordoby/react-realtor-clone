import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
  const [pageState, setPageState] = useState<string>("Sign In");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  function pathMathRoute(route: string) {
    if(route === location.pathname) {
      return true;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    }),[];
  });

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between max-w-6xl mx-auto items-center">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-6">
            <li
              onClick={() => navigate("/")}
              className={`py-3 text-sm font-semibold text-gray-400
              border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/")
              && "text-black border-b-red-500"}`}>Home</li>
            <li
              onClick={() => navigate("/offers")}
              className={`py-3 text-sm font-semibold text-gray-400
              border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/offers")
              && "text-black border-b-red-500"}`}>Offers</li>
            <li
              onClick={() => navigate("/profile")}
              className={`py-3 text-sm font-semibold text-gray-400
              border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/sign-in")
              && "text-black border-b-red-500"}`}>{pageState}</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
