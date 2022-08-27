import Head from 'next/head'
import Image from 'next/image'
import Router from "next/router";
import { useEffect } from 'react';
// import Login from './Login/Login'
// import reload from '';

export default function Home() {

  useEffect(() => {
    const { pathname } = Router;
    const token = localStorage.getItem("authToken")
    if (token) {
      Router.push("/main/profile")
    }
    else {
      Router.push('/main/profile')
    }

  }, [])

  return (
    <div className='grid h-[100vh] place-items-center'>
      <span className="flex h-10 w-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-sky-500"></span>
      </span>
    </div>
  )
}

