import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from "../components/CartItem"
import { Link } from 'react-router-dom';

export default function Cart() {

      const {cart} = useSelector((state) => state);
      const [totalAmount, setTotalAmount] = useState(0);


      useEffect(()=>{
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
      }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div className='flex justify-center w-screen h-full gap-12'>

            <div>
              {
                cart.map((item, index) =>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                } )
              }
            </div>

            <div className='flex flex-col justify-between w-[300px] my-6 max-h-[570px] gap-y-8'>
              <div>
                <div className='text-green-700 font-bold text-lg w-full text-left uppercase '>Your Cart</div>

                <div className='text-green-700 text-4xl font-bold uppercase mb-2'>Summary</div>

                <p className='font-semibold text-lg text-left'>
                  <span>Total Items: {cart.length}</span>
                </p>

              </div>

              <div className='flex flex-col gap-y-4 w-full'>
                <p className='font-semibold text-lg text-left'>Total Amount: $
                  <span className='font-bold text-lg text-left'>{totalAmount}</span>
                </p>
                <button className='w-full bg-green-700 py-2 font-semibold text-white rounded-sm hover:scale-110 transition duration-150 ease-in'>
                  Checkout Now
                </button>



              </div>
              
            </div>


          </div>


        ) :(

          <div className='flex flex-col items-center w-full h-screen justify-center'>
            <p className='font-bold text-lg mb-4'>Your Cart is Empty!</p>
            <Link to="/">
            <button className='bg-green-600 py-2 font-semibold text-white uppercase px-6 py-1.5
            rounded-sm hover:scale-110 transition duration-150 ease-in'>
              Shop Now
            </button>
            
            </Link>
          </div>
        )

      }










    </div>
  )
}
