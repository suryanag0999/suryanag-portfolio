import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>suryanag</h3>
            <h3 className='text-2xl text-gray-500 font-semibold'>suryanag9966@gmail.com</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/suryanag0999" target='_blank'rel="noopener noreferrer" ><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/suryanag9966/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                
            </div>

        </div>

        <p className='text-gray-400'>© 2025 Surya Nag. All rights reserved.
        </p>
        
    </div>
  )
}

export default Footer