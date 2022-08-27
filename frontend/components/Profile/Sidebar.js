import Link from 'next/link'
import React from 'react'
import { AiFillHome, AiFillMedicineBox } from 'react-icons/ai'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import { GiOpenBook, GiClothes, GiFarmTractor } from 'react-icons/gi'


const Sidebar = ({ user }) => {
    return (
        user &&
        <>
            <div className='h-[100vh] bg-black text-white font-prosans w-[250px]'>
                <Link href="/main/profile">
                    <div className='p-4 flex gap-3 cursor-pointer items-center'>
                        <img src="https://img.pixers.pics/pho_wat(s3:700/FO/63/91/03/87/700_FO63910387_43e639b32c99185b44f90b0aa7e06e46.jpg,700,696,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,646,jpg)/stickers-polygon-abstract-background-vector.jpg.jpg" alt="" className='h-8 w-8 rounded-full' />
                        <div className=' flex-col'>
                            <h3 className='text-white text-md capitalize'>{user?.payload && user?.payload.firstname + " " + user.payload.lastname}  </h3>
                            <p className='text-[.7rem]' >{user?.payload.type && user?.payload.type === "User" ? "Entrepreneur" : "Invester"}</p>
                        </div>
                    </div></Link>
                <div className='mt-5 p-4'>
                    <p className='text-[rgba(255,255,255,.3)] uppercase font-bold text-sm '>Startup Categories</p>
                    <div className='flex flex-col mt-4 gap-2'>
                        <Link href='/main/profile'>
                            <div className={`nav-link`}>
                                <AiFillHome />
                                Dashboard</div>
                        </Link>
                        <Link href='/main/Agriculture'>
                            <div className={`nav-link`}>
                                <GiFarmTractor />
                                Agriculture</div>
                        </Link>
                        <Link href='/main/Fintech'>
                            <div className={`nav-link`}>
                                <RiMoneyPoundCircleFill />
                                FinTech</div>
                        </Link>
                        <Link href='/main/EdTech'>
                            <div className={`nav-link`}>
                                <GiOpenBook />
                                EdTech</div>
                        </Link>
                        <Link href='/main/Cosmetics'>
                            <div className={`nav-link`}>
                                <AiFillHome />
                                Cosmetics</div>
                        </Link>
                        <Link href='/main/Clothing'>
                            <div className={`nav-link`}>
                                <GiClothes />
                                Clothing</div>
                        </Link>
                        <Link href='/main/Pharma'>
                            <div className={`nav-link`}>
                                <AiFillMedicineBox />
                                Pharma</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar