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
    ]
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-800 to-black p-4">
      <ul className="flex justify-between w-npm star5t">

        {links.map(({id, child, href, style}) => (
        <li key={id} className={`flex justify-between items-center w-24 h-14`}>
          <a href={href} className="flex justify-between w-full text-white"
          rel="noreferrer"
          target="_blank">
            {child}
          </a>
        </li>
        ))}

      </ul>
      <div className="text-white pt-4">
        <p>Copy right reserved 2025</p>
      </div>
    </div>
  );
};

export default SocialLinks;
