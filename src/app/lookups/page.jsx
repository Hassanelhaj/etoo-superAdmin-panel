"use client"
import { redirect } from 'next/dist/server/api-utils';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Lookups from '../../../Components/lookupsPage/Lookups';

const page = () => {
    useLayoutEffect(()=>{
        if(!localStorage.getItem("_auth")){
          redirect('/login');
        }
      })
     
      const [mounted,setMounted] = useState(false);
      useEffect(()=>{
      
        setMounted(true)
     
      })
        if(!mounted)return null;
    
  return (
    <main className='p-4  h-screen flex flex-col gap-24 justify-center items-center'>
    {/* <h1 className='text-xl font-bold'>الجداول المرجعية</h1> */}
  <div className='  flex justify-center items-center'><Lookups/></div>
  </main>
  )
}

export default page