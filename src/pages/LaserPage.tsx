import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Layers, Ruler, CheckCircle, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaserPage: React.FC = () => {
  const features = [
    { icon: Zap, title: 'Peças Técnicas', desc: 'Suportes, placas, adaptadores e prototipagem' },
    { icon: Sparkles, title: 'Produtos Decorativos', desc: 'Chaveiros, figuras metálicas, placas com nomes' },
    { icon: Layers, title: 'Peças Industriais', desc: 'Cortes de precisão para empresas e componentes em série' },
    { icon: CheckCircle, title: 'Acabamentos', desc: 'Limpeza, rebarbação, polimento e pintura' },
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
            Inpulse Laser
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Corte a laser de precisão para peças únicas
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
              <h2>Sobre a Inpulse Laser</h2>
              <p>
                Trabalhamos com corte a laser fibra para produzir peças em aço, inox ou ferro. 
                Fazemos desde peças técnicas a produtos decorativos e estruturas maiores.
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
                <h3>Capacidades Técnicas</h3>
                <ul>
                  <li>Corte até 15 mm em Aço</li>
                  <li>Dimensões máximas: 3000 × 1500 mm</li>
                  <li>Ritmo de produção rápido</li>
                  <li>Qualidade constante</li>
                  <li>Precisão milimétrica, produção rápida</li>
                </ul>
              </div>

              <div className="info-section">
                <h3>Vantagens para Clientes</h3>
                <ul>
                  <li>Rapidez na entrega</li>
                  <li>Precisão elevada</li>
                  <li>Flexibilidade de quantidades</li>
                  <li>Produção local sem burocracia</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Envie o seu desenho ou ideia</h3>
                <p>Nós cortamos para si.</p>
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
