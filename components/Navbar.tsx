import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Link href="/">
    <div className='h-[15dvh] flex justify-center items-center'>
        <h1 className="text-3xl"> 
            React Cheatsheet
        </h1>
    </div>
    </Link>
  )
}
