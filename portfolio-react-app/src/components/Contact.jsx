import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ABD6F3] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/8f771eb1-585e-433f-b39b-46dc55f42ce7" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#03548A] text-white'>Contact</p>
                <p className='text-white py-4'>Submit the form below or send me an email - joshua.besse3@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#03548A] hover:border-[#03548A] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact