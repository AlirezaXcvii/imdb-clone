import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card(props) {
  console.log(props)
  return (
    <div className={`sm:shadow-sm sm:hover:shadow-slate-400 transition-shadow p-4 my-4 rounded-md group relative`}>
        <Link href={props.movie.media_type == 'movie' ? `/movie/${props.movie.id}` : `/tv/${props.movie.id}`}>
            <Image width={200} height={300} placeholder='blur' blurDataURL='/spinner.svg' className={`w-[80%] mx-auto group-hover:opacity-80 transition-opacity duration-200`} src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt={props.movie.title || props.movie.name}></Image>
            {props.movie.media_type == 'tv' && <span className='absolute px-4 bg-amber-600 top-0 left-0'>TV Show</span>}
            <div className='font-bold line-clamp-1 w-full text-center mt-2'>{props.movie.title || props.movie.name}</div>
            <p className='line-clamp-2 text-gray-500'>{props.movie.overview}</p>
        </Link>
    </div>
  )
}
