import React, { cloneElement, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import { getStartUpByName } from '../../functions/GetFunctions'
import Stats from './Stats'
import Doc from './Doc'
import Profile from './Profile'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [page,setPage] = useState(1)
    const router = useRouter();
    const { startup } = router.query
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        
        
        const res = await getStartUpByName(startup);
        console.log(res);
        setData(res);
        setLoading(false);
    }

    if (loading) {
        return <div className='h-[100vh] w-full grid place-items-center'>
            <div className='grid h-[100vh] place-items-center'>
                <span className="flex h-10 w-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
                </span>
            </div>
        </div>
    }
    return (
        data.startup &&
        <>
            <Navbar page = {page} setPage = {setPage} data={data} />
            {page===1?<Stats data = {data} />:page===2?<Doc data = {data}/>:<Profile data= {data?.uid} />}
            
        </>
    )
}

export default Dashboard