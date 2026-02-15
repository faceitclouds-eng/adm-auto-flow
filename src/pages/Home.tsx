import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Sparkles, Phone, MessageCircle } from 'lucide-react';
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
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden pt-16 md:pt-20">
        <div className="w-full px-4 md:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight uppercase">
              {t('hero.headline')}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase">
              {t('hero.subheadline')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('hero.features')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+17285008522"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm md:text-base px-6 py-3 rounded-full transition-colors uppercase tracking-wide"
              >
                <Phone className="h-5 w-5" />
                {t('hero.callNow')}
              </a>
              <a
                href="https://wa.me/17285008522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-sm md:text-base px-6 py-3 rounded-full border border-border transition-colors uppercase tracking-wide"
              >
                <MessageCircle className="h-5 w-5" />
                {t('hero.whatsapp')}
              </a>
            </div>

            {/* Serving Areas */}
            <p className="text-sm text-muted-foreground pt-2">
              <span className="text-foreground font-semibold">{t('hero.serving')}</span>{' '}
              {t('hero.servingAreas')}
            </p>
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

      {/* Serving Areas Bar */}
      <section className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">{t('hero.serving')}</span>{' '}
            {t('hero.servingAreas')}
          </p>
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
