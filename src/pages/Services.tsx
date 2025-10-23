import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gavel, Wrench, Sparkles, Droplets, Zap, Shield, Paintbrush } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { 
      icon: Gavel, 
      title: t('services.globalSourcingTitle'), 
      desc: t('services.auctionDesc'),
      link: '/services/auction'
    },
    { 
      icon: Wrench, 
      title: t('services.repairTitle'), 
      desc: t('services.repairDesc'),
      link: '/services/repair'
    },
    { 
      icon: Sparkles, 
      title: t('services.detailingTitle'), 
      desc: t('services.detailingDesc'),
      link: '/services/detailing'
    },
    { 
      icon: Droplets, 
      title: t('services.cleaningTitle'), 
      desc: t('services.cleaningDesc'),
      link: '/services/cleaning'
    },
    { 
      icon: Zap, 
      title: t('services.evTitle'), 
      desc: t('services.evDesc'),
      link: '/services/ev'
    },
    { 
      icon: Paintbrush, 
      title: t('services.polishingTitle'), 
      desc: t('services.polishingDesc'),
      link: '/services/polishing'
    },
    { 
      icon: Shield, 
      title: t('services.ceramicTitle'), 
      desc: t('services.ceramicDesc'),
      link: '/services/ceramic'
    },
  ];

  return (
    <div className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            {t('nav.services')}
          </h1>
          <div className="w-32 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
    </div>
  );
}
