import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Box, Wrench, HardHat, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FerrolandiaPage: React.FC = () => {
  const products = [
    { icon: Box, title: 'Estruturas', desc: 'Estruturas metálicas para palcos e eventos' },
    { icon: Wrench, title: 'Fixações', desc: 'Sistemas de fixação e suporte profissionais' },
    { icon: HardHat, title: 'Montagem', desc: 'Serviço de montagem especializada' },
    { icon: Lock, title: 'Segurança', desc: 'Equipamentos certificados e seguros' },
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
            Ferrolândia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Soluções em ferragens e equipamentos para infraestrutura de eventos
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
              <h2>Infraestrutura Profissional</h2>
              <p>
                Fornecemos estruturas metálicas, sistemas de fixação e equipamentos especializados para 
                montagem de palcos, stands e infraestrutura de eventos. Todos os nossos produtos são 
                certificados e cumprem as normas de segurança mais rigorosas.
              </p>

              <div className="features-grid">
                {products.map((product, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="feature-card"
                  >
                    <div className="feature-icon-wrapper">
                      <product.icon size={24} />
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="info-section">
                <h3>Produtos e Serviços</h3>
                <ul>
                  <li>Estruturas modulares para palcos</li>
                  <li>Treliças e sistemas de suspensão</li>
                  <li>Sistemas de fixação certificados</li>
                  <li>Equipamentos de elevação</li>
                  <li>Consultoria técnica especializada</li>
                  <li>Serviços de montagem e desmontagem</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Precisa de Equipamento?</h3>
                <p>Consulte-nos sobre disponibilidade.</p>
                <Link to="/contacto" className="btn-primary">Pedir Orçamento</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FerrolandiaPage;
