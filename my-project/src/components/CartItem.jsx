import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice"
import { toast } from 'react-hot-toast';

export default function ({item, itemIndex}) {

  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed From Cart");
  }
  return (
    <div>
      <div className='flex justify-center items-center max-w-[600px] gap-10 border-b-2  p-6'>

        <div className='max-w-[160px]'>
          <img src={item.image} alt="" />
        </div>  


        <div className='flex flex-col justify-center items-center w-full gap-y-4'>
          <p className='text-grey-900 font-semibold text-lg w-full text-left '>{item.title}</p>
          <p>{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
          <div className='flex justify-between items-center w-full'>
            <p className='text-green-600 font-semibold '>${item.price}</p>
            <div className='p-2 rounded-full bg-red-200 hover:bg-red-400 hover:text-white'
             onClick={removeFromCart}>
              <MdDeleteOutline/>
            </div>
          </div>




        </div>


      </div>


      
    </div>
  )
}
