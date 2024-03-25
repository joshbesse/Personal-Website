import React from 'react'
import Python from '../assets/Python.jpeg'
import R from '../assets/R.png'
import Java from '../assets/java.png'
import Stata from '../assets/stata.png'
import SQL from '../assets/SQL.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#ABD6F3] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#03548A] '>Skills</p>
              <p className='py-4'>Technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-30 h-40 mx-auto' src={Python} alt="Python icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-30 h-40 mx-auto' src={R} alt="R icon" />
                  <p className='my-4'>R</p>   
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-30 h-40 mx-auto' src={Java} alt="Java icon" />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-30 h-40 mx-auto' src={Stata} alt="Stata icon" />
                  <p className='my-4'>Stata</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-30 h-40 mx-auto' src={SQL} alt="SQL icon" />
                  <p className='my-4'>SQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;