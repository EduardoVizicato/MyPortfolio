import React, { useRef } from 'react';

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = () => {
    
      sideMenuRef.current.style.transform = '';
      
  }

  return (
    <div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 text-sm`}>
        <a className="text-xl" aria-label="Home" href="/">Eduardo</a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li><a className="" href="/">Home</a></li>
          <li><a className="" href="#about">About</a></li>
          <li><a className="" href="#projects">Projects</a></li>
          <li><a className="" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items center space-x-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-10 h-10 rounded-full">
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

          <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0
          bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

            <div className='absolute right-6 top-6'>
              <img src="/cross.png" alt="" className='w-5 cursor-pointer '/>
            </div>

            <li><a className="" href="/">Home</a></li>
            <li><a className="" href="#about">About</a></li>
            <li><a className="" href="#projects">Projects</a></li>
            <li><a className="" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;