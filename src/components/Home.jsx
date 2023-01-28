import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import bgimg from '../assets/bgimg.jpg'

const Home = () => {
  return (
    <div id='home'>
        <img src={bgimg} className="w-full h-screen object-cover object-left scale-x-[-1]" />
        
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 backdrop-blur-lg'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center '>
                <h1 className='sm:text-5xl text-3xl font-bold text-gray-800]'>Hello I'm Siddhesh Dhuri. </h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I'm 
                    <TypeAnimation
                        sequence={[
                            2000,
                            'Software Developer', 
                            2000, 
                            'Web Developer', 
                            2000,
                            'Tech Enthusiast'

                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                </h2>
                <div className='flex justify-evenly ml-40 pl-11 pt-10 max-w-[200px] w-full'>
                    <a href='https://www.linkedin.com/in/'> <FaLinkedinIn className='cursor-pointer' size={30}/> </a>
                    <a href='https://github.com/'> <FaGithub className='cursor-pointer' size={30} /> </a>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Home