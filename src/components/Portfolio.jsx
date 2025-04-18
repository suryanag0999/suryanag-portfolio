import React from 'react';
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.jpg"
import project7 from "../assets/project7.jpg"
import project8 from "../assets/project8.jpg"
import project9 from "../assets/project9.jpg"
import project10 from "../assets/project10.jpg"
import project11 from "../assets/project11.jpg"
import project12 from "../assets/project12.png"
import project13 from "../assets/project13.jpg"
import project14 from "../assets/project14.jpg"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "JavaScript Scientific Calculator",
      description: "A simple, responsive, and user-friendly scientific calculator built using HTML, CSS, and JavaScript..",
      links: {
        site: "https://suryanag0999.github.io/js-calculator-2/",
        github: "https://github.com/suryanag0999/js-calculator-2",
      },
    },
    {
      img: project2,
      title: "Image Carousel Project",
      description: "This project is an image carousel that allows users to navigate through images using previous and next buttons or by clicking on carousel dots. Additionally, users can click on an image to view it in a popup modal",
      links: {
        site: "https://suryanag0999.github.io/IMAGE-CAROUSEl-l2/",
        github: "https://github.com/suryanag0999/IMAGE-CAROUSEl-l2",
      },
    },
    {
      img: project3,
      title: "Music Player Level-2",
      description: "A simple and elegant music player with a modern UI built using HTML, CSS, and JavaScript. with various features.",
      links: {
        site: "https://suryanag0999.github.io/music-app-L2/",
        github: "https://github.com/suryanag0999/music-app-L2",
      },
    },
    {
      img: project4,
      title: "Weather App",
      description: "This is a React-based Weather Application that provides real-time weather forecasts using the Open-Meteo API.",
      links: {
        site: "https://suryanag0999.github.io/weather-app-level-2/",
        github: "https://github.com/suryanag0999/weather-app-level-2",
      },
    },
    {
      img: project5,
      title: "usePopcorn",
      description: "simple React application that allows users to search for movies, view their details, rate them, and add them to a watched list.",
      links: {
        site: "https://suryanag0999.github.io/use-popcorn/",
        github: "https://github.com/suryanag0999/use-popcorn",
      },
    },
    {
      img: project6,
      title: "Hacking Simulator",
      description: "This fun and harmless hacking prank is designed to scare your friends by making it look like their data is being hacked!",
      links: {
        site: "https://suryanag0999.github.io/MAIL-TERMINAL/",
        github: "https://github.com/suryanag0999/MAIL-TERMINAL",
      },
    },
    {
      img: project7,
      title: "Fast React Pizza Co.",
      description: "Fast React Pizza Co. is a React app that displays an interactive pizza menu, highlights sold-out items, and shows whether the restaurant is currently open.",
      links: {
        site: "https://suryanag0999.github.io/pizza-menu/",
        github: "https://github.com/suryanag0999/pizza-menu",
      },
    },

    {
      img: project8,
      title: "Recipe Finder",
      description: "Recipe Finder is a simple React application that allows users to search for recipes based on ingredients. The app fetches recipe data from the Spoonacular API and displays relevant recipes along with their images",
      links: {
        site: "https://suryanag0999.github.io/recipie-finder/",
        github: "https://github.com/suryanag0999/recipie-finder",
      },
    },

    {
      img: project9,
      title: "tailwind-project",
      description: "This project is a Twitter Clone built using HTML, Tailwind CSS, and Google Material Symbols Icons.",
      links: {
        site: "https://suryanag0999.github.io/tailwind-project/",
        github: "https://github.com/suryanag0999/tailwind-project",
      },
    },

    {
      img: project10,
      title: "Todo Management App With Local Storage Support",
      description: " simple and efficient task management application built using React and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as completed while persisting data using local storage.",
      links: {
        site: "https://suryanag0999.github.io/todo-task/",
        github: "https://github.com/suryanag0999/todo-task",
      },
    },

    {
      img: project11,
      title: "Todo App",
      description: "This is a simple Todo App built using modern web technologies. It allows users to add, delete, and manage their tasks efficiently. The app follows CRUD operations (Create, Read, Update, Delete) and uses MongoDB as the database.",
      links: {
        site: "https://todo-level1.netlify.app/",
        github: "https://github.com/suryanag0999/todo-level1-frontend",
      },
    },

    {
      img: project12,
      title: "Library Management System (MERN Stack)",
      description: "This is a simple Library Management System built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book records Note: This backend project is currently not deployed. You can clone the repository from my GitHub and deploy it on your preferred platform as needed",
      links: {
        site: "https://github.com/suryanag0999/backend_library",
        github: "https://github.com/suryanag0999/backend_library",
      },
    },
    {
      img: project13,
      title: "E-commerce Order Management (MERN Stack)",
      description: "This is a simple Order Management API built using Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete orders Note: This backend project is currently not deployed. You can clone the repository from my GitHub and deploy it on your preferred platform as needed",
      links: {
        site: "https://github.com/suryanag0999/e-commerce-backend",
        github: "https://github.com/suryanag0999/e-commerce-backend",
      },
    },
    {
      img: project14,
      title: "Ongoing & Upcoming Projects",
      description: "More projects and upcoming work are in progress. You can explore my current repositories on GitHub, and stay tuned for future updates — new projects will be added soon.",
      links: {
        site: "https://github.com/suryanag0999",
        github: "https://github.com/suryanag0999",
      },
    },
  ]

  const Portfolio = () => {
    return (
      <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } mb-12`}
            >
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
                  >
                    <AiOutlineGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  };

export default Portfolio
