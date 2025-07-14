import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen 
            flex flex-col items-center justify-center gap-4'>
            <div>
                {/* <img src="" alt="" className=""/> */}
            </div>

                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm<span className=''>Eduardo</span></h3>

                <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Backend Developer</h1>

                <p className='max-w-2xl mx-auto'>
                    I'm a backend developer from Brasil with 2 years of experience in multiple technoligies.
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href="/contact" className='px-10 py-3 border border-white rounded-full
                     bg-black text-white flex items-center gap-2'>contact me <img src='/white-arrow-right.png' className='w-4' /></a>
                </div>
        </div>

    )
}

export default Header;