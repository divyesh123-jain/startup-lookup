import React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import ProfitLoss from './ProfitLoss'
import Tables from './Tables'


const Dashboard = () => {
    return (
        <div className='flex font-prosans max-w-[1300px] gap-10 md:h-[100vh] p-4 mx-auto'>
            <div className='flex flex-col gap-10 flex-[1]'>
                <div className='flex flex-col gap-3 flex-wrap'>
                    <div className='flex justify-between'>
                        <h2 className='font-prosansbold text-2xl'>Cash flow</h2>
                        <span className='rounded-xl border-2 transitionall px-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.6)]'>1-6 months</span>
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
                        <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[170px] w-[170px] bg-green-400'>
                            <FiArrowDownLeft className='font-extrabold' />
                            <p className='text-[.8rem]'>Inflow</p>
                            <p className='text-xl font-bold'> &#8377; 80000</p>
                        </div>
                        <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[170px] w-[170px] bg-purple-400'>
                            <FiArrowUpRight className='font-extrabold' />
                            <p className='text-[.8rem]'>Outflow</p>
                            <p className='text-xl font-bold'> &#8377; 120000</p>
                        </div>
                        <div className='flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)] rounded-xl justify-center items-center h-[170px] w-[170px] bg-black text-white'>
                            <FiArrowDownLeft className='font-extrabold' />
                            <p className='text-[.8rem]'>Net Charges</p>
                            <p className='text-xl font-bold'> &#8377; 80000</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-prosansbold'>
                        Net income
                    </h2>
                    <Tables />
                </div>
            </div>

            <div className='flex flex-col gap-10 flex-[1]'>
                <ProfitLoss />
            </div>


        </div>




    )
}

export default Dashboard