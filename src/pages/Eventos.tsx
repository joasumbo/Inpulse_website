import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Music, Lightbulb, Video, Truck, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Eventos: React.FC = () => {
  const features = [
    { icon: Building2, title: 'Palco e Estruturas', desc: 'Palco móvel / camião-palco, estruturas TRUSS, pórticos e torres' },
    { icon: Music, title: 'Som Profissional', desc: 'Sistemas line array, mesas digitais, afinação técnica adequada ao espaço' },
    { icon: Lightbulb, title: 'Iluminação', desc: 'Luz de palco: moving heads, wash, efeitos especiais (fumo, laser)' },
    { icon: Video, title: 'Vídeo e Multimédia', desc: 'Ecrãs LED interiores e exteriores, streaming e gravação' },
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
            Inpulse Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Produção técnica completa para qualquer evento
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
              <h2>Sobre a Inpulse Events</h2>
              <p>
                A Inpulse Events é a área dedicada exclusivamente à produção e execução de eventos.
                Trabalhamos com estruturas, som, luz, vídeo e equipas técnicas profissionais. 
                Montamos, operamos e desmontamos — sem falhas e sem atrasos.
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
                <h3>Tipos de Eventos</h3>
                <ul>
                  <li>Concertos e palco ao vivo</li>
                  <li>Eventos de empresas</li>
                  <li>Festas municipais e populares</li>
                  <li>Casamentos e datas especiais</li>
                  <li>Inaugurações e lançamentos</li>
                  <li>Festas de verão e festivais</li>
                </ul>
              </div>

              <div className="info-section">
                <h3>Como Trabalhamos</h3>
                <ul>
                  <li>Chegamos, montamos e entregamos tudo pronto</li>
                  <li>Equipas técnicas experientes</li>
                  <li>Resposta rápida a imprevistos</li>
                  <li>Logística e transporte incluídos</li>
                  <li>Projeto técnico se necessário</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Quer um orçamento direto e rápido?</h3>
                <p>Fale connosco sobre o seu próximo evento.</p>
                <Link to="/contacto" className="btn-primary">Solicitar Orçamento</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
