// Logout component

import React from "react";
import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  // individual person data object
  const { individual, data } = useDataContext();
  // Navigate to home page on logout
  const navigate = useNavigate();
  return (
    <div className="absolute top-16 right-2 h-[60%] w-[28%] bg-white rounded-3xl drop-shadow-2xl flex flex-col items-center">
      {/* Header of logout section */}
      <div className="flex flex-col items-center py-4">
        <img
          src={individual.profilepicture}
          alt={individual.name}
          className="w-24 h-24 rounded-full"
        />
        <p className="text-neutral-600 font-base">{individual.name}</p>
        <p className="text-neutral-400 font-base">{individual.email}</p>
      </div>
         {/* List of other users */}
      <div className="h-[28%] bg-white   px-8 overflow-y-scroll scrollbar-none ">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border-b-2 border-neutral-200 flex p-2 cursor-pointer items-center">
            <img
              src={item.profilepicture}
              className="w-8 h-8 rounded-full"
              alt={item.name}
            />
            <p className="text-sm font-light text-neutral-600 pl-4">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* Logout button */}
      <button
        className="text-lg bg-red-700 text-white my-3 px-3 py-1 rounded-full"
        onClick={() => {
          navigate("/");
        }}>
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
