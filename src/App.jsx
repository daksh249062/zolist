import React, { useState, useRef } from 'react';
import About from './About';
import Contact from './Feedback';
import './App.css';
import './About.css';

const SimpleLoader = () => (
 
<div class="loader-wrapper">
  <span class="loader-letter">Z</span>
  <span class="loader-letter">O</span>
  <span class="loader-letter">L</span>
  <span class="loader-letter">I</span>
  <span class="loader-letter">S</span>
  <span class="loader-letter">T</span>

  <div class="loader"></div>
</div>

);

const NavBar = ({ onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    
    if (link === 'Home') {
      onViewChange('home');
    } else if (link === 'Companies') {
      onViewChange('about');
    } else if (link === 'Feedback') {
      onViewChange('contact');
    } else {
      window.location.hash = link.replace(/[^a-zA-Z]/g, '').toLowerCase();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Zolist!</div>
      <button
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        {['Home', 'Companies', 'Feedback'].map((link, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

const HeroSection = ({ onMangaClick }) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="main-title">DRIVE YOUR DREAM</h1>
        <p className="subtitle">Dive Into Epic Cars !</p>
        <button className="cta-button" onClick={onMangaClick}>
          Dream It🪶
        </button>
      </div>
    </section>
  );
};

const FeaturesSection = React.forwardRef((props, ref) => {
  const animeLinks = {
    "Toyota": "https://www.toyotabharat.com/",
    "Volkswagen": "https://www.volkswagen.co.in/en.html",
    "Hyundai": "https://www.hyundai.com/in/en",
    "Bmw": "https://www.bmw.in/en/index.html",
    "Mercedes": "https://www.mercedes-benz.com/en/",
    "Audi": "https://www.audi.in/en/",
    "Jaguar": "https://www.jaguar.in/about-jaguar/index.html",
    "Land Rover": "https://www.landrover.in/index.html",
    "Mahindra": "https://www.mahindra.com/",
    "Tesla": "https://www.tesla.com/",
    "Rolls-Royce": "https://www.rolls-roycemotorcars.com/",
    "Bentley": "https://www.bentleymotors.com/",
    "Jaguar": "https://www.jaguar.com/",
    "Maserati": "https://www.maserati.com/",
    "Cadillac": "https://www.cadillac.com/",
    "Volvo": "https://www.volvocars.com/",
    "Lamborghini": "https://www.lamborghini.com/"

  };

  const features = Object.keys(animeLinks);

  return (
    <section className="features-section" id="features" ref={ref}>
      <h2></h2>
      <p className="section-motto">Explore Your Next Favorite Dream</p>
      <p>⬇</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <a
              href={animeLinks[feature]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {feature}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>Zolist!</h3>
          <p>
            Simplifying your daily workflow with efficient tools. 
            Organize, track, and achieve your goals with Zolist.
          </p>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><strong>Address:</strong></p>
          <p>123 Innovation Drive, Suite 400</p>
          
          <p><strong>Email:</strong></p>
          <p><a href="mailto:support@zolist.com">support@zolist.com</a></p>
          
          <p><strong>Phone:</strong></p>
          <p>+1 (555) 123-4567</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zolist. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const featuresRef = useRef(null);

  const handleMangaClick = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleViewChange = (newView) => {
    if (newView !== 'home') {
      setIsLoading(true);
      
      setTimeout(() => {
        setCurrentView(newView);
        setIsLoading(false);
      }, 700);
    } else {
        setCurrentView('home');
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <SimpleLoader />;
    }
    
    if (currentView === 'login') {
      return <Login onBackToHome={() => handleViewChange('home')} />;
    }
    if (currentView === 'about') {
      return <About onBackToHome={() => handleViewChange('home')} />;
    }
    if (currentView === 'contact') {
      return <Contact onBackToHome={() => handleViewChange('home')} />;
    }
    return (
      <>
        <HeroSection onMangaClick={handleMangaClick} />
        <FeaturesSection ref={featuresRef} />
        <AppFooter />
      </>
    );
  };

  return (
    <div className="App">
      <NavBar onViewChange={handleViewChange} />
      {renderContent()}
    </div>
  );
};

export default App;