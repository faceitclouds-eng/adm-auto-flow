import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wrench, 
  Zap, 
  Sparkles, 
  Car,
  AlertTriangle,
  Droplets,
  Battery,
  Gauge,
  CircleDot,
  Settings,
  Lightbulb,
  PaintBucket,
  Shield,
  Armchair,
  Scissors,
  Layers,
  Fuel,
  BatteryCharging
} from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  price: string;
}

interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export default function Services() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location]);

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'maintenance',
      icon: Wrench,
      title: t('services.categories.maintenance'),
      subtitle: t('services.categories.maintenanceDesc'),
      services: [
        {
          icon: Droplets,
          title: t('services.items.oilChange.title'),
          description: t('services.items.oilChange.desc'),
          includes: [
            t('services.items.oilChange.include1'),
            t('services.items.oilChange.include2'),
          ],
          price: '$50 - $120',
        },
        {
          icon: Gauge,
          title: t('services.items.diagnostics.title'),
          description: t('services.items.diagnostics.desc'),
          includes: [
            t('services.items.diagnostics.include1'),
            t('services.items.diagnostics.include2'),
            t('services.items.diagnostics.include3'),
          ],
          price: '$60 - $150',
        },
        {
          icon: Settings,
          title: t('services.items.airFilters.title'),
          description: t('services.items.airFilters.desc'),
          includes: [t('services.items.airFilters.include1')],
          price: t('services.from') + ' $30',
        },
        {
          icon: CircleDot,
          title: t('services.items.brakes.title'),
          description: t('services.items.brakes.desc'),
          includes: [
            t('services.items.brakes.include1'),
            t('services.items.brakes.include2'),
            t('services.items.brakes.include3'),
          ],
          price: '$80 - $200',
        },
        {
          icon: Car,
          title: t('services.items.suspension.title'),
          description: t('services.items.suspension.desc'),
          includes: [
            t('services.items.suspension.include1'),
            t('services.items.suspension.include2'),
          ],
          price: '$100 - $250',
        },
      ],
    },
    {
      id: 'electrical',
      icon: Zap,
      title: t('services.categories.electrical'),
      subtitle: t('services.categories.electricalDesc'),
      services: [
        {
          icon: Settings,
          title: t('services.items.generator.title'),
          description: t('services.items.generator.desc'),
          includes: [
            t('services.items.generator.include1'),
            t('services.items.generator.include2'),
            t('services.items.generator.include3'),
          ],
          price: '$120 - $350',
        },
        {
          icon: Battery,
          title: t('services.items.battery.title'),
          description: t('services.items.battery.desc'),
          includes: [
            t('services.items.battery.include1'),
            t('services.items.battery.include2'),
          ],
          price: '$80 - $180',
        },
        {
          icon: Zap,
          title: t('services.items.sparkPlugs.title'),
          description: t('services.items.sparkPlugs.desc'),
          includes: [
            t('services.items.sparkPlugs.include1'),
            t('services.items.sparkPlugs.include2'),
          ],
          price: '$80 - $180',
        },
      ],
    },
    {
      id: 'detailing',
      icon: Sparkles,
      title: t('services.categories.detailing'),
      subtitle: t('services.categories.detailingDesc'),
      services: [
        {
          icon: Lightbulb,
          title: t('services.items.headlights.title'),
          description: t('services.items.headlights.desc'),
          includes: [
            t('services.items.headlights.include1'),
            t('services.items.headlights.include2'),
            t('services.items.headlights.include3'),
          ],
          price: '$60 - $120',
        },
        {
          icon: PaintBucket,
          title: t('services.items.polishing.title'),
          description: t('services.items.polishing.desc'),
          includes: [
            t('services.items.polishing.include1'),
            t('services.items.polishing.include2'),
          ],
          price: '$150 - $400',
        },
        {
          icon: Shield,
          title: t('services.items.ceramic.title'),
          description: t('services.items.ceramic.desc'),
          includes: [
            t('services.items.ceramic.include1'),
            t('services.items.ceramic.include2'),
          ],
          price: '$300 - $750',
        },
      ],
    },
    {
      id: 'interior',
      icon: Armchair,
      title: t('services.categories.interior'),
      subtitle: t('services.categories.interiorDesc'),
      services: [
        {
          icon: Sparkles,
          title: t('services.items.interiorCleaning.title'),
          description: t('services.items.interiorCleaning.desc'),
          includes: [
            t('services.items.interiorCleaning.include1'),
            t('services.items.interiorCleaning.include2'),
            t('services.items.interiorCleaning.include3'),
          ],
          price: '$120 - $300',
        },
        {
          icon: Scissors,
          title: t('services.items.leather.title'),
          description: t('services.items.leather.desc'),
          includes: [
            t('services.items.leather.include1'),
            t('services.items.leather.include2'),
            t('services.items.leather.include3'),
          ],
          price: '$150 - $350',
        },
        {
          icon: Layers,
          title: t('services.items.disassembly.title'),
          description: t('services.items.disassembly.desc'),
          includes: [
            t('services.items.disassembly.include1'),
            t('services.items.disassembly.include2'),
            t('services.items.disassembly.include3'),
          ],
          price: '$50 - $350',
        },
      ],
    },
    {
      id: 'roadside',
      icon: AlertTriangle,
      title: t('services.categories.roadside'),
      subtitle: t('services.categories.roadsideDesc'),
      services: [
        {
          icon: Fuel,
          title: t('services.items.fuel.title'),
          description: t('services.items.fuel.desc'),
          includes: [t('services.items.fuel.include1')],
          price: '$60 - $120',
        },
        {
          icon: BatteryCharging,
          title: t('services.items.jumpStart.title'),
          description: t('services.items.jumpStart.desc'),
          includes: [
            t('services.items.jumpStart.include1'),
            t('services.items.jumpStart.include2'),
          ],
          price: '$50 - $100',
        },
      ],
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

        <div className="space-y-16">
          {serviceCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <category.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">{category.subtitle}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                  >
                    <Card className="bg-card hover:shadow-glow transition-all duration-300 p-6 border border-border/50 rounded-lg h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-card-foreground">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4 flex-1">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-border/30">
                        <p className="text-primary font-bold text-lg">
                          {service.price}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="bg-card p-8 border border-border/50 inline-block">
            <p className="text-lg text-card-foreground mb-2">
              {t('services.bookAppointment')}
            </p>
            <a 
              href="tel:7285008522" 
              className="text-2xl font-bold text-primary hover:underline"
            >
              (728) 500-8522
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
