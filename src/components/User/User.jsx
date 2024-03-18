import React from 'react';
import { useParams } from 'react-router-dom';
export default function User() {
const {Userid} = useParams()
  return (

    <div className=' bg-gray-500 text-white text-3xl p-4'> User : {Userid} </div>

  );
}
