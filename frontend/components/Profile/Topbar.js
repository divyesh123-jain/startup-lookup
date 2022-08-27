import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import Router from 'next/router';
import Link from 'next/link';

const Topbar = ({ data ,user}) => {

    const logout = () => {
        localStorage.removeItem('authToken');
        Router.push('/login/login')
    }
    return (
        <div className='bg-white border-b-gray-300 border-[1px] h-[60px] flex justify-between p-4 items-center'>
            <div className='flex items-center gap-4'>
                {/* <div className="px-2 flex items-center w-[250px] text-sm py-1 justify-between border-[1px] border-black rounded-[14px]">
                    <input type="text" placeholder='Search for Startups' className='border-none outline-none bg-transparent' />
                    <BsSearch />
                </div> */}
                <Link href="/main/investers"><div className="px-2 cursor-pointer hover:bg-black hover:text-white transitionall flex items-center w-[250px] text-sm py-1 justify-between border-[1px] border-black rounded-[14px] ">Search Investers</div></Link>
                <Link href="/main/users"><div className="px-2 cursor-pointer hover:bg-black hover:text-white transitionall flex items-center w-[250px] text-sm py-1 justify-between border-[1px] border-black rounded-[14px] ">Search Entrepreneurs</div></Link>
            </div>

            <div className='flex gap-3 items-center'>
            {user?.payload.type==="User"?
            <Link  href = "/form">
            <div className='flex p-2 px-3 items-center cursor-pointer hover:bg-gray-100 gap-2'>

                <p>Add Startup</p>
            </div>
            
        </Link>:""}
                
                <span className='h-[30px] w-[1px] bg-black ml-4'></span>
                    <div className='flex items-center'>
                <div onClick={logout} className='flex p-2 px-3 items-center cursor-pointer hover:bg-gray-100 gap-2'>
                    <GrLogout />
                    <p>Log Out</p>
                </div>
            </div>
        </div>
        </div >

    )
}

export default Topbar