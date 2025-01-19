import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div
      onClick={() => setDarkMode(!darkMode)} // Toggling the theme
      className="cursor-pointer text-xl"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-blue-500" />
      )}
    </div>
  );
};

export default ThemeToggle;
