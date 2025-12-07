import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic2, Lightbulb, Monitor, Radio, Users, Sparkles, CheckCircle2, ArrowRight, Play, Calendar, Award, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const services = [
    {
      icon: Mic2,
      title: 'Som Profissional',
      description: 'Sistemas de áudio de alta qualidade para eventos de qualquer porte',
      features: ['Line Arrays', 'Microfones Wireless', 'Mesas Digitais', 'Monitores In-Ear'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Iluminação Cénica',
      description: 'Design e execução de iluminação criativa e técnica',
      features: ['Moving Heads', 'LEDs RGB', 'Strobes', 'Controle DMX'],
      image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&auto=format&fit=crop'
    },
    {
      icon: Monitor,
      title: 'Projeção & Vídeo',
      description: 'Soluções audiovisuais para apresentações impactantes',
      features: ['Projetores 4K', 'LED Walls', 'Video Mapping', 'Câmeras HD'],
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&auto=format&fit=crop'
    },
    {
      icon: Radio,
      title: 'Streaming ao Vivo',
      description: 'Transmissão profissional para alcance global',
      features: ['Multi-câmera', 'Encoder Pro', 'Plataformas Múltiplas', 'Replay Instantâneo'],
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&auto=format&fit=crop'
    },
  ];

  const portfolio = [
    {
      title: 'Eventos Corporativos',
      description: 'Conferências, lançamentos de produtos, convenções',
      stats: '150+ eventos/ano',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop'
    },
    {
      title: 'Festivais & Concertos',
      description: 'Grandes palcos, festivais de música, shows',
      stats: '50+ palcos montados',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop'
    },
    {
      title: 'Casamentos & Privados',
      description: 'Eventos sociais com elegância e sofisticação',
      stats: '200+ celebrações',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&auto=format&fit=crop"
            alt="Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Light Beams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[200%] w-1 bg-gradient-to-b from-red-500/30 via-red-500/10 to-transparent"
            style={{
              left: `${15 + i * 20}%`,
              top: '-50%',
              transform: `rotate(${-15 + i * 8}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-white">Inpulse Events</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Eventos que
              <br />
              <motion.span 
                className="text-red-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 40px rgba(239,68,68,0.8)', '0 0 20px rgba(239,68,68,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Marcam Gerações
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Produção completa de eventos com audiovisuais de excelência. 
              Do som à iluminação, criamos experiências inesquecíveis.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full group bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Ver Showreel
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              {[
                { value: '500+', label: 'Eventos' },
                { value: '15+', label: 'Anos' },
                { value: '98%', label: 'Satisfação' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Os Nossos <span className="text-red-500">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipamentos de última geração e equipa técnica especializada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 md:bg-gradient-to-t md:from-black/50 md:to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 mb-4 flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="text-white" size={24} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="text-red-500 flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Nosso <span className="text-red-500">Portfolio</span>
            </h2>
            <p className="text-muted-foreground">Tipos de eventos que realizamos com excelência</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {item.stats}
                  </motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Porquê <span className="text-red-500">Escolher-nos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: 'Equipamento Premium', text: 'Marcas líderes de mercado' },
              { icon: Users, title: 'Equipa Experiente', text: 'Técnicos certificados' },
              { icon: Headphones, title: 'Suporte 24/7', text: 'Assistência a qualquer hora' },
              { icon: Sparkles, title: 'Qualidade Garantida', text: 'Resultados que impressionam' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-background rounded-2xl p-6 border border-border shadow-lg text-center"
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 mx-auto mb-4 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Animated Circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-white/10 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1 + i * 0.3, 1.5 + i * 0.3, 1 + i * 0.3],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Calendar className="w-16 h-16" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para o Seu Evento?</h2>
            <p className="text-lg mb-8 text-white/80">
              Contacte-nos e transforme o seu evento numa experiência inesquecível!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full text-red-600 font-semibold shadow-xl">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                +351 960 101 116
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
