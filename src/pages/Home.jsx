// Home page component

import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full h-screen flex overflow-y-auto">
      {/* Navigation bar component */}
      <Navbar />
    {/* to route home page nested pages profile,posts,gallery ,todo */}
      <Outlet />
    </div>
  );
};

export default Home;
