import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gavel, Zap, Sparkles } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight uppercase">
              {t('home.slogan')}
            </h1>
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-sm uppercase"
              >
                {t('home.exploreServices')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200" 
                alt="Luxury Car Transport" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <Card className="bg-card hover:shadow-xl transition-all duration-300 cursor-pointer p-12 text-center border-0 rounded-sm">
                  <Gavel className="h-16 w-16 mx-auto mb-6 text-card-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-card-foreground uppercase tracking-wide">
                    {t('services.globalSourcingTitle')}
                  </h3>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <Card className="bg-card hover:shadow-xl transition-all duration-300 cursor-pointer p-12 text-center border-0 rounded-sm">
                  <Zap className="h-16 w-16 mx-auto mb-6 text-card-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-card-foreground uppercase tracking-wide">
                    {t('services.evTitle')}
                  </h3>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <Card className="bg-card hover:shadow-xl transition-all duration-300 cursor-pointer p-12 text-center border-0 rounded-sm">
                  <Sparkles className="h-16 w-16 mx-auto mb-6 text-card-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-card-foreground uppercase tracking-wide">
                    {t('services.perfectionInDetailingTitle')}
                  </h3>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
