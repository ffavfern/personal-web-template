import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to Your Website
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crafted with passion for UX/UI Design
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="/projects"
            className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full py-3 px-8 font-semibold text-sm md:text-base transition duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
