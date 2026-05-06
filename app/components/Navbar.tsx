import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full md:px-20 px-6 top-0 left-0 h-[80px] bg-white flex justify-between items-center'>
      <img src="/logo.svg" alt="" />
      <div className='flex gap-6 items-center text-[#000000]'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/how-we-teach">How We Teach</Link>
        <Link href="/admissions">Admissions</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/faq">Faq</Link>
      </div>
      <button className='bg-[#5F8A48] text-white px-3 py-2.5 rounded-[8px]'>Book Consultation</button>
    </div>
  )
}

export default Navbar
