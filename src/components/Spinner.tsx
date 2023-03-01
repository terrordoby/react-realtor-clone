import React from "react";
import spinner from "../assets/spinner.svg";

const Spinner = () => {
  return (
    <div
      className="flex items-center justify-center fixed bg-black bg-opacity-50 left-0 top-0 right-0 bottom-0 z-50">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Spinner;
