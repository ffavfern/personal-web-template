import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsSlideshow from "../components/ProjectsSlideshow";
import Services from "../components/Services";
import Socials from "../components/Socials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
    
    {/* Hero Section */}
    
      <Hero />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> 

        {/* About Section */}
        <About/>

        {/* ProjectsSlideshow */}

        <ProjectsSlideshow/>

        {/* Services Section */}
        <Services/>
        <div className="flex w-1/2 justify-between items-center">

        {/* Socials Section */}
        <Socials/>
        {/* Contact Section */}
        <Contact/>
        </div>
        
      </div>
      {/* Footer Section */}
      <Footer/>
    </>
  );
};

export default Home;
