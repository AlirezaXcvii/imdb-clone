'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'


export default function Provider({children}) {
  return (
    <ThemeProvider enableSystem='true' attribute='class'>
        <div className='transition-colors duration-300 dark:bg-[#1f1f1f] min-h-screen select-none'>
            {children}
        </div>
    </ThemeProvider>
  )
}
