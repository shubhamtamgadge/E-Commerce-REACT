import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

export default function Home() {

  const API_URL =  "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProducts() {

    setLoading(true);

    try {

      const responce = await fetch(API_URL);
      const res = await responce.json();

      setPosts(res);
      
    } catch (error) {
      console.log("error fetching products");
      setPosts([]);
    }

    setLoading(false);

    
  }

  useEffect(()=>{
    fetchProducts()
  },[]);


  return (
    <div>
      {
         loading ? <Spinner/> : 
         posts.length > 0 ?
         (
            <div className='grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-y-10 mt-8 space-x-5 min-h-[80vh]'>
              {
                posts.map((post) =>(
                <Product key= {posts.id} post = {post}/>
                ))
              }
            </div>

         ) : 
         <div className='flex justify-center items-center '>
          <p>No data found</p>
         </div>


      }


       
    </div>
  )
}
