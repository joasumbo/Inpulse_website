import React from 'react';
import { AnimatedSection } from './SharedComponents';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-orange-50/40 via-white to-red-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full mb-4">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inovação e <span className="text-red-600">Excelência</span> em Cada Projeto</h2>
            <p className="text-gray-600 mb-4">Com mais de 15 anos de experiência, a Inpulse combina criatividade e tecnologia para criar experiências únicas.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">Equipamento Premium</div>
              <div className="p-4 bg-white rounded-lg shadow">Equipa Expert</div>
              <div className="p-4 bg-white rounded-lg shadow">Suporte 24/7</div>
              <div className="p-4 bg-white rounded-lg shadow">Garantia Total</div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="relative">
            <div className="bg-gradient-to-br from-red-600 to-orange-400 rounded-3xl p-8 shadow-lg text-center">
              <img src="/inpulse_logo.png" alt="Inpulse" className="h-20 mx-auto mb-4 brightness-0 invert" />
              <h3 className="text-2xl font-bold text-white">Inpulse</h3>
              <p className="text-white/80">Criando experiências desde 2009</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
