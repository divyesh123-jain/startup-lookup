import React from 'react'
import Link from 'next/link'

const Card = ({name,type,id,value}) => {
    return (
        <div>
            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[200px] w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDxn2MdaLmROiDP4-JcbqmSw7eP89OjFbVw&usqp=CAU" alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm'>{type}</p>
                        <p className=" text-gray-700 text-sm dark:text-gray-400">
                         {value} Yrs 
                         </p>
                        </div>
                        <Link href={`/main/dashboard/${name}`} >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                    
                </div>
            </div>

        </div>
    )
}

export default Card