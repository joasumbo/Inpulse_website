import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings, Wrench, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicosPage: React.FC = () => {
  const services = [
    { icon: Settings, title: 'Consultoria AV', desc: 'Análise e planeamento de infraestrutura audiovisual' },
    { icon: Wrench, title: 'Instalação', desc: 'Montagem profissional de equipamentos e sistemas' },
    { icon: Shield, title: 'Manutenção', desc: 'Suporte técnico e manutenção preventiva' },
    { icon: CheckCircle, title: 'Gestão de Projetos', desc: 'Coordenação completa de projetos audiovisuais' },
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
            Serviços Técnicos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Consultoria e gestão especializada em infraestrutura audiovisual
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
              <h2>Soluções Técnicas Completas</h2>
              <p>
                Oferecemos consultoria especializada e gestão completa de projetos audiovisuais, desde o 
                planeamento inicial até à manutenção contínua. A nossa equipa técnica garante que os seus 
                sistemas funcionam com máxima eficiência.
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
                <h3>O Nosso Processo</h3>
                <ol>
                  <li>Análise das necessidades e objetivos</li>
                  <li>Desenvolvimento de soluções personalizadas</li>
                  <li>Implementação profissional</li>
                  <li>Testes e otimização</li>
                  <li>Formação e documentação</li>
                  <li>Suporte contínuo</li>
                </ol>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Precisa de Consultoria?</h3>
                <p>Fale connosco sobre o seu projeto.</p>
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
