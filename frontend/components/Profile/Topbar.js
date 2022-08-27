import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';

const Topbar = () => {
    return (
        <div className='bg-white border-b-gray-300 border-[1px] h-[60px] flex justify-between p-4 items-center'>
            <div className="px-2 flex items-center w-[250px] text-sm py-1 justify-between border-[1px] border-black rounded-[14px]">
                <input type="text" placeholder='Search for Startups' className='border-none outline-none bg-transparent' />
                <BsSearch />
            </div>

            <div className='flex gap-3 items-center'>
                <span className='rounded-full border-black border-2 h-8 w-8 flex justify-center items-center'><AiFillMessage /></span>
                <span className='h-[30px] w-[1px] bg-black ml-4'></span>
                <div className='flex items-center'>
                    
                    <div className='flex p-2 px-3 items-center cursor-pointer hover:bg-gray-100 gap-2'>
                    <GrLogout />
                    <p>Log Out</p>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Topbar