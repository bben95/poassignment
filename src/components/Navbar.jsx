// Navigation bar component

import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // to select the item of navigation bar
  const [active, setActive] = useState("profile");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("profile");
  }, []);
  return (
    <div className="h-full w-[18%] bg-gradient-to-t from-[#6139c8] to-[#3d57c8] flex items-center justify-center m-8 rounded-3xl">
      <nav className="w-full pl-10 flex flex-col gap-5">
        {/* profile section */}
        <Link to="profile">
          <div className="flex justify-between relative pb-2">
            <p
              className={`relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-base cursor-pointer pb-1 ${
                active === "profile"
                  ? "font-semibold text-white"
                  : "font-thin text-neutral-300"
              }`}
              onClick={() => {
                setActive("profile");
              }}>
              Profile
            </p>
            {/* right arrrow and curved design */}
            {active === "profile" && (
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve ">
                {" "}
                <MdNavigateNext className="text-xl text-neutral-400" />
              </div>
            )}
          </div>
        </Link>
         {/* posts section */}
        <Link to="posts">
          <div className="flex justify-between relative pb-2">
            <p
              className={`relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-base cursor-pointer pb-1 ${
                active === "posts"
                  ? "font-semibold text-white"
                  : "font-thin text-neutral-300"
              }`}
              onClick={() => {
                setActive("posts");
              }}>
              Posts
            </p>
            {active === "posts" && (
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2  before:top-curve after:bottom-curve">
                {" "}
                <MdNavigateNext className="text-xl text-neutral-400" />
              </div>
            )}
          </div>
        </Link>
        {/* gallery section */}
        <Link to="gallery">
          <div className="flex justify-between relative pb-2">
            <p
              className={`relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-base cursor-pointer pb-1 ${
                active === "gallery"
                  ? "font-semibold text-white"
                  : "font-thin text-neutral-300"
              }`}
              onClick={() => {
                setActive("gallery");
              }}>
              Gallery
            </p>
            {active === "gallery" && (
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve">
                {" "}
                <MdNavigateNext className="text-xl text-neutral-400" />
              </div>
            )}
          </div>
        </Link>
         {/* todo section */}
        <Link to="todo">
          <div className="flex justify-between relative pb-2">
            <p
              className={`text-base pb-1 cursor-pointer ${
                active === "todo"
                  ? "font-semibold text-white"
                  : "font-thin text-neutral-300"
              }`}
              onClick={() => {
                setActive("todo");
              }}>
              ToDo
            </p>
            {active === "todo" && (
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve text-base ">
                {" "}
                <MdNavigateNext className="text-xl text-neutral-400" />
              </div>
            )}
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
