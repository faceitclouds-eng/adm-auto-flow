import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tag, Calendar } from 'lucide-react';

export default function Promotions() {
  const { t } = useTranslation();

  const promotions = [
    {
      title: 'Spring Detailing Special',
      discount: '20% OFF',
      description: 'Get your car ready for spring! Professional detailing at a special price.',
      validUntil: 'March 31, 2025',
      badge: 'Limited Time',
    },
    {
      title: 'New Customer Bonus',
      discount: '15% OFF',
      description: 'First-time customers get 15% off any service package.',
      validUntil: 'Ongoing',
      badge: 'New Customer',
    },
    {
      title: 'Ceramic Coating Package',
      discount: 'Save $200',
      description: 'Premium ceramic coating with complimentary detailing service.',
      validUntil: 'April 15, 2025',
      badge: 'Best Value',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('promotions.title')}</h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          {promotions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <motion.div
                  key={promo.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 gradient-accent opacity-10 blur-3xl"></div>
                    <CardHeader>
                      <Badge className="w-fit mb-2 gradient-accent text-white">
                        {promo.badge}
                      </Badge>
                      <CardTitle className="text-2xl mb-2">{promo.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Tag className="h-5 w-5 text-accent" />
                        <span className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">
                          {promo.discount}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{promo.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        Valid until: {promo.validUntil}
                      </div>
                      <Link to="/contacts">
                        <Button className="w-full gradient-hero text-white">
                          Claim Offer
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-lg text-muted-foreground">{t('promotions.noPromotions')}</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
