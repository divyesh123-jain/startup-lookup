import React, { useState } from 'react'
import { FcBusinessman, FcManager } from 'react-icons/fc'
import { MdCreate } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { createUser } from '../../functions/loginFunctions'

const createnew = () => {
    const [interest,setInterests] = useState([]);
    const [type, setType] = useState('User');

    const [firstname, setfirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [gender,setGender] = useState("");
    const [age,setAge] = useState();
    const [noOfStartupsInvestedIn,setnoOfStartupsInvestedIn] = useState();
    const [yearsExp,setYearsExp] = useState();
    const [typeOfInvester,setTypeOfInvester] = useState("");

    const clear = () => {
        setfirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setGender("");
        setAge(null);
        setnoOfStartupsInvestedIn(null);
        setYearsExp(null);
        setTypeOfInvester("");
    }

    const removeInterest = (element)=>{
        const newArr = [...interest]
        const index = newArr.indexOf(element);
        newArr.splice(index,1);
        setInterests(newArr);
    }

    const addInterest = (element)=>{
        const newArr = [...interest]
        if(!newArr.includes(element)){
            newArr = [...newArr,element]
        }
        setInterests(newArr);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(gender===""){
            alert("Enter your gender");
            return;
        }
        const payload = {
            firstname,
            lastname,
            email,
            password,
            gender,
            age,
            type,
        }
        if(type==="Invester"){
            payload.noOfStartupsInvestedIn = noOfStartupsInvestedIn,
            payload.yearsExp = yearsExp,
            payload.typeOfInvester = typeOfInvester,
            payload.interests = interest
        }
        const res = await createUser(payload);
        if(res.success===true){
            clear();
            // const form = document.getElementById("createForm");
            // form.reset();
        }
    }

    return (
        <>
            <div className='h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'>
                <div className='md:w-[500px] p-5 rounded-md h-[100vh] md:h-[80vh] overflow-auto w-full bg-white drop-shadow-xl flex justify-center items-center gap-4 flex-col'>
                <MdCreate className='text-4xl text-purple-600' />
                    <h2 className='text-2xl font-semibold '>I am an..</h2>
                    <div className="flex flex-col md:flex-row p-4 w-[400px] gap-2">
                        <div onClick={() => setType("Invester")} className={`p-2 flex-[1] ${type === "Invester" ? "bg-purple-200" : ""} text-purple-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-purple-500 gap-2`}>
                            <FcBusinessman className='text-xl' />
                            <p>Invester</p>
                        </div>
                        <div onClick={() => setType("User")} className={`p-2 flex-[1] ${type === "User" ? "bg-purple-200" : ""} text-purple-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-purple-500 gap-2`}>
                            <FcManager className='text-xl' />
                            <p>Entrepreneur</p>
                        </div>

                    </div>
                    <hr className='mt-2 w-[80%]' />
                    {type === "Invester" ?
                        <>
                            <form id = "createForm" onSubmit={(e)=>handleSubmit(e)} className='flex flex-col max-w-[400px] flex-wrap gap-2' >
                                <div className='flex flex-wrap gap-2'>
                                    <input type="text" value = {firstname} onChange = {(e)=>setfirstName(e.target.value)} className='form-input' required placeholder='First Name' />
                                    <input type="text" value = {lastname} onChange = {(e)=>setLastName(e.target.value)} className='form-input' required placeholder='Last Name' />
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    <input type="number" value = {age} onChange = {(e)=>setAge(e.target.value)} className='form-input' min = "18" required placeholder='Age' />
                                    <select className='form-input' onChange = {(e)=>setGender(e.target.value)} name="gender" id="gender">
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <input type="email" id = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)} required placeholder='Email Address' className='form-input' />
                                <input type="password" id = "password" value = {password} onChange = {(e)=>setPassword(e.target.value)} required placeholder='Password' className='form-input' />
                                <select  name="Type of Invester" id="typeofInvester" onChange = {(e)=>setTypeOfInvester(e.target.value)} className='p-1 border-2 border-gray-400 rounded-[5px]'>
                                    <option value="AngelInvester">Angel Invester</option>
                                    <option value="VentureCapitalist">Venture Capitalist</option>
                                    <option value="CorporateInvester">Corporate Invester</option>
                                    <option value="NewbieInvester">Newbie Invester</option>
                                </select>
                                <input type = "number" value = {noOfStartupsInvestedIn} onChange = {(e)=>setnoOfStartupsInvestedIn(e.target.value)} className='form-input' placeholder='Number of startups invested in' min = "0" id = "numberOfStartups" required />
                                <input type = "number" value = {yearsExp} onChange = {(e)=>setYearsExp(e.target.value)} className='form-input' placeholder='Years of Experience' min = "0" id = "yearsOfExperience" required />
                                <select name="interests" onChange={(e)=>addInterest(e.target.value)} required label = "Choose Your Interests" className='form-input' id="interests">
                                    <option value="">Choose your Interests</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Media">Media</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Fintech">Fintech</option>
                                    <option value="Energy">Energy</option>
                                </select>
                                <div className='flex my-2 flex-wrap gap-2'>
                                {interest.map((element)=>{
                                    return(<>
                                        <div key = {element} className='pl-2 gap-[5px] flex items-center bg-purple-300 rounded-xl'>{element}
                                        <div onClick={(element)=>removeInterest(element)} className='p-[.4rem] cursor-pointer ml-auto rounded-full bg-purple-200 '>
                                            <IoClose  className = "text-sm" />
                                        </div>
                                        </div>
                                    </>)
                                })}
                                </div>
                                
                                <button type='submit' className='form-btn'>Sign Up</button>
                            </form>
                        </>
                        :
                        <>
                     
                            <form id = "createForm" onSubmit={(e)=>handleSubmit(e)} className='flex flex-col max-w-[400px] flex-wrap gap-2' >
                                <div className='flex flex-wrap gap-2'>
                                <input type="text" value = {firstname} onChange = {(e)=>setfirstName(e.target.value)} className='form-input' required placeholder='First Name' />
                                    <input type="text" value = {lastname} onChange = {(e)=>setLastName(e.target.value)} className='form-input' required placeholder='Last Name' />
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    <input type="number" className='form-input' onChange={(e)=>setAge(e.target.value)} value = {age}  min = "18" required placeholder='Age' />
                                    <select onChange = {(e)=>setGender(e.target.value)} className='form-input' name="gender" id="gender">
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <input type="email" value = {email} onChange = {(e)=>setEmail(e.target.value)} className='form-input' required placeholder='Email Address' />
                                <input type="password" value = {password} onChange = {(e)=>setPassword(e.target.value)} className='form-input' required placeholder='Password' />
                                <button type='submit' className='form-btn'>Sign Up</button>
                            </form>
                        </>}
                </div>
            </div>
        </>
    )
}

export default createnew