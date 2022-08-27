import React from 'react'
import Card from './Card'

const Main = ({ user, data }) => {
  return (
    <div className='p-5 md:h-[90vh] overflow-auto'>
      <div className='w-full rounded-xl bg-green-400 dark-shadows p-4'>
        <h2 className='text-2xl transitionall font-bold font-prosansbold'>Good Afternoon, {user?.payload?.firstname && user?.payload?.firstname}.</h2>
        <p>Let&apos;s have a look at what other Entrepreneurs have to offer</p>
      </div>

      {data?.myStartups?.length != 0 ?

        <div className='mt-10 px-3'>
          <h1 className='text-2xl  font-extrabold font-prosansbold'>Your Startups</h1>
          <div className='my-4 flex gap-4'>
            {data?.myStartups?.map((element) => <Card name={element.name} key = {element.name} value={element.age} type={element.type} />)}
            
          </div>
        </div> :
        <></>
      }
      {data?.allStartups?.length != 0 ?

        <div className='mt-10 px-3 flex-wrap w-full'>
          <h1 className='text-2xl  font-extrabold font-prosansbold'>Trending Startups</h1>
          <div className='my-4 flex gap-4'>
            {data?.allStartups?.filter((element)=>element.Users>12000000).slice(0,3).map((element) => <Card name={element.name} key = {element.name} value={element.age} type={element.type} />)}
          </div>
        </div> :
        <></>
      }
    </div>
  )
}

export default Main