import React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
const Inflow = ({data}) => {

    const months = [
        {
            date:"Apr 2021",
            date:"Jun 2021",
            date:"Jul 2021",
            date:"Aug 2021",
            date:"Sept 2021",
            date:"Oct 2021",
            date:"Nov 2021",
            date:"Dec 2021",
            date:"Jan 2022",
            date:"Feb 2022",
            date:"Mar 2022",    
        }
    ]

    return (
        data&&
        <>
            <div className='flex flex-col flex-[1] gap-3 flex-wrap'>
                <div className='flex justify-between'>
                    <h2 className='font-prosansbold text-2xl'>Cash flow</h2>
                    <span className='rounded-xl border-2 transitionall px-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.6)] text-[.7rem] flex justify-center items-center dark-shadows'>1<sup>st</sup>Apr 2021 - 31<sup>st</sup>March 2022</span>
                </div>
                <p className='text-md'>Cash comming in and out of this Business</p>
                <div className='flex gap-4 text-sm'>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='bg-green-400 h-3 w-3 rounded-full'></span>
                        <p>Inflow</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='bg-black h-3 w-3 rounded-full'></span>
                        <p>Outflow</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <span className='border-[1px] border-purple-400 h-3 w-3 rounded-full'></span>
                        <p>Inflow</p>
                    </div>
                </div>
                <div className='flex justify-between mt-5 flex-wrap'>
                    <div className='flex flex-col dark-shadows transitionall cursor-pointer rounded-xl justify-center items-center h-[170px] w-[170px] bg-green-400'>
                        <FiArrowDownLeft className='font-extrabold' />
                        <p className='text-[.8rem]'>Inflow</p>
                        <p className='text-xl font-bold'> &#8377; {data?.startup?.inflow}</p>
                    </div>
                    <div className='flex flex-col dark-shadows transitionall cursor-pointer rounded-xl justify-center items-center h-[170px] w-[170px] bg-purple-400'>
                        <FiArrowUpRight className='font-extrabold' />
                        <p className='text-[.8rem]'>Outflow</p>
                        <p className='text-xl font-bold'> &#8377; {data?.startup?.outflow}</p>
                    </div>
                    <div className='flex flex-col dark-shadows transitionall cursor-pointer rounded-xl justify-center items-center h-[170px] w-[170px] bg-black text-white'>
                        <FiArrowDownLeft className='font-extrabold' />
                        <p className='text-[.8rem]'>Net Charges</p>
                        <p className='text-xl font-bold'> &#8377; {data?.startup?.inflow-data?.startup?.outflow}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Inflow