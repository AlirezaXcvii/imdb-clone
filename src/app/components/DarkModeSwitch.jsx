"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdLightMode} from 'react-icons/md'

export default function DarkModeSwitch() {

  const {theme, setTheme} = useTheme()
  const [mounted , setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true),[])

  let currentTheme = theme

  return (
    <>
    {mounted && (currentTheme === 'dark' ? 
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')}/>
    :
        <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')}/>)
    }
    </>
  )
}
