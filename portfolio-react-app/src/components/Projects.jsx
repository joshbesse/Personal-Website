import React from 'react';
import WorkImg from '../assets/Python.jpeg'

const Work = () => {        
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-[#ABD6F3]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-white border-[#03548A]'>Projects</p>
          <p className='py-6'>Check out some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid Item */}
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider">
                        Religion and Recidivism
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Religion-and-Recidivism/blob/main/ReligionRecidivism.pdf'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Paper</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Netflix Revenue Forecasting 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Fetal Health Classification
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Fetal-Health-Classification/blob/main/Fetal_Health_Notebook.ipynb'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Notebook</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Sentiment Analysis Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/joshbesse/Sentiment-Analysis-Application'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-xl font bold text-white tracking-wider ">
                        Exploring the Links: Sleep, Age, Gender, Education, and Their Influence on Income 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Exploring-the-Links-Sleep-Age-Gender-Education-and-Their-Influence-on-Income/blob/main/Stats_Sleep_Income.pdf'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Paper</button>
                        </a>    
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Work;