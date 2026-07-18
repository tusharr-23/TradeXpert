import React from "react";

import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";
import Menu from "./Menu";

import "../dashboard.css";

const Home = () => {
  return (
    <>
      <Menu />
      <Dashboard />
    </>
  );
};

export default Home;
