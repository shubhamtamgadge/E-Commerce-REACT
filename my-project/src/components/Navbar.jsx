import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function 
() {

   const {cart} = useSelector((state)=>state);
  return (
    <nav className='w-full h-14 bg-white flex items-center justify-center shadow-md '>
        
        <div className='w-4/7 h-full  flex items-center justify-between'>
          <NavLink to="/">
             <img src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo-2011.png" alt="" className='h-24 w-auto'/>
          </NavLink>
           
            <div className='flex gap-5 items-center text-2xl '>

              <NavLink to="/">
                <p className='text-xl'>Home</p>
              </NavLink>
              

              <NavLink to="/cart">
                <div className='relative'>
                  <PiShoppingCartLight/>
                  {
                    cart.length >0 &&
                    <span className='absolute -top-1 -right-1 bg-[#ea43af] 
                    text-xs w-4 h-4 flex justify-center items-center 
                    animate-bounce rounded-full text-white'>{cart.length}</span>
                  }

                </div>
              </NavLink>


            </div>

          
           
             

        </div>



    </nav>
  )
}
