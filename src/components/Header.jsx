import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", text: "Home" },
    { id: 2, link: "/projects", text: "Projects" },
    { id: 3, link: "/experience", text: "Skills" },
    { id: 4, link: "/contact", text: "Contact" },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Logo */}
      <div>
        <h1 className="text-7xl font-signature ml-2 text-gray-800 dark:text-white cursor-pointer">wm</h1>
      </div>

      {/* Links and Theme Toggle */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Links */}
        <ul className="flex space-x-6">
          {links.map(({ id, link, text }) => (
            <li key={id} className="cursor-pointer capitalize font-medium hover:text-blue-500 hover:scale-105 duration-200">
              <Link to={link}>{text}</Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          {links.map(({ id, link, text }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link}>
                {text}
              </Link>
            </li>
          ))}
          {/* Add ThemeToggle to Mobile Menu */}
          <li className="mt-6">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
