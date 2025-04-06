import React, { JSX } from 'react'
import { Link } from "react-router-dom";
export const NoPage = (): JSX.Element => {
  return (
    <div className='my-52 text-center text-3xl font-extrabold text-pink-500 '>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/"><p className='font-bold pt-2 text-2xl text-pink-300'>Back..</p></Link>
    </div>
  )
}

export default NoPage;
