import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Sparkles, Wind, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarWashPage: React.FC = () => {
  const services = [
    { icon: Droplets, title: 'Lavagem Exterior Completa', desc: 'Pré-lavagem, limpeza de carroçaria, secagem manual, pneus tratados' },
    { icon: Sparkles, title: 'Lavagem Interior Completa', desc: 'Aspiração total, limpeza de plásticos, tratamento de bancos' },
    { icon: Wind, title: 'Detalhe / Profundidade', desc: 'Higienização completa, limpeza de estofos, detalhamento de zonas críticas' },
    { icon: Video, title: 'Vídeos de Limpeza', desc: 'Vídeos satisfatórios de alta qualidade para redes sociais' },
  ];

  return (
    <div className="page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="page-header"
      >
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Inpulse Car Wash
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Lavagem e detalhe automóvel com resultados imediatos
          </motion.p>
        </div>
      </motion.div>

      <div className="page-content">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="content-grid"
          >
            <div className="content-main">
              <h2>Sobre a Inpulse Car Wash</h2>
              <p>
                Um serviço focado em limpeza profunda, detalhe e resultados visíveis. Trabalhamos com 
                atenção ao detalhe e produtos profissionais.
              </p>

              <div className="features-grid">
                {services.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="feature-card"
                  >
                    <div className="feature-icon-wrapper">
                      <service.icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="info-section">
                <h3>Vantagens do Serviço</h3>
                <ul>
                  <li>Rapidez</li>
                  <li>Atenção ao pormenor</li>
                  <li>Equipamento adequado</li>
                  <li>Resultados a olho nu</li>
                  <li>Limpezas profissionais que realmente fazem diferença</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Quer marcar a sua lavagem?</h3>
                <p>Envie mensagem</p>
                <Link to="/contacto" className="btn-primary">Marcar</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarWashPage;
