'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/how-we-teach', label: 'How We Teach' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'Faq' },
]

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className='fixed w-full md:px-20 px-6 top-0 left-0 bg-white z-50'>
      <div className='h-[80px] flex justify-between items-center'>
        <img src="/logo.svg" alt="" />

        <div className='hidden lg:flex gap-6 items-center text-[#000000]'>
          {links.map(({ href, label }) => {
            const active = isActive(pathname, href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'text-[#5F8A48] font-semibold'
                    : 'hover:text-[#5F8A48]'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        <a
          href='https://wa.me/message/25PXCVIEB53CA1'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden lg:inline-block bg-[#5F8A48] text-white px-3 py-2.5 rounded-[8px]'
        >
          Book Consultation
        </a>

        <button
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='lg:hidden text-[#000000] text-2xl p-1'
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className='lg:hidden border-t border-gray-100 pb-4'>
          <div className='flex flex-col gap-4 pt-4 text-[#000000]'>
            {links.map(({ href, label }) => {
              const active = isActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'py-1 text-[#5F8A48] font-semibold'
                      : 'py-1 hover:text-[#5F8A48]'
                  }
                >
                  {label}
                </Link>
              )
            })}
            <a
              href='https://wa.me/message/25PXCVIEB53CA1'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setOpen(false)}
              className='bg-[#5F8A48] text-white px-3 py-2.5 rounded-[8px] mt-2 self-start'
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
