import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCategory } from '../../functions/GetFunctions';
import Card from './Card';
const Category = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { category } = router.query;
    const [startup, setStartup] = useState([]);
    useEffect(() => {

        getData();
    }, [category])

    const getData = async () => {
        console.log(category)
        const res = await getCategory(category);
        setStartup(res);
        setLoading(false);
        console.log(res);

    };
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <>
            <div className='mt-10 px-5'>
                <h1 className='text-2xl font-extrabold font-prosansbold'>{category + " " + "Startups"}</h1>
                <div className="flex gap-4 flex-wrap">
                {startup?.startup?.map((element)=><Card name={element.name} value="2.25Cr" type={element.type} />)}
                </div>
            </div>
        </>
    )
}

export default Category