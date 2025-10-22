import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();
  const { service } = useParams();

  const serviceDetails: Record<string, { features: string[]; description: string }> = {
    auction: {
      description: t('services.auctionDesc'),
      features: [
        'Professional vehicle inspection',
        'Bid management and strategy',
        'Complete documentation support',
        'Secure payment processing',
        'Delivery coordination',
      ],
    },
    repair: {
      description: t('services.repairDesc'),
      features: [
        'Comprehensive diagnostics',
        'Engine and transmission repair',
        'Brake and suspension systems',
        'Electrical system repair',
        'Quality parts guarantee',
      ],
    },
    detailing: {
      description: t('services.detailingDesc'),
      features: [
        'Exterior wash and wax',
        'Paint correction',
        'Interior deep cleaning',
        'Leather conditioning',
        'Engine bay cleaning',
      ],
    },
    cleaning: {
      description: t('services.cleaningDesc'),
      features: [
        'Steam cleaning',
        'Stain removal',
        'Odor elimination',
        'Upholstery protection',
        'Pet hair removal',
      ],
    },
    ev: {
      description: t('services.evDesc'),
      features: [
        'Battery health check',
        'Charging system diagnostics',
        'Software updates',
        'Cooling system maintenance',
        'High-voltage safety checks',
      ],
    },
    polishing: {
      description: t('services.polishingDesc'),
      features: [
        'Multi-stage polishing',
        'Scratch removal',
        'Swirl mark correction',
        'Oxidation removal',
        'Shine enhancement',
      ],
    },
    ceramic: {
      description: t('services.ceramicDesc'),
      features: [
        'Premium ceramic coating',
        'UV protection',
        'Hydrophobic properties',
        '3-5 year durability',
        'Easy maintenance',
      ],
    },
  };

  const currentService = service || 'auction';
  const details = serviceDetails[currentService];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t(`services.${currentService}Title`)}
          </h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">{details.description}</p>
                <div className="space-y-3">
                  {details.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-hero text-white">
              <CardHeader>
                <CardTitle className="text-white">Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Ready to experience premium service? Contact us today for a consultation.
                </p>
                <Link to="/contacts">
                  <Button className="gradient-accent w-full text-white hover:shadow-accent transition-all">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
