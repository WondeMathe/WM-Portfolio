import React from 'react';
import HeroImage from '../assets/heroImage.jpeg';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>Hi, I'm Wondwosen Mathewos</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm a passionate Front-End Developer with a focus on creating seamless user experiences. I specialize in clean code, pixel-perfect designs, and engaging web animations.
                </p>
            
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home