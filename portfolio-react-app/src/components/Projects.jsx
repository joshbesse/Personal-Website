import React from 'react';
import Relig from '../assets/religrecid.jpeg'
import Netflix from '../assets/netflix.png'
import Fetal from '../assets/fetalhealth.png'
import Sentiment from '../assets/sentiment.jpg'
import Sleep from '../assets/sleepincome.webp'

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
            <div style={{backgroundImage: `url(${Relig})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white">
                        Religion and Recidivism
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Religion-and-Recidivism/blob/main/ReligionRecidivism.pdf'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Paper</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white">
                        Netflix Revenue<br></br> Forecasting 
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Netflix-Forecasting/blob/main/Netflix_R.pdf'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Paper</button>
                        </a>
                        <a href='https://github.com/joshbesse/Netflix-Forecasting/blob/main/Netflix_Revenue.R'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Fetal})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white">
                        Fetal Health Classification
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Fetal-Health-Classification/blob/main/Fetal_Health_Notebook.ipynb'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Notebook</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Sentiment})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white">
                        Sentiment Analysis<br></br> Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/joshbesse/Sentiment-Analysis-Application'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Sleep})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-xl font bold text-white">
                        Exploring the Links: Sleep,
                    </span>
                    <br></br>
                    <span className="text-xl font bold text-white">
                        Age, Gender, Education, and 
                    </span>
                    <br></br>
                    <span className="text-xl font bold text-white">
                        Their Influence on Income
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