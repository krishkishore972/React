import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
export default function GitHub() {
//     const [data , setData] = useState([])
//     useEffect(() =>{
// fetch('https://github.com/krishkishore972')
// .then(res=>res.json())
// .then(data => {
//     console.log(data);
//     setData(data)
// })

//     } , [] )
const data = useLoaderData()
console.log(data);

  return (
    <>
    <div className=' text-center m-4  bg-gray-500  text-white p-4 text-3xl'>
        GitHub follwers : { data.followers }
        <img src={ data.avatar_url } alt=" Git picture" width={300} />
    </div>
    </>
  );
}

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/hiteshchoudharyy')
    return response.json()
}
