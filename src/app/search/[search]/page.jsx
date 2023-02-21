import React from 'react'
import Results from '@/app/components/Results'

const API_KEY = process.env.API_KEY

export default async function page({params}) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.search}`)

  if(!res.ok){
    throw new Error('error fetching data')
  }

  const data = await res.json()
  const results = data.results
  console.log(results)

  return (

    <div>
      {results && results.length == 0 && <h2 className='text-center mt-4'>No results found 🖕</h2>}
      {results && <Results results={results}/>}
      
    </div>
  )
}
