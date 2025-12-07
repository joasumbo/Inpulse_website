import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wrench, Truck, Users, Clock, Shield, Star, ArrowRight, Phone, Settings, Cog, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const services = [
    {
      icon: Wrench,
      title: 'Manutenção Industrial',
      description: 'Serviços completos de manutenção preventiva e corretiva para equipamentos industriais',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop'
    },
    {
      icon: Truck,
      title: 'Logística & Transporte',
      description: 'Soluções logísticas eficientes para transporte de equipamentos e materiais',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop'
    },
    {
      icon: Settings,
      title: 'Instalações Técnicas',
      description: 'Montagem e instalação de sistemas técnicos com precisão e qualidade',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop'
    },
    {
      icon: Cog,
      title: 'Automação',
      description: 'Sistemas automatizados para otimização de processos e produtividade',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop'
    },
    {
      icon: Zap,
      title: 'Elétrica & Energia',
      description: 'Instalações elétricas, painéis de controle e sistemas de energia',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop'
    },
    {
      icon: Shield,
      title: 'Consultoria Técnica',
      description: 'Análise, diagnóstico e recomendações para melhorias operacionais',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop'
    },
  ];

  const stats = [
    { value: '1000+', label: 'Projetos Realizados' },
    { value: '50+', label: 'Clientes Ativos' },
    { value: '24/7', label: 'Suporte Técnico' },
    { value: '15+', label: 'Anos de Experiência' },
  ];

  const process = [
    { step: '01', title: 'Análise', desc: 'Avaliamos suas necessidades' },
    { step: '02', title: 'Proposta', desc: 'Orçamento detalhado' },
    { step: '03', title: 'Execução', desc: 'Implementação profissional' },
    { step: '04', title: 'Suporte', desc: 'Acompanhamento contínuo' },
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&auto=format&fit=crop"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Gears */}
        <motion.div 
          className="absolute top-1/4 right-10 text-red-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cog size={200} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-32 text-red-500/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={120} />
        </motion.div>

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
              <Wrench className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-white">Inpulse Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Serviços
              <br />
              <motion.span 
                className="text-red-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 40px rgba(239,68,68,0.8)', '0 0 20px rgba(239,68,68,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Técnicos Premium
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Soluções técnicas completas para indústria e empresas. 
              Da manutenção à automação, entregamos excelência.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full group bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
                <Phone className="mr-2 h-5 w-5" />
                Pedir Orçamento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                Ver Serviços
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-red-500"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
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
              Soluções técnicas completas para todas as suas necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <motion.div 
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-white" size={24} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <motion.div 
                      className="mt-4 flex items-center text-red-500 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Saber mais <ArrowRight className="ml-2" size={16} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Como <span className="text-red-500">Trabalhamos</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-500/30" />
                  )}
                  
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-red-600/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="font-bold text-lg mt-4 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute -right-40 top-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Porquê Escolher a <span className="text-red-500">Inpulse</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Com mais de 15 anos de experiência, somos a escolha certa para as suas necessidades técnicas.
              </p>

              <div className="space-y-4">
                {[
                  'Equipamentos e ferramentas de última geração',
                  'Equipa técnica certificada e experiente',
                  'Prazos de entrega garantidos',
                  'Suporte pós-venda contínuo',
                  'Orçamentos transparentes sem surpresas',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-red-500 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-background rounded-xl p-6 shadow-2xl border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Avaliação Clientes</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Animated Background */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3,
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Cog className="w-16 h-16" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Precisa de Serviços Técnicos?</h2>
            <p className="text-lg mb-8 text-white/80">
              Contacte-nos para um orçamento gratuito e sem compromisso!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full text-red-600 font-semibold shadow-xl">
                Pedir Orçamento
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

export default Services;
