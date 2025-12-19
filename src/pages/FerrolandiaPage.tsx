import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Box, Sparkles, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FerrolandiaPage: React.FC = () => {
  const products = [
    { icon: Sparkles, title: 'Brinquedos', desc: 'Brinquedos resistentes e divertidos 100% metal' },
    { icon: Heart, title: 'Figuras e Acessórios', desc: 'Figuras metálicas e decorações criativas' },
    { icon: Users, title: 'Para Pais e Crianças', desc: 'Produtos ideais para feiras, escolas e lojas' },
    { icon: Box, title: 'Qualidade Premium', desc: 'Feito com precisão e atenção ao detalhe' },
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
            Marca infantil de peças em metal — A imaginação em aço
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
              <h2>Sobre a Ferrolândia</h2>
              <p>
                Marca infantil de peças em metal. Criamos brinquedos, figuras, acessórios e decorações 
                feitos para pais e crianças. Produtos resistentes, divertidos e 100% metal — ideal para 
                feiras, escolas e lojas.
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
                <h3>Produtos</h3>
                <ul>
                  <li>Brinquedos em metal</li>
                  <li>Figuras decorativas</li>
                  <li>Acessórios criativos</li>
                  <li>Decorações para quartos</li>
                  <li>Presentes únicos</li>
                  <li>Produtos personalizados</li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="cta-card">
                <h3>Descubra a Coleção</h3>
                <p>Consulte-nos sobre disponibilidade.</p>
                <Link to="/contacto" className="btn-primary">Contactar</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FerrolandiaPage;
