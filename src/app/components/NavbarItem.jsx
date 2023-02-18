"use client"

import React from 'react'
import Link from 'next/link'

import {useSearchParams} from 'next/navigation'

export default function NavbarItem(props) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div className={`mx-4 p-4 hover:text-amber-500 font-semibold ${
        genre && genre === props.param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
    }`}>
        <Link href={`/?genre=${props.param}`}>
            {props.title}
        </Link>
    </div>
  )
}
