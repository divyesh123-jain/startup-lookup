import React from 'react'
import Link from 'next/link';
import {BiArrowBack} from 'react-icons/bi';

const Navbar = ({data,page,setPage}) => {
  return (
    <nav className='grid place-items-center font-prosans'>
        <div className="max-w-[1260px] w-full py-4 h-full border-b-[2px] border-black flex justify-between items-center">
            <div className='flex items-center gap-4'>
            <Link href = "/main/profile"><BiArrowBack className=' cursor-pointer hover:scale-125 text-2xl' /></Link>
            <h2 className='text-2xl font-bold'>{data?.startup?.name}</h2>

            </div>
            <div className='flex gap-8 '>
                <div onClick = {()=>setPage(1)} className={`cursor-pointer ${page===1?"font-bold":""} hover:font-bold transitionall`}>Stats</div>
                <div onClick = {()=>setPage(2)} className={`cursor-pointer ${page===2?"font-bold":""} hover:font-bold transitionall`}>Documentation & Team</div>
                <div onClick = {()=>setPage(3)} className={`cursor-pointer ${page===3?"font-bold":""} hover:font-bold transitionall`}>Contact Founder</div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar