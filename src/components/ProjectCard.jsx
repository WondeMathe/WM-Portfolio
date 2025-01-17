import React, { useState, useEffect } from 'react';
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.jpg';
import project3 from '../assets/portfolio/project3.jpg';
import project4 from '../assets/portfolio/project4.jpg';
import project5 from '../assets/portfolio/project5.png';

// GitHub API URL to fetch recent repositories
const GITHUB_API_URL = 'https://api.github.com/users/WondeMathe/repos?sort=created&per_page=6';

const Portfolio = () => {
  // State for portfolio items
  const [portfolios, setPortfolios] = useState(() => {
    const storedPortfolios = localStorage.getItem('portfolios');
    return storedPortfolios ? JSON.parse(storedPortfolios) : [
      {
        id: 1,
        src: project1,
        alt: "Guess number game",
        demo: "https://guessing-game-wm.netlify.app/",
        codeLink: "https://github.com/WondeMathe/HTML-CSS-JS/tree/master/Simple%20game%20in%20HTML%20CSS%2C%20JavaScript",
        projectTitle: "Guessing Game",
        likes: 0,
        liked: false
      },
      {
        id: 2,
        src: project2,
        alt: "Bakery project",
        demo: "",
        codeLink: "",
        projectTitle: "Bakery Project",
        likes: 0,
        liked: false
      },
      {
        id: 3,
        src: project3,
        alt: "Responsive web",
        demo: "",
        codeLink: "",
        projectTitle: "Responsive Web",
        likes: 0,
        liked: false
      },
      {
        id: 4,
        src: project4,
        alt: "Sina Choir Website",
        demo: "https://sinachoir-website.netlify.app/",
        codeLink: "",
        projectTitle: "Sina Choir Project",
        likes: 0,
        liked: false
      },
      {
        id: 5,
        src: project5,
        alt: "Survey Form",
        demo: "",
        codeLink: "",
        projectTitle: "Survey Form",
        likes: 0,
        liked: false
      },
      {
        id: 6,
        src: project2,
        alt: "Guess number game",
        demo: "",
        codeLink: "",
        projectTitle: "Guessing Game",
        likes: 0,
        liked: false
      }
    ];
  });

  // State for GitHub repositories
  const [repos, setRepos] = useState([]);

  // Function to toggle like status and increment likes
  const toggleLike = (id) => {
    const updatedPortfolios = portfolios.map(project =>
      project.id === id
        ? {
            ...project,
            liked: !project.liked,  // Toggle the like status
            likes: project.liked ? project.likes - 1 : project.likes + 1  // Increment or decrement likes
          }
        : project
    );

    // Update state
    setPortfolios(updatedPortfolios);

    // Save updated portfolios to localStorage
    localStorage.setItem('portfolios', JSON.stringify(updatedPortfolios));
  };

  // Fetch GitHub repositories on component mount
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchRepos();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div name="portfolio" className="dark:bg-gray-900 dark:text-white w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline">Portfolio</h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Display the portfolio items */}
          {portfolios.map(({ id, src, alt, demo, codeLink, projectTitle, likes, liked }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={alt} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 pt-3 m-3 duration-200 hover:scale-105">
                  <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
                </button>
                <button className="w-1/2 px-6 pt-3 m-3 duration-200 hover:scale-105">
                  <a href={codeLink} target='_blank' rel='noreferrer'>Code</a>
                </button>
              </div>
              <div className="px-6 pb-3">
                <p>Title: <span className='font-bold'>{projectTitle}</span></p>
                <div className="flex items-center">
                  <button
                    className={`px-4 py-2 rounded-md duration-200 hover:scale-105 ${liked ? 'text-blue-500' : 'text-gray-500'}`}
                    onClick={() => toggleLike(id)}
                  >
                    <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} />
                    {liked ? ' Liked' : ' Like'}
                  </button>
                  <p className="ml-4">{likes} Likes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-8 mt-14">
          <h2 className="text-4xl font-bold inline">Recent GitHub Repositories</h2>
          <p className="py-6">Here are some of my recent GitHub repositories:-</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Display recent GitHub repositories */}
          {repos.map((repo) => (
            <div key={repo.id} className="dark:bg-gray-800 bg-gray-700 text-white shadow-md shadow-gray-600 rounded-lg">
              <div className="px-6 py-3">
                <p>Title: <span className='font-bold'>{repo.name}</span></p>
                <p className="text-gray-400">{repo.description}</p>
                <div className="flex items-center justify-center mt-4">
                  <button className="w-1/2 px-6 pt-3 m-3 duration-200 hover:scale-105">
                    <a href={repo.html_url} target='_blank' rel='noreferrer' className='text-blue-400'>View Repo</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
