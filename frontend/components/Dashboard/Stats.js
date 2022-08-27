import React from 'react'
import Inflow from './Inflow'
import ProfitLoss from './ProfitLoss'
import Spendings from './Spendings'
import Tables from './Tables'
import { useRouter } from 'next/router'
import Doc from './Doc'
import Profile from './Profile'

const Stats = ({data}) => {
  return (
    <div className='flex font-prosans max-w-[1300px] flex-col gap-10 md:h-[100vh] p-4 mx-auto'>
            <div className='flex gap-10 flex-[1]'>
                <Inflow data = {data} />
                <ProfitLoss data = {data} />
            </div>

            <div className='flex gap-10 flex-[1]'>
                <Tables data = {data} />
                <Spendings data = {data} />
            </div>


        </div>
  )
}

export default Stats