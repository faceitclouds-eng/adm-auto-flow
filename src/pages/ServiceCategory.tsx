import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function ServiceCategory() {
  const { t } = useTranslation();
  const { category } = useParams();

  const serviceDetails: Record<string, { title: string; services: string[] }> = {
    'global-sourcing': {
      title: t('services.globalSourcingTitle'),
      services: [
        t('services.auctionPurchase'),
        t('services.vehicleInspection'),
        t('services.shippingArrangement'),
        t('services.customsClearance'),
      ],
    },
    'repair': {
      title: t('services.repairTitle'),
      services: [
        t('services.bodyRepair'),
        t('services.engineRepair'),
        t('services.chassisRepair'),
        t('services.electricalRepair'),
        t('services.diagnostics'),
      ],
    },
    'exterior': {
      title: t('services.exteriorTitle'),
      services: [
        t('services.detailing'),
        t('services.interiorCleaning'),
        t('services.polishing'),
        t('services.waxing'),
        t('services.paintCorrection'),
      ],
    },
    'ceramic': {
      title: t('services.ceramicTitle'),
      services: [
        t('services.ceramicCoating'),
        t('services.paintProtection'),
        t('services.nanoCoating'),
        t('services.glassCoating'),
      ],
    },
    'ev': {
      title: t('services.evTitle'),
      services: [
        t('services.evDiagnostics'),
        t('services.batteryService'),
        t('services.chargingSystem'),
        t('services.electricMotor'),
      ],
    },
  };

  const currentService = category ? serviceDetails[category] : null;

  if (!currentService) {
    return (
      <div className="min-h-screen py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('common.notFound')}</h1>
          <Link to="/services" className="text-primary hover:underline">
            {t('common.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          {t('common.backToServices')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            {currentService.title}
          </h1>
          <div className="w-32 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentService.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card hover:shadow-xl transition-all duration-300 p-8 border-0 rounded-sm">
                <h3 className="text-xl font-bold text-card-foreground uppercase">
                  {service}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
