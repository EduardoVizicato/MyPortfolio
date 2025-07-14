"use client"

import React, { useRef } from 'react';
import Link from 'next/link'

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  return (
    <div className="">
      <nav className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-around">

          <a className="text-xl font-bold" aria-label="Home" href="/">Eduardo</a>
            <div className="hidden md:flex items-center space-x-8 gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
              <Link className="" onClick={closeMenu} href="/">Home</Link>
              <Link className="" onClick={closeMenu} href="/about">About</Link>
              <Link className="" onClick={closeMenu} href="/projects">Projects</Link>
              <Link className="" onClick={closeMenu} href="/contact">Contact</Link>
            </div>

            <div className="flex items-center space-x-2">

              <div className="hidden md:flex items-center space-x-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                  disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-10 h-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 transition-all">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                  <span className="sr-only">
                    Toggle theme
                  </span>
                </button>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-10 h-10 rounded-full" type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-5 w-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <span className="sr-only">
                    Select language
                  </span>
                </button>
              </div>

              <button className ='block md:hidden ml-3' onClick={openMenu}>
                <img src="/menu.png" alt="" className='w-6 cursor-pointer '/>
              </button>

            </div>

          </div>

          <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0
          bottom-0 w-64 z-50 h-screen bg-white transition duration-500">

            <div className='absolute right-6 top-6' onClick={closeMenu}>
              <img src="/cross.png" alt="" className='w-5 cursor-pointer '/>
            </div>

            <li><Link className="" onClick={closeMenu} href="/">Home</Link></li>
            <li><Link className="" onClick={closeMenu} href="/about">About</Link></li>
            <li><Link className="" onClick={closeMenu} href="/projects">Projects</Link></li>
            <li><Link className="" onClick={closeMenu} href="/contact">Contact</Link></li>
          </ul>

        </nav>
    </div>
  );
};

export default Navbar;