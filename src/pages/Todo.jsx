// todo page component

import React from "react";
import { useDataContext } from "../context/DataContext";

const Todo = () => {
  // idividual data object
  const { individual } = useDataContext();

  return (
    <div className="h-screen w-[74%] my-6 mr-4">
    {/* Header of todo page */}
      <div className=" w-full flex justify-between py-2 border-b-[1px] border-neutral-300">
        <p className="text-xl font-semibold text-neutral-600">ToDo</p>
        <div className="flex items-center">
          <img
            src={individual.profilepicture}
            className="w-9 h-9 rounded-full"
            alt={individual.name}
          />
          <p className="text-xl font-normal text-neutral-600 pl-2">
            {individual.name}
          </p>
        </div>
      </div>
      {/* body of todo page */}
      <div className="w-full h-[75%] flex items-center justify-center">
        <p className="text-[100px] text-bold  text-neutral-200">Coming Soon</p>
      </div>
    </div>
  );
};

export default Todo;
