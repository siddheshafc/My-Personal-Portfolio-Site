import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#000000]'>Contact</h1>
        <p className='text-lg font-semibold text-[#7c7c7c] text-center mt-6'> Please use the below form to contact me, or you can message me at my LinkedIn handle.</p>
        <form action='{your form endpoint}' method='POST'>
            <div className='w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name: </label>
                    <input type="text" name='name' placeholder="Enter your full name" className='border-2 rounded-lg p-3 flex border-gray-300' />
                </div>
                <div>
                    <label className='uppercase text-sm py-2'>Email: </label>
                    <input type="email" name='email' placeholder="Enter your email" className='w-full border-2 rounded-lg p-3 flex border-gray-300' />
                </div>
            </div>
            <div>
                <label className='uppercase text-sm py-2'>Subject: </label>
                <input type="text" name='subject' placeholder="Enter subject" className=' w-full border-2 rounded-lg p-3 flex border-gray-300' />
            </div>
            <div>
                <label className='uppercase text-sm py-2'>Message: </label>
                <textarea rows="4" cols="50" name='message' placeholder="Type your message here..." className='w-full border-2 rounded-lg p-3 flex border-gray-300'></textarea>
            </div>
            <button type="submit" className='bg-[#079992] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
        <p className='text-lg font-semibold text-[#079992] text-center mt-6'> &copy; Siddhesh Dhuri</p>
    </div>
  )
}

export default Contact