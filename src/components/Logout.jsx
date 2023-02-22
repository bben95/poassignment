import React from 'react'
import { useDataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const {individual,data}=useDataContext();
    const navigate=useNavigate();
  return (
    
    <div className='absolute top-16 right-2 h-[60%] w-[28%] bg-white rounded-3xl drop-shadow-2xl flex flex-col items-center'>
      <div className='flex flex-col items-center py-4'>
        <img src={individual.profilepicture} alt={individual.name} className='w-24 h-24 rounded-full' />
        <p className='text-neutral-600 font-semibold'>{individual.name}</p>
        <p className='text-neutral-400'>{individual.email}</p>
      </div>
      
      <div className="h-[28%] bg-white   px-8 overflow-y-scroll scrollbar-none ">
          {data?.map((item)=>(
            
            <div key={item.id} className="border-b-2 border-neutral-200 flex p-2 cursor-pointer">
              <img src={item.profilepicture} className="w-8 h-8 rounded-full" alt={item.name} />
              <p className="text-lg font-light text-neutral-600 pl-4">{item.name}</p>
            </div>
        
          ))}
        </div>
         <button className='text-lg bg-red-700 text-white my-3 px-2 py-1 rounded-full' onClick={()=>{navigate('/')}}>Sign Out</button>
    </div>

  )
}

export default Logout