import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Result from './result.jsx'
import Layout from './Layout.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<App/>}/>
        <Route path='/result' element={<Result/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)
