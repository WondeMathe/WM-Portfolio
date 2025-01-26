import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>LinkedIn <FaLinkedin size={30}/></>
      ),
      href: 'https://www.linkedin.com/in/wondwosen-mathewos/',
    },
    {
      id: 2,
      child: (
        <>GitHub <FaGithub size={30}/></>
      ),
      href: 'https://github.com/WondeMathe',
    },
    {
      id: 3,
      child: (
        <>Mail <HiOutlineMail size={30}/></>
      ),
      href: 'mailto:wondwosenmathewos@gmail.com',
    },
  ];

  return (
    <div className="flex flex-col dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 p-8">
      <div className="flex justify-center space-x-6 mb-8">
        {links.map(({ id, child, href }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-all duration-300 ease-in-out">
            {child}
          </a>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600 dark:text-gray-300">
        <p>© 2025 Wondwosen Mathewos. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default SocialLinks;
