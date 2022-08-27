import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllInvesters, getAllUsers } from '../../functions/GetFunctions'
import ProfileCard from './ProfileCard'

const List = ({ category }) => {
    const [data, setData] = useState([])
    useEffect(() => {

        getData();

    }, [])

    const getData = async () => {
        if (category === "investers") {
            const res = await getAllInvesters();
            setData(res);
            console.log(res)
            return;

        }
        else {
            const res = await getAllUsers()
            setData(res);
            console.log(res);
        }
    }


    return (
        data.data &&
        <div className='flex  gap-5 h-[90vh] overflow-auto flex-wrap p-10'>
            {data?.data.map((element) => {
                return (
                    <ProfileCard key = {data._id} data={element} />
                )
            })}

        </div>
    )
}

export default List