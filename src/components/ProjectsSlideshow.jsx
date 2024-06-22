import { useState } from 'react';
import { motion } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    image: 'https://via.placeholder.com/600x400/FFC0CB/000000',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    image: 'https://via.placeholder.com/600x400/ADD8E6/000000',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
    image: 'https://via.placeholder.com/600x400/F0FFF0/000000',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4',
    image: 'https://via.placeholder.com/600x400/FFD700/000000',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description for Project 5',
    image: 'https://via.placeholder.com/600x400/FFA07A/000000',
    demoLink: '#',
    codeLink: '#',
  },
];
const ProjectsSlideshow = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3; // Number of project cards to show at a time
  const totalProjects = projects.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalProjects - cardsPerPage : prev - cardsPerPage));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= totalProjects - cardsPerPage ? 0 : prev + cardsPerPage));
  };

  return (
    <>
    <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Projects
          </motion.h2>
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex justify-center items-center relative">
            {startIndex > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-800 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.707 15.293a1 1 0 0 1-1.414 0L8 10.414 6.707 11.707a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            )}
            {startIndex < totalProjects - cardsPerPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-800 hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 4.293a1 1 0 0 1 1.414 0L12 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            )}
            <div className="flex space-x-6">
              {projects.slice(startIndex, startIndex + cardsPerPage).map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg shadow-xl w-96 h-64 md:w-96 md:h-72 lg:w-96 lg:h-80 xl:w-96 xl:h-96"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-lg text-gray-200">{project.description}</p>
                      <div className="mt-4 flex justify-center space-x-4">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          View Demo
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 text-gray-800 py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectsSlideshow;
