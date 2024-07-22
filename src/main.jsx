import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {
  Home,
  About,
  Contact,
  Layout,
  Github
} from './components/index.js'
import { apicall } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// const router = createBrowserRouter ([
//   {
//     path : '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },
//       {
//         path :'/github',
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userdata' element={<User />} />
      <Route 
      loader={apicall}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
