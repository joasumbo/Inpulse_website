import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings, Wrench, Shield, Lightbulb, Cable, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicosPage: React.FC = () => {
  const services = [
    { icon: Cable, title: 'Cablagem e Redes', desc: 'Instalação de cabos de rede, reestruturação de sistemas antigos' },
    { icon: Lightbulb, title: 'Iluminação e Eletricidade', desc: 'Substituição de focos, instalação LED, reparação de tomadas' },
    { icon: Wrench, title: 'Pequenas Reparações', desc: 'Canalização, portas, perfis, ajustes e pequenas obras em Pladur' },
    { icon: Settings, title: 'Serralharia', desc: 'Ajustes metálicos, suportes, perfis e peças feitas à medida' },
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
            Inpulse Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Manutenção técnica de lojas e espaços comerciais
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
              <h2>Sobre a Inpulse Services</h2>
              <p>
                Somos especialistas em manutenção técnica para lojas e empresas, com experiência diária 
                em lojas de grupos como a Inditex. Trabalhamos à noite para evitar impacto no 
                funcionamento da loja.
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
                <h3>Vantagens para Lojas</h3>
                <ul>
                  <li>Trabalhamos fora do horário (noite)</li>
                  <li>Equipa rápida e habituada a trabalhar em retalho</li>
                  <li>Discrição total</li>
                  <li>Serviço de urgência</li>
                  <li>Preço justo por equipa (50€/hora)</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Precisa de manutenção rápida?</h3>
                <p>Contacte a Inpulse Services</p>
                <Link to="/contacto" className="btn-primary">Contactar</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;
