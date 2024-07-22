import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userdata} = useParams();
  return (
    <div className='w-[50dvw] ml-[25dvw] h-[3rem] bg-gray-600 text-white flex justify-center items-center'>User:{userdata}</div>
  )
}

export default User