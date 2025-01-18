import React from 'react';

const TestimonialCard = ({ name, photo, quote }) => {
  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white shadow-md rounded-lg p-6">
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
      <p className="text-sm text-gray-400 text-center mt-2">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
