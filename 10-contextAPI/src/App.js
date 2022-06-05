import React from "react";
import ContextAPI from "./module/ContextAPI/ContextAPI";
import FaaC from "./module/FaaCandRP/FaaC";
import RenderProps from "./module/FaaCandRP/RenderProps";
import CryptoTable from "./module/HOC/CryptoTable";
import HOC from "./module/HOC/HOC";
import PriceCSV from "./module/HOC/PriceCSV";

const App = () => {
  return (
    <>
      <HOC />
      <CryptoTable />
      <PriceCSV />
      <FaaC />
      <RenderProps />
      <ContextAPI />
    </>
  );
};

export default App;
