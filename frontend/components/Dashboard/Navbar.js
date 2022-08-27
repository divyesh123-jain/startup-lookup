import React from 'react'
import Link from 'next/link';
import {BiArrowBack} from 'react-icons/Bi';

const Navbar = ({data}) => {
  return (
    <nav className='grid place-items-center'>
        <div className="max-w-[1260px] w-full py-4 h-full border-b-[2px] border-black flex justify-between items-center">
            <div className='flex items-center gap-4'>
            <Link href = "/main/profile"><BiArrowBack className='text-2xl' /></Link>
            <h2 className='text-2xl font-bold'>{data?.startup?.name}</h2>

            </div>
            <div className='flex gap-3'>
                <p>Stats</p>
                <p>Documentation</p>
                <p>Team</p>
                <p>Contact Founder</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar