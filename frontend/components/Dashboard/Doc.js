import React from 'react'

const Doc = ({data}) => {
  return (
    <div className='flex font-prosans max-w-[1300px]  mx-auto justify-center items-center mt-5 w-full'>
        <div className='max-w-[500px]  w-full flex flex-col mx-auto '>
        <h2 className='text-2xl'>About <b>{data?.startup?.name}</b></h2>
        <p className='Details pt-5'>
            {data?.startup?.desc}
        </p>

        <div className='flex flex-col font-semibold mt-4'>
        <p>Founder : {data?.startup?.founder}</p>
        <p>Co Founder : {data?.startup?.cofounder}</p>
        <p>CEO : {data?.startup?.ceo}</p>
        <p>CTO : {data?.startup?.cto}</p>
        <p>CFO : {data?.startup?.cfo}</p>
        </div>
        
        </div>
    </div>
  )
}

export default Doc