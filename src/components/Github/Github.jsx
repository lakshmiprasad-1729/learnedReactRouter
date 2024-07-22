import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <>
    <h1 className='w-[50dvw] ml-[25dvw] h-[3rem] bg-gray-600 text-white flex justify-center items-center'>Followes:{data.followers}</h1>
    <img className='w-[50dvw] ml-[25dvw]' src={data.avatar_url} alt="" />
    </>
  )
}

export default Github

export const apicall =async()=>{
    const api = await fetch('https://api.github.com/users/hiteshchoudhary');
    return api.json();
}