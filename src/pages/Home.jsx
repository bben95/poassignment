import React from 'react'
import { Outlet} from 'react-router-dom'


import Navbar from '../components/Navbar';

const Home = () => {
    
  return (
    <div className='w-full h-screen flex overflow-y-auto'>
       <Navbar/>
        <Outlet/>
            
           
    

    </div>
  )
}

export default Home