import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCategory } from '../../functions/GetFunctions';
import List from './List';
import Card from './Card';
const Category = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { category } = router.query;
    const [startup, setStartup] = useState([]);
    useEffect(() => {
        if (category === "investers" || category === "users") {
        }
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
    if (category === "investers" || category === "users"){
        return (<>
            <List category={category} /></>)
}
return (
    <>
        <div className='mt-10 px-5'>
            <h1 className='text-2xl font-extrabold font-prosansbold'>{category + " " + "Startups"}</h1>
            <div className="flex gap-4 flex-wrap">
                {startup?.startup?.map((element) => <Card name={element.name} key ={element.name} value="2.25Cr" type={element.type} />)}
            </div>
        </div>
    </>
)
    
    
}

export default Category