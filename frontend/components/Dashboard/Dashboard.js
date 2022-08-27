import React from 'react'

import Inflow from './Inflow'
import Navbar from './Navbar'
import ProfitLoss from './ProfitLoss'
import Spendings from './Spendings'
import Tables from './Tables'


const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className='flex font-prosans max-w-[1300px] flex-col gap-10 md:h-[100vh] p-4 mx-auto'>
            <div className='flex gap-10 flex-[1]'>
                <Inflow />
                <ProfitLoss />
            </div>

            <div className='flex gap-10 flex-[1]'>
                <Tables />
                <Spendings />
            </div>


        </div>
        </>




    )
}

export default Dashboard