import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import { putStartup } from '../functions/loginFunctions'

const Form2 = () => {
    useEffect(() => {
        const part1 = sessionStorage.getItem('part1')
        if (!part1) {
            Router.push('/form');
        }
    }, [])



    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        sessionStorage.setItem("part2",JSON.stringify(data));
        const obj1 = JSON.parse(sessionStorage.getItem('part1'));
        const obj2 = JSON.parse(sessionStorage.getItem("part2"));
        const obj = {...obj1,...obj2}
        const res = await putStartup(localStorage.getItem("authToken"),obj);
        console.log(res);
        sessionStorage.removeItem("part1")
        sessionStorage.removeItem("part2")
    }


    const quarterly = [
        {
            inflow: "APR21-JUN21",
            outflow: "APR21-JUN21"
        },
        {
            inflow: "JUL21-SEPT21",
            outflow: "JUL21-SEPT21"
        },
        {
            inflow: "OCT21-DEC21",
            outflow: "OCT21-DEC21"
        },
        {
            inflow: "JAN22-DEC22",
            outflow: "JAN22-DEC22"
        },
    ]
    const extras = [

        { name: "Revenue Agains Goal(2021-2022)", id: "RevAgainstGoal" },
        { name: "Average Revenue(2021-2022)", id: "AvgRev" },
        { name: "Active Customers", id: "Users" }
    ]



    return (
        <form className='bg-white flex max-w-[1200px] h-[600px] gap-8 rounded-xl drop-shadow-xl p-10  w-full'>
            <div className='flex-[1] flex flex-col flex-wrap'>
                <h2 className='text-2xl font-extrabold'>Tell us about your Finances</h2>
                <div className='mt-6 flex flex-col gap-5'>

                    <div>
                        <label htmlFor="inflow">Yearly Inflow</label>
                        <input type="number" className='form-input' {...register('inflow', { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="outflow">Yearly Outflow</label>
                        <input type="number" className='form-input' {...register('outflow', { required: true })} />
                    </div>
                    <div>
                    <label htmlFor="outflow">Enter Quarterly Inflow & Outflow</label>
                            <div className='flex gap-3 flex-col'>
                                <div className='flex gap-2'>
                                    <input type="number" className='form-input' disabled placeholder="Inflow" />
                                    <input type="number" className='form-input' disabled placeholder="Outflow" />
                                </div>
                    {quarterly.map((element) => {
                                    return (
                                        <div key ={element.inflow} className='flex gap-2'>
                                            <input type="number" className='form-input' placeholder={`${element.inflow}`} {...register(`${element.inflow + "Inflow"}`, { required: true })} />
                                            <input type="number" className='form-input' placeholder={`${element.outflow}`} {...register(`${element.inflow + "Outflow"}`, { required: true })} />
                                        </div>
                                    )
                                })}
                                <div>
                                    <label htmlFor="inflow">Expenditure on Marketing</label>
                                    <input type="number" className='form-input' {...register('expMarketing', { required: true })} placeholder='Expenditure' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className='flex-[1] flex flex-col flex-wrap'>
                    <h2 className='text-2xl font-extrabold'>Tell us about your Finances</h2>
                    <div className='mt-6 flex flex-col gap-5'>
                        <div>
                            <label htmlFor="inflow">Expenditure on Resources</label>
                            <input type="number" className='form-input' {...register('expResources', { required: true })} placeholder='Expenditure' />
                        </div>
                        <div>
                            <label htmlFor="inflow">Expenditure on Employees</label>
                            <input type="number" className='form-input' {...register('expEmployee', { required: true })} placeholder='Expenditure' />
                        </div> 
                    {extras.map((element) => {
                                    return (
                                        <div key= {element.name} className='flex gap-2 flex-col'>
                                            <label>{element.name}</label>
                                            <input type="number" className='form-input' placeholder={`${element.name}`} {...register(`${element.id}`, { required: true })} />
                                        </div>
                                    )
                                })}
                    <button type="submit" onClick={handleSubmit(onSubmit)} className='mt-3 text-white form-btn bg-purple-700'>Next</button>
                </div>

             </div>
        </form>
    )
}

export default Form2