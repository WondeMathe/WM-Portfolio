import React from 'react';
import HeroImage from '../assets/pictures/heroImage.jpeg';
import TestimonialCard from './TestimonialCard';
import ImageYoni from '../assets/pictures/profile_Yoni.jpg'

const AboutSection = () => {
  const testimonials = [
    {
      name: "Yonathan Dawit",
      photo: ImageYoni,
      quote: "Wondwosen is an amazing developer! His attention to detail and dedication to his work are outstanding.",
    },
    {
      name: "Naomi Zerfu",
      photo: "https://media.licdn.com/dms/image/v2/D4D03AQEtnLpJ3hu6Uw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728896438386?e=1742428800&v=beta&t=AqCTCN-4h5xa5-_63qz9eaCrTOQwnGivA2UbzCQzHMI",
      quote: "I highly recommend Wondwosen for any web development project. His creativity and professionalism are unmatched.",
    },
  ];

  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      {/* Hero Section */}
      <div className="h-screen max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">Hi, I'm Wondwosen Mathewos</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate Front-End Developer with a focus on creating seamless user experiences. I specialize in clean code, pixel-perfect designs, and engaging web animations.
          </p>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>

      {/* About Me Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline">About Me</h2>
        </div>

        <p className="text-xl mt-10">
          I am a dedicated Front-End Developer with a passion for creating seamless user experiences. I specialize in delivering clean, efficient code and pixel-perfect designs that bring your vision to life. My expertise extends to enhancing websites with engaging web animations, making them more interactive and user-friendly.
        </p>

        <br />

        <p className="text-xl">
          With a solid foundation in modern web development, I focus on building responsive, dynamic websites that adapt beautifully across all devices. I take pride in delivering high-quality, user-centric digital solutions that are both functional and visually appealing.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full text-white">
        <div className="mt-16">
          <h2 className="text-4xl font-bold inline">Testimonials</h2>
          <p className="text-gray-500 py-6">Here's what people are saying about my work:</p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              photo={testimonial.photo}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
