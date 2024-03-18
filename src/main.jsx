import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home,About,Contact , User} from './components/index.js'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import GitHub , {githubInfoLoader} from './components/GitHub/GitHub.jsx'

// const router  = createBrowserRouter([
//   {
//     path :"/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       } ,
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element = { <Layout/>}>
    <Route path='' element = {<Home/>} />
    <Route path='about' element = {<About/>} />
    <Route path='contact' element = {<Contact/>} />
    <Route path='user/:id' element = {<User/>} />
    <Route
     path='github'
     element = {<GitHub/>}
     loader={ githubInfoLoader }
      />
   </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
