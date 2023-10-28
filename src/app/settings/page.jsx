"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Settings from '../../../Components/settingsPage/Settings'
import { redirect } from 'next/dist/server/api-utils';

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
    <main className='p-4  h-screen flex flex-col gap-4 justify-center items-center'>
      {/* <h1 className='text-xl font-bold'>الأعدادات</h1> */}
    <div className='  flex justify-center items-center'><Settings/></div>
    </main>
  )
}

export default page