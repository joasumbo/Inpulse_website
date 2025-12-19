import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import ServicosPage from './pages/ServicosPage';
import CarWashPage from './pages/CarWashPage';
import LaserPage from './pages/LaserPage';
import FerrolandiaPage from './pages/FerrolandiaPage';
import Contacto from './pages/Contacto';

// Components
import Chatbot from './components/Chatbot';
import CookieConsent from './components/CookieConsent';
import Loader from './components/Loader';

// Layout Components
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/eventos', label: 'Inpulse Events' },
    { path: '/servicos-tecnicos', label: 'Inpulse Services' },
    { path: '/car-wash', label: 'Inpulse Car Wash' },
    { path: '/laser', label: 'Inpulse Laser' },
    { path: '/ferrolandia', label: 'Ferrolândia' },
  ];

  return (
    <motion.nav 
      className={`nav ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/inpulse_logo.png" alt="Inpulse" />
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacto" className="nav-cta">
            Contacto
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/inpulse_logo.png" alt="Inpulse" className="footer-logo" />
            <p>Grupo com várias áreas especializadas</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Serviços</h4>
              <Link to="/eventos">Inpulse Events</Link>
              <Link to="/servicos-tecnicos">Inpulse Services</Link>
              <Link to="/car-wash">Inpulse Car Wash</Link>
              <Link to="/laser">Inpulse Laser</Link>
              <Link to="/ferrolandia">Ferrolândia</Link>
            </div>
            <div>
              <h4>Empresa</h4>
              <Link to="/">Sobre Nós</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
            <div>
              <h4>Contacto</h4>
              <a href="tel:+351960101116">+351 960 101 116</a>
              <a href="mailto:info@inpulse.pt">info@inpulse.pt</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inpulse. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Page Transition Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Main App Component
const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/eventos" element={<PageTransition><Eventos /></PageTransition>} />
          <Route path="/servicos-tecnicos" element={<PageTransition><ServicosPage /></PageTransition>} />
          <Route path="/car-wash" element={<PageTransition><CarWashPage /></PageTransition>} />
          <Route path="/laser" element={<PageTransition><LaserPage /></PageTransition>} />
          <Route path="/ferrolandia" element={<PageTransition><FerrolandiaPage /></PageTransition>} />
          <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Chatbot />
      <CookieConsent />
      <Loader />
    </div>
  );
};

// Wrapper for Router
const AppWithRouter: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWithRouter;
