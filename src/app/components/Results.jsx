import React from 'react'
import Card from './Card'

export default function Results(props) {
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto my-4'> 
        {
            props.results.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))
        }
    </div>
  )
}
