import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-car.png';

export default function Home() {
  const { t } = useTranslation();

  const services = [
    { 
      icon: Wrench, 
      title: t('services.repairTitle'), 
      desc: t('services.repairDesc'),
      link: '/services#top'
    },
    { 
      icon: Sparkles, 
      title: t('services.premiumCareTitle'), 
      desc: t('services.premiumCareDesc'),
      link: '/services#detailing'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="w-full px-4 grid md:grid-cols-2 gap-4 md:gap-12 items-center py-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto text-center"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 text-foreground leading-tight uppercase">
              {t('home.slogan')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end -mr-0 md:-mr-8"
          >
            <div className="relative w-full md:w-[130%] aspect-video">
              <img 
                src={heroImage} 
                alt="ADM Auto Flow - Luxury Car Service" 
                className="w-full h-full object-contain object-center md:object-right"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer p-10 text-center border-0 rounded-sm h-full flex flex-col items-center justify-center min-h-[280px]">
                    <service.icon className="h-20 w-20 mx-auto mb-6 text-card-foreground" strokeWidth={1.2} />
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-card-foreground/70 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}