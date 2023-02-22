import React,{useState} from 'react'
import { MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDataContext } from '../context/DataContext';


const Chat = () => {
    const {chatperson,setChatopen}=useDataContext();
    const [isOpen, setIsopen]=useState(false);
  return (
    <div className='fixed  w-[17%] bottom-0 right-80'>
        <div className='flex h-[42px] bg-[#2c65c8] justify-between items-center rounded-t-md'>
            <div className='flex items-center'>
            <div  className=" flex p-1  items-center  ">
              <img src={chatperson.profilepicture} className="w-8 h-8 rounded-full" alt={chatperson.name} />
              <p className="text-sm font-light text-white pl-2">{chatperson.name}</p>
            </div>
            </div>
            <div className='flex items-center '>
            <div className='text-white text-2xl px-1 '  onClick={()=>{setIsopen(!isOpen)}}>
            {isOpen ? <MdKeyboardArrowDown />:<MdKeyboardArrowUp/>}
           </div>
           <div className='text-white font-extrabold text-base px-1 cursor-pointer' onClick={()=>{setChatopen(false)}}>
            <MdClose/>
            </div>
            </div>
            
        </div>
        {isOpen &&
        <div className='h-[250px] border-x-[1px] border-[#2c65c8] p-2 bg-white'>
          <div className='h-[250px]  bg-white overflow-y-scroll scrollbar scrollbar-thumb-neutral-300 scrollbar-thumb-rounded-xl scrollbar-w-[6px]'>
           
          </div>
          </div>
        }
    </div>
  )
}

export default Chat