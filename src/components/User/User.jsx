import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-orange-600 py-3 text-center font-semibold text-3xl text-white'>User: {userid}</div>
  )
}

export default User;