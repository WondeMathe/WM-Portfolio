import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 500) {
      setError('Message cannot exceed 500 words.');
      return;
    }

    e.target.submit();
  };

  return (
    <div name="contact" className='w-full dark:bg-gray-900 dark:text-white min-h-screen'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline'>Contact</h2>
          <p className="text-xl py-6">
            Whether you have a question, an opportunity, or just want to say hello, I'd love to hear from you! Submit the form below, 
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action="https://getform.io/f/anllzxja"
            method="POST"
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 border-gray-500 dark:border-gray-200 rounded-md text-gray-800 dark:text-white focus:outline-none'
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 border-gray-500 dark:border-gray-200 rounded-md text-gray-800 dark:text-white focus:outline-none'
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              placeholder='Type a message...'
              // maxLength={500}
              className='p-2 bg-transparent border-2 border-gray-500 dark:border-gray-200 rounded-md text-gray-800 dark:text-white focus:outline-none'
            ></textarea>
            
            {error && <p className="text-red-500 mt-2">{error}</p>}
            
            <button
              type="submit"
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
