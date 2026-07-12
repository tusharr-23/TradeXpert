import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import "../dashboard.css";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
