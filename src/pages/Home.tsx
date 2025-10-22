import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Car,
  Wrench,
  Sparkles,
  Droplets,
  Zap,
  Circle,
  Shield,
  ArrowRight,
} from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';

export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Car,
      title: t('services.auctionTitle'),
      desc: t('services.auctionDesc'),
      link: '/services/auction',
    },
    {
      icon: Wrench,
      title: t('services.repairTitle'),
      desc: t('services.repairDesc'),
      link: '/services/repair',
    },
    {
      icon: Sparkles,
      title: t('services.detailingTitle'),
      desc: t('services.detailingDesc'),
      link: '/services/detailing',
    },
    {
      icon: Droplets,
      title: t('services.cleaningTitle'),
      desc: t('services.cleaningDesc'),
      link: '/services/cleaning',
    },
    {
      icon: Zap,
      title: t('services.evTitle'),
      desc: t('services.evDesc'),
      link: '/services/ev',
    },
    {
      icon: Circle,
      title: t('services.polishingTitle'),
      desc: t('services.polishingDesc'),
      link: '/services/polishing',
    },
    {
      icon: Shield,
      title: t('services.ceramicTitle'),
      desc: t('services.ceramicDesc'),
      link: '/services/ceramic',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-32 md:py-48">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-4xl font-light text-white/90 mb-4">
                {t('hero.slogan')}
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services/auction">
                <Button
                  size="lg"
                  className="gradient-accent text-white font-semibold px-8 py-6 text-lg shadow-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Car Animation */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative max-w-4xl w-full"
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-accent opacity-30 blur-3xl rounded-full"></div>
                <img 
                  src={heroCarImage} 
                  alt="Luxury Sports Car" 
                  className="w-full h-auto relative z-10 rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-border/50">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-block p-3 rounded-lg gradient-hero">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Premium Auto Care?
            </h2>
            <Link to="/contacts">
              <Button
                size="lg"
                className="gradient-accent text-white font-semibold px-8 py-6 text-lg shadow-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {t('nav.contacts')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
