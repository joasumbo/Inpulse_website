import React from 'react';
import { MagneticButton, AnimatedCounter } from './SharedComponents';

const Hero: React.FC<{ scrollToSection: (id: string) => void }> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-orange-50/50">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-600">Disponível para novos projetos</span>
        </div>

        <img src="/inpulse_logo.png" alt="Inpulse" className="h-24 w-auto mx-auto mb-8" />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Criamos <span className="text-red-600">Experiências</span> Memoráveis
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Soluções audiovisuais premium que transformam os seus eventos em momentos inesquecíveis.</p>

        <div className="flex gap-4 justify-center mb-12">
          <MagneticButton onClick={() => scrollToSection('contact')}>Começar Projeto →</MagneticButton>
          <MagneticButton variant="secondary" onClick={() => scrollToSection('services')}>Ver Serviços ▶</MagneticButton>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[{v:500,l:'Eventos'}, {v:15,l:'Anos'}, {v:98,l:'Satisfação'}].map((s, i) => (
            <div key={i} className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow"> 
              <div className="text-2xl font-bold text-red-600"><AnimatedCounter target={s.v} suffix={s.v === 98 ? '%' : '+'} /></div>
              <div className="text-sm text-gray-600 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
