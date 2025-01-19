import React from 'react';

const TestimonialCard = ({ name, photo, quote }) => {
  return (
    <div className="max-w-sm mx-auto bg-gray-800 dark:bg-gray-800 text-white dark:text-white shadow-md rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto border-solid border-gray-300 border-2"
      />
      <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
      <p className="text-sm text-gray-200 dark:text-gray-300 text-center mt-2">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
