import Head from 'next/head'
import Image from 'next/image'
import Router from "next/router";
import { useEffect } from 'react';
// import Login from './Login/Login'

export default function Home(){

  useEffect(()=>{
    const {pathname} = Router;
    if(pathname==="/"){
      Router.push("/login/login")
    }
  },[])

  return(
    <div>Hello</div>
  )
} 
  
        