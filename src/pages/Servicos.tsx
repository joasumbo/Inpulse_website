import { useState } from 'react';
import { Cable, Lightbulb, Wrench, Hammer, CheckCircle2, MessageCircle, Speaker } from 'lucide-react';

export default function Servicos() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: Cable,
      title: 'Cablagem e Redes',
      features: [
        'Instalação de cabos de rede',
        'Reestruturação de sistemas antigos',
        'Passagem de cabos em loja',
        'Organização de bastidores e racks'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Iluminação e Eletricidade',
      features: [
        'Substituição de focos',
        'Instalação de lâmpadas LED',
        'Reparação de tomadas e quadros',
        'Diagnóstico de avarias'
      ]
    },
    {
      icon: Wrench,
      title: 'Pequenas Reparações',
      features: [
        'Pequenos trabalhos de canalização',
        'Reparação de portas, dobradiças e perfis',
        'Ajustes e substituição de elementos danificados',
        'Pequenas obras em Pladur'
      ]
    },
    {
      icon: Hammer,
      title: 'Serralharia',
      features: [
        'Ajustes e reparos metálicos',
        'Suportes, perfis e reforços',
        'Peças metálicas feitas à medida'
      ]
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      features: [
        'Inspeções regulares',
        'Planos de manutenção personalizados',
        'Relatórios detalhados',
        'Redução de custos operacionais'
      ]
    },
    {
      icon: Speaker,
      title: 'Reparações de Som e Painéis LED/Vídeo',
      features: [
        'Instalação e reparação de sistemas de som',
        'Configuração de painéis LED',
        'Manutenção de ecrãs e displays',
        'Diagnóstico de falhas audiovisuais'
      ]
    }
  ];

  const advantages = [
    'Trabalhamos fora do horário (noite)',
    'Equipa rápida e habituada a trabalhar em retalho',
    'Discrição total',
    'Serviço de urgência'
  ];

  const handleWhatsAppContact = () => {
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    const message = `Olá! Gostaria de solicitar:\n\n*Serviço:* ${formData.service}\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/351960101116?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/inpulse_logo.png" 
            alt="Inpulse Logo" 
            className="h-20 mx-auto mb-8"
          />
          <p className="text-xl text-gray-600 mb-8">
            Manutenção técnica de lojas e espaços comerciais.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Transformamos problemas em soluções.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition"
          >
            <MessageCircle size={20} />
            Entrar em Contato →
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre a Inpulse Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Somos especialistas em manutenção técnica para lojas e empresas, com experiência diária 
            em lojas de grupos como a <strong>Inditex</strong> em parceria com a CDC. Trabalhamos à noite para 
            evitar impacto no funcionamento da loja.
          </p>
          
          {/* Logos clientes */}
          <div className="mt-12">
            <img
              src="/servicos-logos.jpeg?v=2"
              alt="Clientes Inpulse - Inditex Group"
              className="max-w-full mx-auto"
              style={{ maxHeight: '280px' }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Serviços Principais</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow">
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Vantagens para Lojas</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <span className="text-gray-800">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Entre em Contato</h2>
          <p className="text-center text-gray-600 mb-8">
            Preencha o formulário e fale conosco via WhatsApp
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppContact(); }} className="space-y-4 bg-white p-8 rounded-lg shadow">
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Nome Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">Telefone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
                placeholder="+351 900 000 000"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">Serviço de Interesse</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
              >
                <option value="">Selecione um serviço</option>
                <option value="Cablagem e Redes">Cablagem e Redes</option>
                <option value="Iluminação e Eletricidade">Iluminação e Eletricidade</option>
                <option value="Pequenas Reparações">Pequenas Reparações</option>
                <option value="Serralharia">Serralharia</option>
                <option value="Múltiplos Serviços">Múltiplos Serviços</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">Mensagem</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 resize-none"
                placeholder="Descreva o que você precisa..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={20} />
              Enviar para WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Inpulse - Grupo Multidisciplinar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
