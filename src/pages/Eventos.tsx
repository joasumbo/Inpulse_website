import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Music, Lightbulb, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Eventos: React.FC = () => {
  const features = [
    { icon: Music, title: 'Som Profissional', desc: 'Sistemas de áudio de última geração para eventos de qualquer escala' },
    { icon: Lightbulb, title: 'Iluminação Cénica', desc: 'Design de iluminação criativo e técnico para criar atmosferas únicas' },
    { icon: Video, title: 'Projeção HD/4K', desc: 'Projetores de alta definição e telas LED para máximo impacto visual' },
    { icon: Calendar, title: 'Streaming ao Vivo', desc: 'Transmissão profissional para alcançar audiências globais' },
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
            Eventos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Produção audiovisual completa para eventos corporativos e privados
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
              <h2>Transformamos Eventos em Experiências Memoráveis</h2>
              <p>
                Com mais de 15 anos de experiência, oferecemos soluções audiovisuais completas para eventos 
                de todos os tipos e dimensões. Da conceção à execução, garantimos que cada detalhe técnico 
                contribui para o sucesso do seu evento.
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
                  <li>Conferências e Convenções</li>
                  <li>Eventos Corporativos</li>
                  <li>Concertos e Festivais</li>
                  <li>Casamentos e Eventos Privados</li>
                  <li>Lançamentos de Produtos</li>
                  <li>Feiras e Exposições</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Vamos Trabalhar Juntos?</h3>
                <p>Entre em contacto para discutirmos o seu próximo evento.</p>
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
