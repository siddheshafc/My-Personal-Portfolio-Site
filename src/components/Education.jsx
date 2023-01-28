import React from 'react'
import EducationItem from './EducationItem'

const educationData = [
    {
        year: "2020-2022",
        degree: 'Master of Science in Information Technology (MSc IT)',
        university: 'University of Mumbai',
        details: 'Grade: 9.40 CGPA'
    },
    {
        year: "2017-2020",
        degree: 'Bachelor of Science in Information Technology (BSc IT)',
        university: 'University of Mumbai',
        details: 'Grade: 8.72 CGPA'
    },
]

const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold mb-20 text-center text-[#282829]'>Education</h1>
       
        {educationData.map((item, idx) => (
            <EducationItem 
                key={idx}
                year={item.year}
                degree={item.degree}
                university={item.university}
                details={item.details}
            />
        ))
        }
    </div>
  )
}

export default Education