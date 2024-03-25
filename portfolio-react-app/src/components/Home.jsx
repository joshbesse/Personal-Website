import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#ABD6F3]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-gray-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Josh Besse</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#7D86A1]'>I'm a Data Scientist.</h2>
                <p className='text-[#7D86A1] py-4 max-w-[700px]'>I'm a data scientist dedicated to analyzing and interpreting complex datasets to drive strategic 
                decision-making. Currently, I'm focused on applying machine learning algorithms and statistical models to glean insights 
                from big data, and assisting organizations in making data-driven decisions.</p>
                <div>
                    <Link to='projects' smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#03548A] hover:border-[#03548A]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home