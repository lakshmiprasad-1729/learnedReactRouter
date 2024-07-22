import React from 'react'
import {Footer,Header} from './index'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}
