import Link from 'next/link'
import React from 'react'

export default function MenuItem(props) {
  return (
    <div>
        <Link href={props.address} className='hover:text-amber-500 text-[24px]'>
            <props.Icon className='sm:hidden mx-4' />
            <p className='hidden sm:inline mx-6'>{props.title}</p>
        </Link>
    </div>
  )
}
