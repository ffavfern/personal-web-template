import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-500 to-indigo-600 text-white w-64 py-6 px-4 shadow-lg z-10 rounded-r-full ${
        isOpen ? 'rounded-r-none' : ''
      }`}
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onMouseLeave={closeMenu}
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          className="text-2xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Menu
        </motion.h2>
        <motion.button
          className="text-gray-200 hover:text-white focus:outline-none"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
      <ul className="space-y-4">
        <motion.li
          className="text-lg font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
          transition={{ delay: isOpen ? 0.4 : 0, duration: 0.8 }}
        >
          <a href="#about" onClick={closeMenu}>About</a>
        </motion.li>
        <motion.li
          className="text-lg font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
          transition={{ delay: isOpen ? 0.6 : 0, duration: 0.8 }}
        >
          <a href="#services" onClick={closeMenu}>Services</a>
        </motion.li>
        <motion.li
          className="text-lg font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
          transition={{ delay: isOpen ? 0.8 : 0, duration: 0.8 }}
        >
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </motion.li>
        <motion.li
          className="text-lg font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
          transition={{ delay: isOpen ? 1.0 : 0, duration: 0.8 }}
        >
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
