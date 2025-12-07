import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Sparkles, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarWashPage: React.FC = () => {
  const services = [
    { icon: Droplets, title: 'Lavagem Exterior', desc: 'Limpeza completa da carroçaria com produtos premium' },
    { icon: Sparkles, title: 'Limpeza Interior', desc: 'Aspiração e limpeza detalhada do interior' },
    { icon: Shield, title: 'Polimento', desc: 'Tratamento profissional da pintura' },
    { icon: Star, title: 'Proteção', desc: 'Aplicação de ceras e selantes de proteção' },
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
            Car Wash
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Lavagem premium de viaturas com produtos de qualidade superior
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
              <h2>Cuidado Premium para o Seu Veículo</h2>
              <p>
                Oferecemos serviços de lavagem profissional com produtos de alta qualidade e técnicas 
                especializadas. O seu veículo merece o melhor tratamento.
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
                <h3>Nossos Pacotes</h3>
                <ul>
                  <li><strong>Básico:</strong> Lavagem exterior e aspiração</li>
                  <li><strong>Completo:</strong> Lavagem + limpeza interior + vidros</li>
                  <li><strong>Premium:</strong> Lavagem + polimento + proteção</li>
                  <li><strong>Detailing:</strong> Serviço completo de restauro e proteção</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Agende o Seu Serviço</h3>
                <p>Entre em contacto para marcações.</p>
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
