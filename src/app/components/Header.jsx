import React from 'react'
import MenuItem from './MenuItem'
import {HiHome} from 'react-icons/hi'
import {FaInfoCircle} from 'react-icons/fa'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between sm:py-6 py-4 mx-auto max-w-6xl items-center'>
        <div className='flex'>
            <MenuItem title='Home' address='/' Icon={HiHome} />
            <MenuItem title='About' address='/about' Icon={FaInfoCircle} />
        </div>
        <div className='flex items-center space-x-5'>
            <DarkModeSwitch />
            <Link href='/'>
                <h2><span className='text-2xl bg-amber-500 px-4 py-2 rounded-xl font-bold mr-2'>IMDB</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>
    </div>
  )
}
