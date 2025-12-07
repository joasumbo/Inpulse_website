import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Palette, Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaserPage: React.FC = () => {
  const features = [
    { icon: Zap, title: 'Laser Shows', desc: 'Espetáculos de laser sincronizados com música' },
    { icon: Palette, title: 'Mapping', desc: 'Projeção mapeada em superfícies e estruturas' },
    { icon: Music, title: 'Sincronização', desc: 'Perfeita sincronia com áudio e vídeo' },
    { icon: Sparkles, title: 'Efeitos Especiais', desc: 'Criação de momentos únicos e memoráveis' },
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
            Laser
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Shows de laser profissionais que criam experiências visuais inesquecíveis
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
              <h2>Tecnologia Laser de Vanguarda</h2>
              <p>
                Utilizamos equipamento laser de última geração para criar espetáculos visuais impressionantes. 
                Desde shows sincronizados com música até projeções arquiteturais complexas, transformamos 
                qualquer espaço numa experiência visual única.
              </p>

              <div className="features-grid">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="feature-card"
                  >
                    <div className="feature-icon-wrapper">
                      <feature.icon size={24} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="info-section">
                <h3>Aplicações</h3>
                <ul>
                  <li>Concertos e Festivais de Música</li>
                  <li>Eventos Corporativos de Grande Escala</li>
                  <li>Inaugurações e Lançamentos</li>
                  <li>Celebrações e Festas Privadas</li>
                  <li>Projeções Arquiteturais</li>
                  <li>Shows Temáticos</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Crie um Show Único</h3>
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

export default LaserPage;
