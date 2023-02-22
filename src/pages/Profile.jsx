import React, { useState } from 'react'
import Chat from '../components/Chat';
import ChatBox from '../components/ChatBox';
import Logout from '../components/Logout';
import { useDataContext } from '../context/DataContext'
import MapImage from '../MapImage.png'

const Profile = () => {
    const {individual,chatopen}=useDataContext();
    const [login,setLogin]=useState(false);
    console.log(chatopen);
  return (
    <div className='h-screen w-[74%] my-6 mr-4 relative'>
      <div className=' w-full flex justify-between py-2 border-b-[1px] border-neutral-300'>
     <p className='text-xl font-semibold text-neutral-600'>Profile</p>
     <div className='flex items-center cursor-pointer' onClick={()=>{setLogin(!login)}}>
      <img src={individual.profilepicture} className='w-9 h-9 rounded-full' alt={individual.name} />
      <p className='text-xl font-normal text-neutral-600 pl-2'>{individual.name}</p>
     </div>
     
     </div >
     <div className='w-full flex mt-6'>
     <div className=' w-[38%] flex  relative'>
     <div class=" before:absolute before:inset-y-0 before:right-0 before:w-[1px] before:h-[100%] before:bg-neutral-300"></div>
      <div className='flex flex-col pr-4 items-center'>
        <img src={individual.profilepicture} alt={individual.name} className=' w-[184px] h-[184px] max-w-[190px] max-h-[190px] rounded-full' />
        <p className='text-xl font-bold text-neutral-600 pt-1'>{individual.name}</p>
        <div className='flex flex-row  border-b-[1px] border-neutral-300 gap-3 py-3'>
          <div className='flex flex-col items-end gap-2'>
            <p className='text-xl font-normal text-neutral-400'>Username</p>
            <p className='text-xl font-normal text-neutral-400'>e-mail</p>
            <p className='text-xl font-normal text-neutral-400'>Phone</p>
            <p className='text-xl font-normal text-neutral-400'>Website</p>
            
            
          </div>
          <div className='flex flex-col  gap-2'>
          <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            
          </div>
          <div className='flex flex-col  gap-2'>
          <p className='text-xl font-bold  text-neutral-600'>{individual.username}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.email}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.phone}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.website}</p>
          </div>
          
        </div>
        <p className='text-xl font-normal text-neutral-400 py-2'>Company</p>
        <div className='flex flex-row  gap-3'>
          
          <div className='flex flex-col items-end '>
            <p className='text-xl font-normal text-neutral-400'>Name</p>
            <p className='text-xl font-normal text-neutral-400'>catchphrase</p>
            <p className='text-xl font-normal text-neutral-400'>bs</p>
           
           
          </div>
          <div className='flex flex-col'>
          <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            
          </div>
          <div className='flex flex-col '>
          <p  className='text-xl font-bold  text-neutral-600'>{individual.company.name}</p>
           
          <p className='text-xl font-bold  text-neutral-600'>{individual.company.catchPhrase}</p>
            <p className='text-xl font-bold  text-neutral-600'>{individual.company.bs}</p>
          </div>
        
        </div>
      </div>
      
      
     </div>
    
     <div className='w-full pl-12'>
        <p className='text-xl font-normal text-neutral-400 py-2'>Address:</p>
        <div className='w-full px-8 py-2'>
        <div className='flex flex-row gap-3'>
          <div className='flex flex-col items-end gap-2'>
            <p className='text-xl font-normal text-neutral-400'>Street</p>
            <p className='text-xl font-normal text-neutral-400'>Suite</p>
            <p className='text-xl font-normal text-neutral-400'>City</p>
            <p className='text-xl font-normal text-neutral-400'>Zipcode</p>
            
            
          </div>
          <div className='flex flex-col  gap-2'>
          <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            <p className='text-xl font-normal text-neutral-400'>:</p>
            
          </div>
          <div className='flex flex-col  gap-2'>
          <p className='text-xl font-bold  text-neutral-600'>{individual.address.street}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.address.suite}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.address.city}</p>
          <p className='text-xl font-bold  text-neutral-600'>{individual.address.zipcode}</p>
          </div>
          
        </div>
          
        </div>
        <div className='py-4 px-8 h-full'>
        <img src={MapImage} alt="mapImage" className='w-[100%] h-[60%] rounded-3xl object-cover' />
        <div className='flex w-full justify-end gap-4'>
          <div className='flex items-center'>
            <p className='font-normal text-xs text-neutral-400'>Lat:</p>
            <p className='text-sm font-semibold text-neutral-600'>{individual.address.geo.lat}</p>
          </div>
          <div className='flex items-center'>
            <p className='text-xs font-normal text-neutral-400'>Lat:</p>
            <p className='text-sm font-semibold   text-neutral-600'>{individual.address.geo.lng}</p>
          </div>
        </div>
        </div>
        

      </div>
      </div>
     {login && <Logout/>}
     <ChatBox/>
     { chatopen && <Chat/>}
    </div>
  )
}

export default Profile