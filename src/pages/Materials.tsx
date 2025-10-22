import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award } from 'lucide-react';

export default function Materials() {
  const { t } = useTranslation();

  const materials = [
    {
      category: 'Detailing Products',
      items: ['Meguiar\'s Professional Line', 'Chemical Guys', '3M Automotive', 'Mothers Polish'],
    },
    {
      category: 'Ceramic Coatings',
      items: ['Gtechniq Crystal Serum', 'CarPro Cquartz', 'Ceramic Pro 9H', 'IGL Coatings'],
    },
    {
      category: 'Cleaning Supplies',
      items: ['Karcher Professional', 'Tornador Cleaning Tools', 'Microfiber Cloths', 'Steam Cleaners'],
    },
    {
      category: 'Paint Protection',
      items: ['XPEL Paint Film', '3M Scotchgard', 'SunTek PPF', 'Premium Waxes & Sealants'],
    },
    {
      category: 'Tools & Equipment',
      items: ['FLEX Polishers', 'Rupes Tools', 'Professional Extractors', 'LED Inspection Lights'],
    },
    {
      category: 'EV Specialized',
      items: ['High-Voltage Tools', 'Battery Testing Equipment', 'EV-Safe Cleaning Products', 'Diagnostic Software'],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('materials.title')}</h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          <Card className="mb-12 gradient-hero text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Award className="mr-3 h-6 w-6" />
                {t('materials.quality')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{t('materials.qualityDesc')}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{material.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {material.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
