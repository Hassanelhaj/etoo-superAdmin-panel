import Image from 'next/image'
import React from 'react'
import img from '../../../public/imgs/etoologo.jpg'
import{AiOutlineDown} from "react-icons/ai"

const Header = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-1'>
      <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
        <Image className="w-8 h-8 rounded-lg " src={img} />
        <span className="text-sm font-bold text-[#19ae20]">محرك بحث ايتو</span>
      </div>
      </div>
    <div className='flex flex-col bg-slate-100 rounded-lg lg:flex-row justify-end 
    items-center gap-2 py-2 px-3 mt-4'>
       {/* <span className='text-xm'><AiOutlineDown/></span>
        <Image src={img} alt='admin-img' className='w-4 h-4 lg:w-5 lg:h-5 rounded-full' />
        <span className='text-[10px] font-light '>المشرف</span> */}
    اهلا حسن
    </div>
    </main>
  )
}

export default Header