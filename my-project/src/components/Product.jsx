import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {add, remove} from "../redux/Slices/CartSlice"

export default function Product({post}) {

  const {cart} = useSelector((state)=>state);

  const dispatch = useDispatch();


  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item Added To Cart");
  }

  const removeFromCart = () => {

    dispatch(remove(post.id));
    toast.error("Item Removed To Cart");

  }

  return (
    <div className='flex flex-col items-center justify-between 
     hover:scale-110 transition duration-200 ease-in rounded-xl gap-3 p-4 ml-5 outline'>
      <div>
        <p className='text-grey-900 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>

      <div>
        <p className='w-40 text-grey-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt="" className='h-full w-full' />
      </div>


      <div className='flex justify-between  items-center w-full mt-5'>

        <div>
          <p className='text-green-600 font-semibold '>${post.price}</p>
        </div>

        
          {
            cart.some((p) => p.id === post.id) ?
            (
              <button className='text-gray-700 border-2 border-grey-700
               rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:bg-gray-700 hover:text-white transition duration-200 ease-in'
               onClick={removeFromCart}>
                Remove Item
              </button>
            ) : (
                <button className='text-gray-700 border-2 border-grey-700
               rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:bg-gray-700 hover:text-white transition duration-100 ease-in'
                onClick={addToCart}>
                  Add To Cart
                </button>

            )
          }

      </div>

      
      







    </div>
  )
}
