import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contacts() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contacts.address'),
      content: '5533 N Military Trl, Boca Raton, FL 33496',
    },
    {
      icon: Phone,
      title: t('contacts.phone'),
      content: '(728) 500-8522',
    },
    {
      icon: Mail,
      title: t('contacts.email'),
      content: 'admautoflow@gmail.com',
    },
    {
      icon: Clock,
      title: t('contacts.hours'),
      content: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM\nSun: Closed',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contacts.title')}</h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg gradient-hero">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <span>{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('contacts.findUs')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5!2d-80.0929!3d26.3982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e0e0f0f0f0f%3A0x0!2s5533%20N%20Military%20Trl%2C%20Boca%20Raton%2C%20FL%2033496!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ADM Auto Flow Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
