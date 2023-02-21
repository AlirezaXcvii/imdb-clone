'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Searchbar() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleSubmit(e){
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-6xl mx-auto flex'>
        <input type='text' placeholder='Search' className='w-full bg-transparent outline-none p-4 h-10' onChange={(e) => setSearch(e.target.value)} />
        <button disabled={!search} type='submit' className={`text-amber-500 disabled:text-gray-500`}>Search</button>
    </form>
  )
}
