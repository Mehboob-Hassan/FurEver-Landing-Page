import AboutUs from './app/AboutUs.jsx';
import Contact from './app/Contact.jsx';
import Footer from './app/Footer.jsx';
import Header from './app/Header.jsx';
import HeroSection from './app/HeroSection.jsx';
import Offerings from './app/Offerings.jsx';
import OurProjects from './app/OurProjects.jsx';
import Services from './app/Services.jsx';
import Testimonials from './app/Testimonials.jsx';
import WhyUs from './app/WhyUs.jsx';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Offerings />
      <AboutUs />
      <Services />
      <WhyUs />
      <OurProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
