import React from "react";
import { motion } from "framer-motion";

import HeroImage from "../assets/pictures/heroImage.jpeg";
import TestimonialCard from "./TestimonialCard";
import ImageYoni from "../assets/pictures/profile_Yoni.jpg";
import ImageNaomi from "../assets/pictures/profile_Naomi.jpg";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Motion framer variables
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// const gridCardVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

const AboutSection = () => {
  const testimonials = [
    {
      name: "Joseph Jacob",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1mPXRwKTVbpWNFgzG1Fk53SHaKNggkPMlA&s",
      quote:
        "I highly recommend Wondwosen for any web development project. His creativity and professionalism are unmatched.",
    },
    {
      name: "Yonathan Dawit",
      photo: ImageYoni,
      quote:
        "Wondwosen is an amazing developer! His attention to detail and dedication to his work are outstanding.",
    },
    {
      name: "Naomi Zerfu",
      photo: ImageNaomi,
      quote:
        "I highly recommend Wondwosen for any web development project. His creativity and professionalism are unmatched.",
    },
    {
      name: "Fikrachen Sissay",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1mPXRwKTVbpWNFgzG1Fk53SHaKNggkPMlA&s",
      quote:
        "Working with Wondwosen has been an absolute pleasure. He brings both skill and passion to his projects.",
    },
  ];

  return (
    <div
      name="home"
      className="min-h-screen w-full dark:bg-gray-900 dark:text-white"
    >
      {/* Hero Section */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="lg:h-screen max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I'm Wondwosen Mathewos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-gray-700 dark:text-gray-300 py-4 max-w-md"
          >
            I'm a passionate Front-End Developer with a focus on creating
            seamless user experiences. I specialize in clean code, pixel-perfect
            designs, and engaging web animations.
          </motion.p>
        </div>
        <div className="max-w-96 max-h-96">
          <motion.img
            animate={{ 
              scale: [1, 1.1, 1.1, 1],
              // rotate: [0, 45, -15, 0],
              borderRadius: ['5% 5%', '30% 30%', '50% 50%', '5% 5%'] 
            }}
            transition={{duration: 5, ease: 'easeInOut', repeat: 0, repeatDelay: 1}}
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </motion.div>

      {/* About Me Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline">
            About Me
          </h2>
        </div>

        <p className="text-xl text-gray-800 dark:text-gray-300 mt-10">
          I am a dedicated Front-End Developer with a passion for creating
          seamless user experiences. I specialize in delivering clean, efficient
          code and pixel-perfect designs that bring your vision to life. My
          expertise extends to enhancing websites with engaging web animations,
          making them more interactive and user-friendly.
        </p>

        <br />

        <p className="text-xl text-gray-800 dark:text-gray-300">
          With a solid foundation in modern web development, I focus on building
          responsive, dynamic websites that adapt beautifully across all
          devices. I take pride in delivering high-quality, user-centric digital
          solutions that are both functional and visually appealing.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 py-6">
            Here's what people are saying about my work
          </p>
        </div>

        {/* Swiper Slider for Testimonials */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full sm:w-3/4"
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
        <div className="custom-pagination mt-6 flex justify-center items-center mx-auto space-x-2"></div>
      </div>
    </div>
  );
};

export default AboutSection;
