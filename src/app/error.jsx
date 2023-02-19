'use client'
import React, { useEffect } from 'react'

export default function Error({error , reset}) {
    useEffect(()=> {
        console.log(error);
    },[error])
  return (
    <div className='text-center mt-8'>
        <h1>some thing went wrong</h1>
        <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}
