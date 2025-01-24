import React from 'react';
import HeroImage from '../assets/pictures/heroImage.jpeg';
import TestimonialCard from './TestimonialCard';
import ImageYoni from '../assets/pictures/profile_Yoni.jpg';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const AboutSection = () => {
  const testimonials = [
    {
      name: "Joseph Jacob",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1mPXRwKTVbpWNFgzG1Fk53SHaKNggkPMlA&s",
      quote: "I highly recommend Wondwosen for any web development project. His creativity and professionalism are unmatched.",
    },
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
    {
      name: "Abebe Kebede",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1mPXRwKTVbpWNFgzG1Fk53SHaKNggkPMlA&s",
      quote: "Working with Wondwosen has been an absolute pleasure. He brings both skill and passion to his projects.",
    },
    {
      name: "Fikrachen Sisay",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1mPXRwKTVbpWNFgzG1Fk53SHaKNggkPMlA&s",
      quote: "I highly recommend Wondwosen for any web development project. His creativity and professionalism are unmatched.",
    },
  ];

  return (
    <div name="home" className="min-h-screen w-full dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="lg:h-screen max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm Wondwosen Mathewos
          </h2>
          <p className="text-gray-700 dark:text-gray-300 py-4 max-w-md">
            I'm a passionate Front-End Developer with a focus on creating seamless user experiences. I specialize in clean code, pixel-perfect designs, and engaging web animations.
          </p>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>

      {/* About Me Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline">About Me</h2>
        </div>

        <p className="text-xl text-gray-800 dark:text-gray-300 mt-10">
          I am a dedicated Front-End Developer with a passion for creating seamless user experiences. I specialize in delivering clean, efficient code and pixel-perfect designs that bring your vision to life. My expertise extends to enhancing websites with engaging web animations, making them more interactive and user-friendly.
        </p>

        <br />

        <p className="text-xl text-gray-800 dark:text-gray-300">
          With a solid foundation in modern web development, I focus on building responsive, dynamic websites that adapt beautifully across all devices. I take pride in delivering high-quality, user-centric digital solutions that are both functional and visually appealing.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 py-6">Here's what people are saying about my work:</p>
        </div>

        {/* Swiper Slider for Testimonials */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop={true} // Makes the Swiper infinite
          spaceBetween={15}
          slidesPerView={1.2}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 30 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                photo={testimonial.photo}
                quote={testimonial.quote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination Dots */}
        <div className="custom-pagination mt-6 flex justify-center space-x-2"></div>
      </div>
    </div>
  );
};

export default AboutSection;
