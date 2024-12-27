import React from 'react';
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.jpg';
import project3 from '../assets/portfolio/project3.jpg';
import project4 from '../assets/portfolio/project4.jpg';
import project5 from '../assets/portfolio/project5.png';


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: project1,
            alt: "Guess number game",
            demo: "https://guessing-game-wm.netlify.app/",
            codeLink: "https://github.com/WondeMathe/HTML-CSS-JS/tree/master/Simple%20game%20in%20HTML%20CSS%2C%20JavaScript",
        },
        {
            id: 2,
            src: project2,
            alt: "Bakery project",
            demo: "",
            codeLink: "",
        },
        {
            id: 3,
            src: project3,
            alt: "Responsive web",
            demo: "",
            codeLink: "",
        },
        {
            id: 4,
            src: project4,
            alt: "Sina Choir Website",
            demo: "https://sinachoir-website.netlify.app/",
            codeLink: "",
        },
        {
            id: 5,
            src: project5,
            alt: "Survey Form",
            demo: "",
            codeLink: "",
        },
        {
          id: 6,
          src: project2,
          alt: "Guess number game",
          demo: "",
          codeLink: "",
      },
    ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline">
            Portfolio
          </h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, demo, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeLink} target='_blank' rel='noreferrer'>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;