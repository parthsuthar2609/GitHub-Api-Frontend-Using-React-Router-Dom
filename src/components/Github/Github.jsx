
import React, { useState } from 'react'
// import { useEffect } from 'react';

import { useLoaderData} from "react-router-dom";

const Github = () => {
    const data = useLoaderData();

// const [data , setData] = useState({});
//         useEffect(()=>{
//             fetch("https://api.github.com/users/parthsuthar2609")
//             .then((response) => response.json())
//             .then(data =>{
//                 console.log(data);
//                 setData(data);
//             })
//         },[]);
     
  return (
   <>
      <div className='bg-orange-700 text-white text-3xl py-10'>
      GitHub UserName : {data.login} <br></br>
      GitHub Bio : {data.bio}<br></br>
      <img src= {data.avatar_url} className='h'></img>
      GitHub Url : {data.url}<br></br>
      GitHub Name : {data.name}<br></br>
      GitHub Public_repos : {data.public_repos}</div>
   </>
  )
}

export default Github;

export const githubInfo = async() =>{
    const response = await fetch("https://api.github.com/users/parthsuthar2609")
    return response.json();
}