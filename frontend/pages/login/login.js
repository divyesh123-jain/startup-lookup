import React from 'react'
import {RiLoginBoxFill} from 'react-icons/ri'
import Link from 'next/link'

const Login = () => {
    const loginFields=[
        {
            labelText:"Email address",
            labelFor:"email-address",
            id:"email-address",
            name:"email",
            type:"email",
            autoComplete:"email",
            isRequired:true,
            placeholder:"Email address"   
        },
        {
            labelText:"Password",
            labelFor:"password",
            id:"password",
            name:"password",
            type:"password",
            autoComplete:"current-password",
            isRequired:true,
            placeholder:"Password"   
        }
    ]
  return (
    <div className='h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'>
      <div className='md:w-[500px] p-5 py-20 h-[100vh] md:h-auto w-full bg-white drop-shadow-lg flex justify-center items-center gap-4 flex-col'>
        <RiLoginBoxFill className='text-purple-700 text-2xl' />
        <h2 className='font-bold text-2xl'>Login to your account</h2>
        <p className='text-sm'>Don't have a account yet? <span className='text-purple-700'><Link href = '/login/createnew'>Sign up!</Link></span></p>
      
        <form className='flex my-4 flex-col gap-4 w-[300px]' action="">
          {loginFields.map((element)=>{
            return(
              <>
                <input type={element.type} placeholder = {element.labelText} className = "w-full text-gray-500 rounded-[5px] font-[500] text-sm p-1 outline-none border-[1px] border-gray-400" />
              </>
            )
          })}
          <button type='submit' className='flex justify-center items-center bg-purple-700 p-1 rounded-[5px] hover:bg-purple-400 border-none outline-none text-white'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login