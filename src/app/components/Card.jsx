import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card(props) {
  return (
    <div className='sm:shadow-sm sm:hover:shadow-slate-200 transition-shadow p-4 my-4 rounded-md group '>
        <Link href={''}>
            <Image width={200} height={300} placeholder='blur' blurDataURL='/spinner.svg' className='w-[80%] mx-auto group-hover:opacity-90 transition-opacity duration-200' src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}></Image>
            <div className='w-full text-center mt-2'>{props.movie.title || props.movie.name}</div>
        </Link>
    </div>
  )
}
