import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {BsChatRight} from 'react-icons/bs'
import { useDataContext } from '../context/DataContext';

const ChatBox = () => {
    const {data,setChatopen,setChatperson} =useDataContext();

    const [isOpen, setIsopen]=useState(false);
    const online=[1,3,4,5,8,9]

  return (
    <div className='fixed  w-[17%] bottom-0 right-12'>
        <div className='flex h-[42px] bg-[#2c65c8] justify-between items-center rounded-t-md'>
            <div className='flex items-center'>
                <div className='text-white font-extrabold px-3'>
                <BsChatRight/>
                </div>     
              <p className='text-white text-base font-thin'>Chats</p>
            </div>
            <div className='text-white text-2xl px-2'  onClick={()=>{setIsopen(!isOpen)}}>
            {isOpen ? <MdKeyboardArrowDown />:<MdKeyboardArrowUp/>}
            </div>
            
        </div>
        {isOpen &&
        <div className='h-[300px] border-x-[1px] border-[#2c65c8] p-2 bg-white'>
          <div className='h-[300px]  bg-white overflow-y-scroll scrollbar scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-xl scrollbar-w-[6px]'>
            {data?.map((item)=>(
            <div key={item.id} className='flex items-center justify-between cursor-pointer' onClick={()=>{setChatopen(true);setChatperson(item)}}>
            <div  className=" flex p-1  items-center  ">
              <img src={item.profilepicture} className="w-8 h-8 rounded-full" alt={item.name} />
              <p className="text-sm font-base text-neutral-600 pl-2">{item.name}</p>
            </div>
            <div className={`h-2 w-2 rounded-full bg-neutral-300 mr-4 ${online.includes(item.id)?'bg-green-600':' bg-neutral-300' }`}></div>
            </div>
          ))}
          </div>
          </div>
        }
    </div>
  )
}

export default ChatBox