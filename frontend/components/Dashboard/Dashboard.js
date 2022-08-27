import React, { cloneElement, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import { getStartUpByName } from '../../functions/GetFunctions'


const Dashboard = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const router = useRouter();

    useEffect(() => {

        getData();
    }, [])

    const getData = async () => {
        
        const { startup } = router.query
        const res = await getStartUpByName(startup);
        console.log(res);
        setData(res);
        setLoading(false);
    }

    if (loading) {
        return <div className='h-[100vh] w-full grid place-items-center'>
            <div className='grid h-[100vh] place-items-center'>
                <span class="flex h-10 w-10">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
                </span>
            </div>
        </div>
    }
    return (
        data.startup &&
        <>
            <Navbar data={data} />
            {cloneElement(props.children, { data: data })}
        </>
    )
}

export default Dashboard