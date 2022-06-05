import React from "react";
import { useLocation } from "react-router-dom";

const Location = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Current Location</h1>
      {location.pathname}
    </div>
  );
};

export default Location;
