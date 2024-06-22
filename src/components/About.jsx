
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCode, faLightbulb, faPalette, faSearch } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { id: 'ux-design', name: 'UX Design', icon: faPencilAlt, delay: 1.8 },
  { id: 'ui-development', name: 'UI Development', icon: faCode, delay: 2.1 },
  { id: 'prototyping', name: 'Prototyping', icon: faLightbulb, delay: 2.4 },
  { id: 'wireframing', name: 'Wireframing', icon: faPalette, delay: 2.7 },
  { id: 'user-research', name: 'User Research', icon: faSearch, delay: 3.0 },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I am passionate about crafting beautiful and user-friendly experiences through UX/UI design. With over 5 years of experience, I specialize in creating intuitive interfaces that delight users and drive engagement.
          </motion.p>
          <div className="flex justify-center mt-12 flex-wrap">
            {skills.map((skill) => (
              <motion.div
                key={skill.id} // Use a stable key for each skill card
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 rounded-lg text-sm font-semibold m-4 flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: skill.delay, duration: 0.8 }}
              >
                <FontAwesomeIcon icon={skill.icon} className="mr-2" />
                {skill.name}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            {/* Additional content can be added here */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
