import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements,BrowserRouter, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import SignUp from './SignUp.jsx'
import Result from './Result.jsx'

// const router=createBrowserRouter(
//   createRoutesFromElements(
  
//     <Route path='/' element={<Layout/>}>
//         <Route path='' element={<App/>}/>
//         <Route path='/result' element={<Result/>}/>
//     </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <RouterProvider router={router}/>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/question' element={<App/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
  </BrowserRouter>

)
