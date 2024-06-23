import { motion } from 'framer-motion';

const services = [
  {
    title: 'UX Design',
    description: 'Crafting intuitive user experiences that delight users and enhance usability.',
    icon: 'icon-for-ux-design', // Example: Replace with appropriate icon identifier or path
  },
  {
    title: 'UI Development',
    description: 'Building responsive and visually appealing user interfaces with modern web technologies.',
    icon: 'icon-for-ui-development',
  },
  {
    title: 'Prototyping',
    description: 'Creating interactive prototypes to visualize and iterate on design concepts.',
    icon: 'icon-for-prototyping',
  },
  {
    title: 'Wireframing',
    description: 'Designing wireframes that outline the structure and layout of digital products.',
    icon: 'icon-for-wireframing',
  },
  {
    title: 'User Research',
    description: 'Conducting thorough user research to inform design decisions and validate assumptions.',
    icon: 'icon-for-user-research',
  },
  {
    title: 'User Research',
    description: 'Conducting thorough user research to inform design decisions and validate assumptions.',
    icon: 'icon-for-user-research',
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title} // Use a unique key for each service item
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 p-3 mb-4">
                  {/* Placeholder for icon */}
                  <img src={`images/${service.icon}.svg`} alt={service.title} className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 px-6 mb-6">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
