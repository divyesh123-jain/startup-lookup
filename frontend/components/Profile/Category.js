import React from 'react'
import { useRouter } from 'next/router'
const Category = () => {
    const router = useRouter();
    const {category} = router.query;
    return (
        <>
            <div className='mt-10 px-3'>
                <h1 className='text-2xl font-extrabold font-prosansbold'>{category} Startups</h1>
            </div>
        </>
    )
}

export default Category