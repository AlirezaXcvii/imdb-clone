import React from 'react'

export default function Results(props) {
  return (
    <div className='flex flex-wrap'> 
        {
            props.results.map(movie => (
                <div className=''>
                    <img className='max-w-[200px]' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <div>{movie.title}</div>
                </div>
            ))
        }
    </div>
  )
}
