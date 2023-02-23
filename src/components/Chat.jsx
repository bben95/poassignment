// Chat box component

import React from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useDataContext } from "../context/DataContext";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const { chatperson, setChatopen, isOpen, setIsopen } = useDataContext();

  return (
    <div className="fixed  w-[17%] bottom-0 right-80">
      {/* Header of chat */}
      <div className="flex h-[42px] bg-[#2c65c8] justify-between items-center rounded-t-md">
        <div className="flex items-center">
          <div className=" flex p-1  items-center  ">
            <img
              src={chatperson.profilepicture}
              className="w-8 h-8 rounded-full"
              alt={chatperson.name}
            />
            <p className="text-sm font-light text-white pl-2">
              {chatperson.name}
            </p>
          </div>
        </div>
        <div className="flex items-center px-2">
          <div
            className="text-white text-2xl  "
            onClick={() => {
              setIsopen(!isOpen);
            }}>
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </div>
          <div
            className="text-white font-extrabold text-base  cursor-pointer"
            onClick={() => {
              setChatopen(false);
            }}>
            <MdClose />
          </div>
        </div>
      </div>
      {isOpen && (
        // body of chat
        <div>
          <div className="h-[170px] border-x-[1px] border-[#2c65c8] p-2 bg-white">
            <div className="h-[160px]  bg-white overflow-y-scroll scrollbar scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-xl scrollbar-w-[6px]">
              <div className="mx-2 my-1 flex flex-col items-start">
                <div className=" my-1 mr-8 p-1 rounded-sm bg-neutral-100">
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className=" my-1 mr-8 p-1 rounded-sm bg-neutral-100">
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
              <p className=" text-neutral-400 text-[10px] font-light text-center">
                9:16 PM
              </p>

              <div className="mx-2 my-1 flex flex-col items-end">
                <div className=" my-1 ml-8 p-1 rounded-sm bg-neutral-100">
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className=" my-1 ml-8 p-1 rounded-sm bg-neutral-100">
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Input section of chat */}
          <div className="h-[30px] border-[1px]  border-neutral-300 p-2 bg-white flex justify-end">
            <div className="text-[#2c65c8] text-sm">
              <IoSend />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
