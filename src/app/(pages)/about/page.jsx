import Navbar from '@/app/components/navbar'
import React from 'react'

const About = () => {
  return (
    <>
      <Navbar />
      <div id='about' className='w-full px[12%] py-10'>
        <h2 className='py-10 text-center mb-2 text-3xl'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row text-center'>
          <div className='flex-1'>
            <p className='mb-10'>
              I am a backend developer with over 2 year of expertise in the field. Throughout my studies,
              I had the privilege of collaborating with prestigious people, contributing and learning new technologies.
            </p>
          </div>
        </div>

        <ul>
          
        </ul>

      </div>
    </>
  )
}

export default About