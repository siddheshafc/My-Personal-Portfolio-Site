import React from 'react'

const ProjectItem = ({img ,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#079992]'> 
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block text-center absolute top-[20%] left-[20%] translate-x-[-20%] translate-y-[20%] '>
            <h3 className='text-2xl font-bold mb-10 text-[#222f3e] tracking-wider text-center'>
              {title}
            </h3>
            <div className='grid sm:grid-cols-2 gap-12'>
              <a href='/'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm'>Github Link</p>
              </a>
              <a href='/'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm'>Live Demo</p>
              </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem