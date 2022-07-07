import React from "react";

const Backdrop = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`${className} bg-black text-red-300 opacity-75 flex justify-center items-center fixed h-screen w-screen`}
    >
      {children}
    </div>
  );
};

export default Backdrop;
