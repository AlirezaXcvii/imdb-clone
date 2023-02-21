import Image from 'next/image'
import React from 'react'
const API_KEY = process.env.API_KEY

async function fetchMovie(movieId){
  const res = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}`)
  return await res.json()
}

export default async function page({params}) {
  let movie = await fetchMovie(params.id)
  console.log(movie)
  return (
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row p-4 gap-4'>
       <Image width={300} height={200} placeholder='blur' blurDataURL='/spinner.svg' className='w-full md:w-[50%]' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}></Image>
       <div>
        <h2 className='font-bold text-2xl'>{movie.title || movie.name}</h2>
        <p>{movie.overview}</p>
        <p className='mt-2 text-gray-500'><span className='font-bold'>Released date: </span>{movie.release_date}</p>
        <p><span>Rating: </span>{movie.vote_average}</p>
       </div>
    </div>
  )
}
