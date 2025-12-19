import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado pelo seu contacto! Entraremos em contacto em breve.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Contacto
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-subtitle"
          >
            Vamos criar algo extraordinário juntos
          </motion.p>
        </div>
      </motion.div>

      <div className="page-content">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-container"
          >
            <div className="contact-info-section">
              <div className="contact-card">
                <Phone size={24} />
                <h3>Telefone</h3>
                <p>+351 960 101 116</p>
              </div>
              <div className="contact-card">
                <Mail size={24} />
                <h3>Email</h3>
                <p>info@inpulse.pt</p>
              </div>
              <div className="contact-card">
                <MapPin size={24} />
                <h3>Localização</h3>
                <p>Portugal</p>
              </div>
            </div>

            <form className="contact-form-section" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Serviço de Interesse</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="eventos">Inpulse Events</option>
                    <option value="servicos">Inpulse Services</option>
                    <option value="carwash">Inpulse Car Wash</option>
                    <option value="laser">Inpulse Laser</option>
                    <option value="ferrolandia">Ferrolândia</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Mensagem</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
