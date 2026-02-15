import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:7285008522"
      onClick={() => {
        const w = window as any;
        if (typeof w.gtag === 'function') {
          w.gtag('event', 'conversion', { 'send_to': 'AW-17929439617/k8YbCPjOrPIbEIGTbuVC' });
        }
      }}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  );
};
