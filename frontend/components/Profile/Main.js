import React from 'react'
import Card from './Card'

const Main = ({user}) => {
  return (
    <div className='p-5 overflow-auto'>
        <div className='w-full rounded-xl bg-green-400 dark-shadows p-4'>
            <h2 className='text-2xl transitionall font-bold font-prosansbold'>Good Afternoon, {user?.payload?.firstname && user?.payload?.firstname}.</h2>
            <p>Let's have a look a other Entrepreneurs have to offer</p>
        </div>

        <div className='mt-10 px-3'>
            <h1 className='text-2xl font-extrabold font-prosansbold'>Trending Startups</h1>
            <div className='my-4 flex gap-4'>
                <Card name = "Crackman" value = "2.25Cr" type = "Technology" />
                <Card name = "Lenskart" value = "100Cr" type = "Technology" />
                <Card name = "Money Control" value = "45Cr" type = "Technology" />
            </div>
        </div>
    </div>
  )
}

export default Main