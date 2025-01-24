import React from "react";

import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import sql from "../assets/sql.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import gitbash from "../assets/gitbash.png";
import CSharp from "../assets/CSharp.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      proficiencyLevel: "Advanced",
      proficiency: 100,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      proficiencyLevel: "Advanced",
      proficiency: 100,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      proficiencyLevel: "Advanced",
      proficiency: 100,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "ReactJS",
      proficiencyLevel: "Skilled",
      proficiency: 80,
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      proficiencyLevel: "Proficient",
      proficiency: 90,
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: gitbash,
      title: "GitBash",
      proficiencyLevel: "Intermediate",
      proficiency: 60,
      style: "shadow-yellow-300",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      proficiencyLevel: "Intermediate",
      proficiency: 70,
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      proficiencyLevel: "Intermediate",
      proficiency: 70,
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      proficiencyLevel: "Intermediate",
      proficiency: 70,
      style: "shadow-violet-500",
    },
    {
      id: 10,
      src: CSharp,
      title: "C#",
      proficiencyLevel: "Intermediate",
      proficiency: 49,
      style: "shadow-violet-500",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      proficiencyLevel: "Intermediate",
      proficiency: 45,
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: figma,
      title: "Figma",
      proficiencyLevel: "Intermediate",
      proficiency: 65,
      style: "shadow-green-300",
    },
  ];

  return (
    <div
      name="experience"
      className="dark:bg-gray-900 dark:text-white w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-4xl font-bold p-2 inline">Experience</h2>
          <p className="py-6">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-0 xs:px-8 sm:px-0">
          {techs.map(({ id, src, title, proficiency, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} dark:hover:bg-slate-900 flex flex-col justify-between h-44`}
            >
              {/* Image */}
              <img src={src} alt={title} className="w-20 h-20 mx-auto object-contain" />
              <div>
                <p className="mt-2">{title}</p>
                {/* <p className="mt-2">
                  Proficiency Level:{" "}
                  <span className="font-bold">{proficiencyLevel}</span>
                </p> */}
              </div>

              {/* Progress Bar - Positioned at the bottom */}
              <div className="w-3/4 mx-auto mt-2 bg-gray-300 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${style}`}
                  style={{
                    width: `${proficiency}%`,
                    backgroundColor:
                      proficiency === 100
                        ? "green"
                        : proficiency >= 75
                        ? "blue"
                        : proficiency >= 50
                        ? "orange"
                        : "red",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
