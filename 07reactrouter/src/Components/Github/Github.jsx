import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>res.json()).then(data=>setData(data))
    // },[])

    const data=useLoaderData()

  return (
    <div className='text-center text-white bg-gray-500 m-4 text-3xl'>
        GitHub Followers {data.followers}
        <img src={data.avatar_url} width='300' alt="" />
    </div>
  )
}

export default Github

export const GithubInfo =async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}