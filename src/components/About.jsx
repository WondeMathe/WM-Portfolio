import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
            <div className='pb-8'>
                <h2 className='text-4xl font-bold inline '>About</h2>
            </div>

            <p className='text-xl mt-10'>
                I am a dedicated Front-End Developer with a passion for creating seamless user experiences. I specialize in delivering clean, efficient 
                code and pixel-perfect designs that bring your vision to life. My expertise extends to enhancing websites with engaging web animations, 
                making them more interactive and user-friendly.
            </p>

            <br />

            <p className='text-xl'>
                With a solid foundation in modern web development, I focus on building responsive, dynamic websites that adapt beautifully across all 
                devices. I take pride in delivering high-quality, user-centric digital solutions that are both functional and visually appealing.
            </p>
        </div>
    </div>
  )
}

export default About