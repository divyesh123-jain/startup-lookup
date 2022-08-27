import React, { cloneElement, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getUser } from '../../functions/loginFunctions'
import Topbar from './Topbar'
import Main from './Main'
const Profile = (props) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        findUser();
    }, [])

    const findUser = async () => {
        const token = localStorage.getItem("authToken")
        const res = await getUser(token)
        console.log(res)
        setUser(res);
        setLoading(false);
    }
    if (loading) {
        return <div className='h-[100vh] w-full grid place-items-center'>
            Loading
        </div>
    }
    return (
        <>
            <div className='flex'>
                <Sidebar user= {user}/>
                <div className='flex-[1] flex flex-col'>
                    <Topbar user = {user} />  
                    {cloneElement(props.children,{user:user})}
                </div>
            </div>
        </>
    )
}

export default Profile