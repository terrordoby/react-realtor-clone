import React from "react";
import {FcGoogle} from "react-icons/fc";

const OAuth = () => {
  return (
    <div>
      <button
        className="flex items-center justify-center uppercase text-sm py-3 px-7
        w-full text-white font-medium gap-1 bg-red-600 hover:bg-red-800
        transition duration-200 shadow-md active:bg-red-900
        rounded active:shadow-lg">
        <FcGoogle className="text-2xl bg-white rounded-full" />
        Continue with google
      </button>
    </div>
  );
};

export default OAuth;
