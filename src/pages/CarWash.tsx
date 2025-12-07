import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Sparkles, Car, Shield, CheckCircle2, ArrowRight, Star, Clock, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CarWash: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const packages = [
    {
      icon: Droplets,
      name: 'Lavagem Básica',
      price: '15€',
      image: 'https://images.unsplash.com/photo-1605164599913-f5e494156f51?w=800&auto=format&fit=crop',
      features: ['Lavagem Exterior', 'Secagem Manual', 'Limpeza Vidros', 'Limpeza Jantes']
    },
    {
      icon: Sparkles,
      name: 'Lavagem Premium',
      price: '35€',
      popular: true,
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop',
      features: ['Tudo da Básica', 'Limpeza Interior', 'Aspiração Completa', 'Proteção Pintura', 'Cera Líquida']
    },
    {
      icon: Star,
      name: 'Detailing Completo',
      price: '80€',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&auto=format&fit=crop',
      features: ['Tudo da Premium', 'Polimento Profissional', 'Cera Carnaúba', 'Limpeza Motor', 'Hidratação Plásticos', 'Aromatização']
    },
  ];

  const processSteps = [
    { step: '01', title: 'Pré-Lavagem', desc: 'Remoção de sujidade pesada com espuma ativa' },
    { step: '02', title: 'Lavagem', desc: 'Limpeza profunda com produtos premium' },
    { step: '03', title: 'Enxaguamento', desc: 'Água purificada sem manchas' },
    { step: '04', title: 'Secagem', desc: 'Secagem manual com microfibra' },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero with Background Image */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img 
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&auto=format&fit=crop"
            alt="Car Wash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Animated Water Drops */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `-5%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
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
              <Car className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-white">Inpulse Car Wash</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              O Seu Carro
              <br />
              <motion.span 
                className="text-red-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 40px rgba(239,68,68,0.8)', '0 0 20px rgba(239,68,68,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Merece Brilhar
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Lavagem profissional com produtos premium e atenção aos detalhes. 
              Devolvemos o brilho original ao seu veículo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full group bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
                <Sparkles className="mr-2 h-5 w-5" />
                Agendar Lavagem
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                Ver Preços
              </Button>
            </div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: '500+', label: 'Carros/Mês' },
                { value: '98%', label: 'Satisfação' },
                { value: '5★', label: 'Avaliação' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada lavagem segue um processo meticuloso para garantir resultados perfeitos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Connecting Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-red-600/50 to-transparent" />
                )}
                
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-600/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages with Images */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Escolha o Seu Pacote</h2>
            <p className="text-muted-foreground">Serviços adaptados às suas necessidades</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Card className={`h-full relative overflow-hidden border-2 transition-all duration-500 ${
                  pkg.popular ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'hover:border-red-500/50 hover:shadow-xl'
                }`}>
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {pkg.popular && (
                      <motion.div 
                        className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ⭐ MAIS POPULAR
                      </motion.div>
                    )}
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <pkg.icon className="text-white" size={20} />
                        </div>
                        <span className="text-white font-semibold">{pkg.name}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-red-600">{pkg.price}</span>
                      <span className="text-muted-foreground">/serviço</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle2 className="text-red-600 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button className={`w-full rounded-full transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30' 
                        : 'hover:bg-red-600 hover:text-white'
                    }`}>
                      Escolher Pacote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Porquê Escolher-nos?</h2>
            <p className="text-muted-foreground">Qualidade e profissionalismo em cada detalhe</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: 'Produtos Premium', text: 'Só usamos produtos de marcas reconhecidas internacionalmente', color: 'from-red-500 to-red-700' },
              { icon: Sparkles, title: 'Acabamento Perfeito', text: 'Atenção meticulosa aos mínimos detalhes', color: 'from-red-600 to-red-800' },
              { icon: Clock, title: 'Rapidez', text: 'Serviço eficiente sem comprometer qualidade', color: 'from-red-500 to-red-700' },
              { icon: Shield, title: 'Garantia', text: 'Satisfação 100% garantida ou repetimos', color: 'from-red-600 to-red-800' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados Reais</h2>
            <p className="text-muted-foreground">Veja a transformação dos nossos clientes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format&fit=crop',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <img src={img} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Ver Detalhes</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Animated Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '-10%',
            }}
            animate={{
              y: [0, -500],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para Brilhar?</h2>
            <p className="text-lg mb-8 text-white/80">
              Agende já a sua lavagem e devolva o brilho original ao seu carro!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full text-red-600 font-semibold shadow-xl">
                <Zap className="mr-2" />
                Agendar Agora
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                Contactar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarWash;
