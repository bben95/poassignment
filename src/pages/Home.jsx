import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";

const Home = () => {
    const location=useLocation();
    const data=location.state;
    console.log(data);
    const [active,setActive]=useState('profile')
  return (
    <div className='w-full h-screen flex '>
        <div className='h-full w-[18%] bg-gradient-to-t from-[#6139c8] to-[#3d57c8] flex items-center justify-center m-12 rounded-3xl'>
            <nav className='w-full pl-10 flex flex-col gap-5'>
                <div className='flex justify-between relative'>
                <p className={`relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-lg cursor-pointer ${active==='profile'?'text-white':'text-red-600'}` } onClick={()=>{setActive('profile')}}>Profile</p>
                
                <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve '> <MdNavigateNext className='text-xl text-neutral-400'/></div>
              
                </div>
                
                <div className='flex justify-between relative'>
                <p className="relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-lg cursor-pointer " onClick={()=>{setActive('posts')}}>Posts</p> 
                <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2  before:top-curve after:bottom-curve'> <MdNavigateNext className='text-xl text-neutral-400'/></div>
                </div>
                
                <div className='flex justify-between relative'>
                <p className="relative before:absolute before:-bottom-2 before:left-0 before:w-40 before:h-px before:bg-gray-400 text-lg cursor-pointer " onClick={()=>{setActive('gallery')}}>Gallery</p>
                <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve'> <MdNavigateNext className='text-xl text-neutral-400'/></div>
                </div>
                
                <div className='flex justify-between relative'>
                <p className='text-lg' onClick={()=>{setActive('todo')}}>ToDo</p>
                <div className='flex items-center justify-center w-8 h-8 bg-white rounded-full absolute -right-2 before:top-curve after:bottom-curve'> <MdNavigateNext className='text-xl text-neutral-400'/></div>
                </div>
                
                
            </nav>
        </div>

    </div>
  )
}

export default Home