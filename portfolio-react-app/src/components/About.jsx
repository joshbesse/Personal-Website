import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#ABD6F3] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#03548A]'>About</p>
                    </div>
                    <div>
                    </div>
                    </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Josh. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am deeply committed to leveraging data to make a meaningful impact on the world. My expertise lies in extracting insights 
                            and patterns from complex datasets to solve real-world problems.</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default About 