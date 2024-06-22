import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  const socialLinks = [
    { id: 'facebook', icon: faFacebook, url: 'https://www.facebook.com/yourpage' },
    { id: 'twitter', icon: faTwitter, url: 'https://twitter.com/yourhandle' },
    { id: 'instagram', icon: faInstagram, url: 'https://www.instagram.com/yourusername' },
    { id: 'linkedin', icon: faLinkedin, url: 'https://www.linkedin.com/in/yourprofile' },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-8 my-20">
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.id} // Use a stable unique identifier (id) as the key
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={socialLink.icon} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
