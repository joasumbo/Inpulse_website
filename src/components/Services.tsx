import React from 'react';
import { AnimatedSection } from './SharedComponents';

const Services: React.FC = () => {
  const items = [
    { icon: '🎪', title: 'Eventos', desc: 'Produção audiovisual completa' },
    { icon: '⚙️', title: 'Serviços Técnicos', desc: 'Consultoria e gestão AV' },
    { icon: '🚗', title: 'Car Wash', desc: 'Serviço premium de lavagem' },
    { icon: '✨', title: 'Laser Shows', desc: 'Shows e mapping 3D' },
    { icon: '🔧', title: 'Ferrolândia', desc: 'Estruturas e montagem' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
          <p className="text-gray-600">Soluções completas para transformar a sua visão em realidade</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="p-6 bg-gradient-to-br from-white to-red-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
