import React from 'react'
import expenseui from '../assets/expenseui.png'
import chatappui from  '../assets/chatappui.png'
import portfoliosite from  '../assets/portfoliosite.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-10 text-[#000000]'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={expenseui} title="Expense Tracker Web App" />
        <ProjectItem img={chatappui} title="Real-Time Chatapp" />
        <ProjectItem img={portfoliosite} title="My Portfolio Site" />
      </div>
    </div>
  )
}

export default Projects