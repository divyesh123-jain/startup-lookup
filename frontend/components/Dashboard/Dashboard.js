import React from 'react'
import {FiArrowDownLeft,FiArrowUpRight} from 'react-icons/fi'


const Dashboard = () => {
  return (
    <div className='flex font-prosans max-w-[1300px] md:h-[100vh] p-4 mx-auto'>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
            <h2 className='font-prosansbold text-2xl'>Cash flow</h2>
            <span className='rounded-xl'>1-6 months</span>
            </div>
            <p className='text-md'>Cash comming in and out of this Business</p>
            <div className='flex gap-4 text-smx'>
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
            <div className='flex gap-8 mt-5'>
                <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[150px] w-[150px] bg-green-400'>
                    <FiArrowDownLeft className='font-extrabold' />
                    <p className='text-[.8rem]'>Inflow</p>
                    <p className='text-xl font-bold'> &#8377; 80000</p>
                </div>
                <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[150px] w-[150px] bg-purple-400'>
                    <FiArrowUpRight className='font-extrabold' />
                    <p className='text-[.8rem]'>Outflow</p>
                    <p className='text-xl font-bold'> &#8377; 120000</p>
                </div>
                <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[150px] w-[150px] bg-black text-white'>
                    <FiArrowDownLeft className='font-extrabold' />
                    <p className='text-[.8rem]'>Net Charges</p>
                    <p className='text-xl font-bold'> &#8377; 80000</p>
                </div>
            </div>

        </div>

        

        </div>

        

    </div>
  ) 
}

export default Dashboard