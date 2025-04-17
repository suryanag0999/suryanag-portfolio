import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'webstackacademy',
        period: '6- Months',
        description:"Hands-on experience as a MERN Stack Developer, building dynamic web apps with React, Node.js, Express, and MongoDB. Worked on both frontend and backend tasks.",
      },
      
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      
      <div className='space-y-8'>
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className='border border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-blue-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience