import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cookie-consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cookie-content">
            <div className="cookie-icon">
              <Cookie size={24} />
            </div>
            <div className="cookie-text">
              <h3>Este site utiliza cookies</h3>
              <p>
                Utilizamos cookies para melhorar a sua experiência de navegação, 
                analisar o tráfego do site e personalizar conteúdo. Ao continuar 
                a navegar, concorda com a nossa utilização de cookies.
              </p>
            </div>
          </div>
          <div className="cookie-actions">
            <button onClick={handleReject} className="cookie-btn-secondary">
              Recusar
            </button>
            <button onClick={handleAccept} className="cookie-btn-primary">
              Aceitar
            </button>
          </div>
          <button onClick={handleReject} className="cookie-close">
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
