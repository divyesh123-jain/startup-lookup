import React from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div className='bg-purple-700 font-prosans h-[100vh] w-full grid  place-items-center'>
        <Form />
    </div>
  );
}

// import React, { useState,useRef } from 'react'
// import { useForm } from 'react-hook-form';

// const form = () => {

//     const {register,handleSubmit} = useForm()

//     // const [page,setPage] = useState(1);
//     // const [name, setName] = useState("");
//     // const [age, setAge] = useState(1);
//     // const [gst, setGst] = useState("");
//     // const [founder, setFounder] = useState("");
//     // const [coFounder, setCoFounder] = useState("");
//     // const [ceo, setCeo] = useState("");
//     // const [cfo, setCfo] = useState("");
//     // const [cto, setCto] = useState("");
//     // const [employees, setEmployees] = useState(1);
//     // const [type,setType] = useState("");  

//     // const changePage = (e)=>{
//     //     e.preventDefault();
//     //     if(page===1){
//     //         setPage(2)
//     //     }
//     //     else{
//     //         setPage(1)  
//     //     }
//     // }

//     const onSubmit = (data)=>console.log(data)
//     return (
//         <div className='bg-purple-700 font-prosans h-[100vh] w-full grid  place-items-center'>
//             <form onSumbit = {handleSubmit(onSubmit)} className='bg-white flex max-w-[1200px] h-[600px] gap-8 rounded-xl drop-shadow-xl p-10  w-full'>
//                 <input type="text" {...register("name")} />
//                 <input type="submit" value="Nothing" />
//                 {/* {page===1?
//                 <><div className='flex-[1] flex flex-col flex-wrap'>
//                     <h2 className='text-2xl font-extrabold'>Tell us about your Startup</h2>
//                     <div className='mt-6 flex flex-col gap-5'>

//                         <div>
//                             <label htmlFor="name">Name of Your Startup</label>
//                             <input id="name" type="text" className='form-input' {...register('name')} name = "name" placeholder='Name of the Startup' />
//                         </div>
                        
//                         <div className=' flex gap-2'>
//                             <div className='flex-[1]'>
//                                 <label htmlFor="age">Age of Your Startup</label>
//                                 <input id="age"  type="number" min="1" className='form-input' {...register('age')} name = "age" placeholder='Name of the Startup' />
//                             </div>

//                             <div className='flex-[.5]'>
//                                 <label htmlFor="name">GST Reg. No.</label>
//                                 <input id="name" type="text" className='form-input' {...register('gst')} name = "gst" placeholder='Name of the Startup' />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="">Core Team Members</label>
//                             <div className='flex flex-col gap-2'>

//                                 <div className='flex gap-2'>
//                                     <div className='flex-[1]'>

//                                         <input id="age" type="text" className='form-input' {...register('founder')} name = 'founder' placeholder='Name' />
//                                     </div>

//                                     <div className='flex-[.5]'>
//                                         <input id="ceo" type="text" disabled className='form-input' placeholder='Founder' />
//                                     </div>
//                                 </div>

//                                 <div className='flex gap-2'>
//                                     <div className='flex-[1]'>

//                                         <input id="age" type="text" className='form-input' {...register('cofounder')} name = 'cofounder' placeholder='Name' />
//                                     </div>

//                                     <div className='flex-[.5]'>
//                                         <input id="ceo" type="text" disabled className='form-input' placeholder='Co-Founder' />
//                                     </div>
//                                 </div>
//                                 <div className='flex gap-2'>
//                                     <div className='flex-[1]'>

//                                         <input id="age"type="text" className='form-input' {...register('ceo')} name = 'ceo' placeholder='Name' />
//                                     </div>

//                                     <div className='flex-[.5]'>
//                                         <input id="ceo" type="text" disabled className='form-input' placeholder='Chief Executive Officer' />
//                                     </div>
//                                 </div>

//                                 <div className='flex gap-2'>
//                                     <div className='flex-[1]'>
//                                         <input id="age" {...register('cfo')} name = 'cfo'  type="text" className='form-input' placeholder='Name' />
//                                     </div>

//                                     <div className='flex-[.5]'>
//                                         <input id="ceo" type="text" disabled className='form-input' placeholder='Chief Finance Officer' />
//                                     </div>
//                                 </div>

//                                 <div className='flex gap-2'>
//                                     <div className='flex-[1]'>
//                                         <input id="age" {...register('cto')} name = 'cto'  type="text" className='form-input' placeholder='Name' />
//                                     </div>

//                                     <div className='flex-[0.5]'>
//                                         <input id="ceo" type="text" disabled className='form-input' placeholder='Cheif Technology Officer' />
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                         <div className='flex-[1] mt-auto'>
//                             <label htmlFor="employees">Number of Employees in your startup {"(approx)"}</label>

//                             <input id="employees"{...register('employee')} name = 'employee' type="number" min="1" className='form-input' placeholder='Name of the Startup' />
//                         </div>

//                     </div>
//                 </div>
//                 <div className='flex-[1] flex flex-col pb-[2.2rem]'>
//                     <h2 className='text-2xl font-extrabold'>Describe your Startup</h2>
//                     <div className='mt-6 flex flex-col'>
//                         <label htmlFor="desc">Description</label>
//                         <div>
//                             <select required name="type" id="type" {...register('type')}  className='my-3 form-input'>
//                                 <option value="">What kind of startup are you?</option>
//                                 <option value = "Fintech">Fintech</option>
//                                 <option value = "Agriculture">Agriculture</option>
//                                 <option value = "EdTech">EdTech</option>
//                                 <option value = "Pharma">Pharma</option>
//                                 <option value = "Cosmetics">Cosmetics</option>
//                                 <option value = "Clothing">Clothing</option>
//                                 <option value = "Technology">Technology</option>
//                                 <option value = "Others">Others</option>
//                             </select>
//                         </div>
//                         <textarea required name="desc" className='form-input flex-[1]' {...register('desc')}  rows="15" id=""></textarea>
//                     </div>
//                     {/* <button onClick={()=>{}} className='mt-auto text-white form-btn bg-purple-700'>Next</button> */}
//                     {/* <input type="submit" />
//                 </div>
//                 </>
//                 :
//                 <>
//                     <div className='flex-[1] flex flex-col flex-wrap'>
//                     <button onClick={(e)=>changePage(e)} className=' text-white form-btn bg-purple-700'>Back</button>
//                     </div>
//                     <div className='flex-[1] flex flex-col flex-wrap'></div>
//                 </> */}
//                 {/* } */} 
//             </form>
//         </div>
//     )
// }

// export default form