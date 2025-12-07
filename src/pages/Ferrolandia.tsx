import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hammer, Heart, Star, Gift, Palette, ArrowRight, Phone, Sparkles, Award, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Ferrolandia: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const products = [
    {
      title: 'Esculturas Decorativas',
      description: 'Peças únicas em metal para decoração de interiores e exteriores',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop'
    },
    {
      title: 'Móveis Artesanais',
      description: 'Mesas, cadeiras e estruturas em ferro forjado artesanal',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop'
    },
    {
      title: 'Brinquedos de Metal',
      description: 'Réplicas de veículos, animais e objetos em miniatura',
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&auto=format&fit=crop'
    },
    {
      title: 'Arte Personalizada',
      description: 'Criações exclusivas sob encomenda para o seu espaço',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop'
    },
  ];

  const values = [
    { icon: Heart, title: 'Feito com Amor', desc: 'Cada peça é criada com paixão e dedicação' },
    { icon: Hammer, title: '100% Artesanal', desc: 'Trabalho manual de mestres ferreiros' },
    { icon: Star, title: 'Peças Únicas', desc: 'Nunca encontrará duas iguais' },
    { icon: Award, title: 'Qualidade Premium', desc: 'Materiais duráveis e acabamentos perfeitos' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&auto=format&fit=crop',
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
            alt="Ferrolandia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Animated Sparks */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -50 - Math.random() * 50],
              x: [(Math.random() - 0.5) * 60],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Sparkles className="text-red-500" size={10 + Math.random() * 10} />
          </motion.div>
        ))}

        {/* Decorative Hammer */}
        <motion.div
          className="absolute right-10 top-1/3 text-red-500/20"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Hammer size={150} />
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
              <Hammer className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-white">Ferrolândia by Inpulse</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Arte em
              <br />
              <motion.span 
                className="text-red-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(239,68,68,0.5)', '0 0 50px rgba(239,68,68,0.9)', '0 0 20px rgba(239,68,68,0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ferro & Metal
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Artesanato de excelência em ferro e metal. Esculturas, móveis e brinquedos 
              únicos feitos à mão com paixão e tradição.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full group bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
                <Gift className="mr-2 h-5 w-5" />
                Ver Catálogo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <Palette className="mr-2 h-5 w-5" />
                Encomenda Personalizada
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              {[
                { value: '500+', label: 'Peças Criadas' },
                { value: '20+', label: 'Anos de Tradição' },
                { value: '100%', label: 'Artesanal' },
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

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-muted/30 rounded-2xl p-6 text-center border border-border hover:border-red-500/50 transition-all"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 mx-auto mb-4 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="font-semibold mb-1">{value.title}</h3>
                <p className="text-xs text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              As Nossas <span className="text-red-500">Criações</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada peça conta uma história, cada detalhe é trabalhado com mestria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, i) => (
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
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="text-red-500" size={24} />
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    <motion.div 
                      className="mt-4 flex items-center text-red-500 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Ver coleção <ArrowRight className="ml-2" size={16} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <motion.div 
          className="absolute -left-40 top-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
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
                A Tradição do <span className="text-red-500">Ferro Forjado</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                A Ferrolândia nasceu da paixão pela arte do ferro. Há mais de 20 anos, 
                transformamos metal bruto em obras de arte que decoram lares e espaços 
                por todo o país.
              </p>
              <p className="text-muted-foreground mb-8">
                Cada peça é única, trabalhada à mão por mestres artesãos que dominam 
                técnicas ancestrais de forja e soldadura. Da ideia ao produto final, 
                garantimos qualidade e originalidade.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: '50+', label: 'Artesãos' },
                  { icon: Package, value: '1000+', label: 'Encomendas' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background rounded-xl p-4 border flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
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
                  alt="Artisan"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-2xl border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="text-red-500" size={40} />
                  </motion.div>
                  <div>
                    <div className="text-lg font-bold">Qualidade</div>
                    <div className="text-sm text-muted-foreground">Certificada</div>
                  </div>
                </div>
              </motion.div>
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
              Galeria de <span className="text-red-500">Trabalhos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 || i === 5 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white font-medium flex items-center gap-2"
                  >
                    <Heart size={18} /> Ver detalhes
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-muted/50 rounded-3xl p-8 md:p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Palette className="text-red-500 mb-4" size={48} />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Encomendas <span className="text-red-500">Personalizadas</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tem uma ideia especial em mente? Os nossos artesãos podem criar 
                    peças exclusivas de acordo com o seu projeto.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Esculturas personalizadas', 'Mobiliário sob medida', 'Presentes únicos', 'Decoração empresarial'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Star className="text-red-500 flex-shrink-0" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="rounded-full bg-red-600 hover:bg-red-700">
                    Fazer Encomenda
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop"
                  alt="Custom work"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        
        {/* Floating Sparkles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 8}%`,
              top: `${30 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Sparkles size={16} className="text-white/30" />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Hammer className="w-16 h-16" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dê Vida à Sua Ideia!</h2>
            <p className="text-lg mb-8 text-white/80">
              Visite o nosso atelier ou contacte-nos para conhecer as nossas criações.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full text-red-600 font-semibold shadow-xl">
                Visitar Atelier
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

export default Ferrolandia;
