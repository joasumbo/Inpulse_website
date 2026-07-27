import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Settings, Droplets, Zap, Box } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const [homeContent, setHomeContent] = useState({
    hero_badge: 'Disponível para novos projetos',
    hero_title: 'INPULSE',
    hero_subtitle: 'Grupo Multidisciplinar',
    hero_description: 'Somos um grupo com várias áreas especializadas — eventos, manutenção, laser, car wash e projetos infantis. Trabalhamos com precisão, rapidez e qualidade.',
    hero_cta_primary: 'Começar Projeto',
    hero_cta_secondary: 'Explorar Serviços',
  });

  useEffect(() => {
    loadHomeContent();
  }, []);

  const loadHomeContent = async () => {
    try {
      const { data, error } = await supabase
        .from('home_content')
        .select('*')
        .single();

      if (error) throw error;
      if (data) {
        setHomeContent({
          hero_badge: data.hero_badge,
          hero_title: data.hero_title,
          hero_subtitle: data.hero_subtitle,
          hero_description: data.hero_description,
          hero_cta_primary: data.hero_cta_primary,
          hero_cta_secondary: data.hero_cta_secondary,
        });
      }
    } catch (error) {
      console.error('Erro ao carregar conteúdo da home:', error);
    }
  };

  const services = [
    {
      title: 'Inpulse Events',
      description: 'Produção técnica completa para qualquer evento',
      icon: Calendar,
      link: '/eventos',
      color: 'from-blue-50 to-blue-100/50'
    },
    {
      title: 'Inpulse Services',
      description: 'Manutenção técnica de lojas e espaços comerciais',
      icon: Settings,
      link: '/servicos-tecnicos',
      color: 'from-orange-50 to-orange-100/50'
    },
    {
      title: 'Inpulse Car Wash',
      description: 'Lavagem e detalhe automóvel — serviço profissional',
      icon: Droplets,
      link: '/car-wash',
      color: 'from-blue-50 to-blue-100/50'
    },
    {
      title: 'Inpulse Laser',
      description: 'Corte a laser fibra — aço, inox e ferro',
      icon: Zap,
      link: '/laser',
      color: 'from-red-50 to-red-100/50'
    },
    {
      title: 'Ferrolândia',
      description: 'Marca infantil de peças em metal. Brinquedos, figuras e decorações',
      icon: Box,
      link: '/ferrolandia',
      color: 'from-purple-50 to-purple-100/50'
    },
  ];

  const stats = [
    { number: '500+', label: 'Eventos Realizados' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '98%', label: 'Clientes Satisfeitos' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ opacity, scale }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-dot" />
              {homeContent.hero_badge}
            </motion.div>

            <h1 className="hero-title">
              {homeContent.hero_title}
              <br />
              <span className="gradient-text">{homeContent.hero_subtitle}</span>
            </h1>

            <p className="hero-description">
              {homeContent.hero_description}
            </p>

            <div className="hero-buttons">
              <Link to="/contacto" className="btn-primary">
                {homeContent.hero_cta_primary}
                <ArrowRight size={18} />
              </Link>
              <a href="#servicos" className="btn-secondary">
                {homeContent.hero_cta_secondary}
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="servicos" className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-description">
              Soluções completas e integradas para todas as suas necessidades
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={service.link} className="service-card">
                  <div className={`service-icon-bg bg-gradient-to-br ${service.color}`}>
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-arrow">
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="about-text">
              <h2>Quem Somos</h2>
              <p>
                A Inpulse Events é a marca principal que representa todas as áreas que construímos ao longo dos anos.
              </p>
              <p>
                Somos uma empresa versátil, técnica e prática — resolvemos problemas, criamos soluções 
                e executamos projetos reais. Empresa com várias áreas ligadas entre si, resposta rápida, 
                equipas práticas e técnicas, qualidade e execução sem complicações.
              </p>
              <Link to="/contacto" className="btn-primary">
                Fale Connosco
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <h3>Equipamento Premium</h3>
                <p>Tecnologia de última geração para garantir a melhor qualidade</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">02</div>
                <h3>Equipa Especializada</h3>
                <p>Profissionais experientes e certificados</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">03</div>
                <h3>Suporte Completo</h3>
                <p>Acompanhamento em todas as fases do projeto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Pronto para Começar?</h2>
            <p>Vamos criar algo extraordinário juntos</p>
            <Link to="/contacto" className="btn-white">
              Entrar em Contacto
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
