import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialLinks = [
    { icon: faFacebook, url: 'https://www.facebook.com/yourpage' },
    { icon: faTwitter, url: 'https://twitter.com/yourhandle' },
    { icon: faInstagram, url: 'https://www.instagram.com/yourusername' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/yourprofile' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="mt-4 text-gray-400">Contact me via email or connect on social media.</p>
            <ul className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Me</a>
              </li>
              <li className="mb-2">
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
