import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#000000] mb-10'>Technical Skills</h1>
        <div className='grid grid-cols-2'>
            <h2 className='text-3xl font-bold'>Languages: </h2>
            <ul className='p-4 text-xl font-semibold leading-none text-[#5a5a5a]'>
                <li>Javascript</li>
                <li>Python</li>
            </ul>
            <h2 className='text-3xl font-bold'>Frontend: </h2>
            <ul className='p-4 text-xl font-semibold leading-none text-[#5a5a5a]'>
                <li>HTML/CSS</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
            </ul>
            <h2 className='text-3xl font-bold'>Backend: </h2>
            <ul className='p-4 text-xl font-semibold leading-none text-[#5a5a5a]'>
                <li>Node.js/Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills