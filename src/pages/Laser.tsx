import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Target, Ruler, Scissors, Layers, ArrowRight, Phone, CheckCircle2, Sparkles, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Laser: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const services = [
    {
      icon: Scissors,
      title: 'Corte a Laser',
      description: 'Corte de precisão para metais, acrílicos, madeira e outros materiais',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop'
    },
    {
      icon: Target,
      title: 'Gravação a Laser',
      description: 'Gravações detalhadas em diversos materiais com alta definição',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop'
    },
    {
      icon: Ruler,
      title: 'Corte CNC',
      description: 'Corte numérico computadorizado para peças técnicas precisas',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop'
    },
    {
      icon: Layers,
      title: 'Prototipagem',
      description: 'Criação rápida de protótipos e peças personalizadas',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop'
    },
  ];

  const materials = [
    { name: 'Aço Inoxidável', thickness: 'até 20mm' },
    { name: 'Alumínio', thickness: 'até 15mm' },
    { name: 'Acrílico', thickness: 'até 25mm' },
    { name: 'MDF/Madeira', thickness: 'até 20mm' },
    { name: 'Couro', thickness: 'até 5mm' },
    { name: 'Tecidos', thickness: 'diversos' },
  ];

  const specifications = [
    { label: 'Potência Máxima', value: '6000W' },
    { label: 'Área de Corte', value: '3000x1500mm' },
    { label: 'Precisão', value: '±0.1mm' },
    { label: 'Velocidade', value: '100m/min' },
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop"
            alt="Laser"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Laser Beam */}
        <motion.div
          className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          style={{ originX: 0 }}
        />
        <motion.div
          className="absolute left-0 top-1/3 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 0.6, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
          style={{ originX: 0 }}
        />

        {/* Sparks Effect */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${40 + Math.random() * 20}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -30 - Math.random() * 30],
              x: [0, (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3,
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
              <Zap className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-white">Inpulse Laser</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Corte a Laser
              <br />
              <motion.span 
                className="text-red-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 60px rgba(239,68,68,1)', '0 0 20px rgba(239,68,68,0.5)']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Alta Precisão
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Tecnologia de ponta para cortes e gravações em diversos materiais. 
              Precisão milimétrica para os seus projetos.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full group bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
                <Phone className="mr-2 h-5 w-5" />
                Pedir Orçamento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                Ver Portfolio
              </Button>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specifications.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
                >
                  <div className="text-2xl font-bold text-red-500">{spec.value}</div>
                  <div className="text-xs text-white/60">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Soluções completas em corte e gravação a laser
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <motion.div 
                      className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-white" size={28} />
                    </motion.div>

                    {/* Laser effect on hover */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
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
              Materiais <span className="text-red-500">Compatíveis</span>
            </h2>
            <p className="text-muted-foreground">Trabalhamos com uma ampla variedade de materiais</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {materials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-muted/50 rounded-xl p-6 text-center border border-border hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="font-semibold mb-1">{material.name}</div>
                <div className="text-xs text-muted-foreground">{material.thickness}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Laser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop"
                  alt="Laser precision"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent" />
              </div>

              {/* Animated precision indicator */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-red-500 rounded-full"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-red-500 rounded-full"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Porquê <span className="text-red-500">Corte a Laser</span>?
              </h2>

              <div className="space-y-4">
                {[
                  { title: 'Precisão Extrema', desc: 'Tolerâncias de ±0.1mm para peças perfeitas' },
                  { title: 'Sem Contacto Mecânico', desc: 'Evita deformações e marcas no material' },
                  { title: 'Acabamento Superior', desc: 'Bordas limpas sem necessidade de retrabalho' },
                  { title: 'Versatilidade', desc: 'Corta desde metais pesados a tecidos finos' },
                  { title: 'Rapidez', desc: 'Produção em série com alta velocidade' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background border hover:border-red-500/50 transition-colors"
                  >
                    <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Os Nossos <span className="text-red-500">Trabalhos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&auto=format&fit=crop',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <img src={img} alt={`Work ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <Sparkles className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Laser lines animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-white/30 via-white/10 to-transparent"
            style={{
              left: 0,
              top: `${20 + i * 15}%`,
              width: '100%',
            }}
            animate={{
              opacity: [0, 0.5, 0],
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
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
              animate={{ 
                scale: [1, 1.2, 1],
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Zap className="w-16 h-16" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para o Seu Projeto?</h2>
            <p className="text-lg mb-8 text-white/80">
              Envie-nos os seus ficheiros e receba um orçamento em 24 horas!
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

export default Laser;
