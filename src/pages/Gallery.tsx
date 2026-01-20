import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

// Premium care images
import galleryPremium1 from '@/assets/gallery-premium-1.jpg';
import galleryPremium2 from '@/assets/gallery-premium-2.jpg';
import galleryPremium3 from '@/assets/gallery-premium-3.jpg';
import galleryPremium4 from '@/assets/gallery-premium-4.jpg';
import galleryPremium5 from '@/assets/gallery-premium-5.jpg';
import galleryPremium6 from '@/assets/gallery-premium-6.jpg';
import galleryPremium7 from '@/assets/gallery-premium-7.jpg';
import galleryPremium8 from '@/assets/gallery-premium-8.jpg';
import galleryPremium9 from '@/assets/gallery-premium-9.jpg';
import galleryPremium10 from '@/assets/gallery-premium-10.jpg';

// Repair images
import galleryRepair1 from '@/assets/gallery-repair-1.jpg';
import galleryRepair2 from '@/assets/gallery-repair-2.jpg';
import galleryRepair3 from '@/assets/gallery-repair-3.jpg';
import galleryRepair4 from '@/assets/gallery-repair-4.jpg';
import galleryRepair5 from '@/assets/gallery-repair-5.jpg';
import galleryRepair6 from '@/assets/gallery-repair-6.jpg';
import galleryRepair7 from '@/assets/gallery-repair-7.jpg';
import galleryRepair8 from '@/assets/gallery-repair-8.jpg';
import galleryRepair9 from '@/assets/gallery-repair-9.jpg';
import galleryRepair10 from '@/assets/gallery-repair-10.jpg';

export default function Gallery() {
  const { t } = useTranslation();
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'repair', label: t('gallery.repairMaintenance') },
    { id: 'detailing', label: t('gallery.premiumCare') },
  ];

  // Gallery images with real images
  const galleryImages = {
    repair: [
      galleryRepair1,
      galleryRepair2,
      galleryRepair3,
      galleryRepair4,
      galleryRepair5,
      galleryRepair6,
      galleryRepair7,
      galleryRepair8,
      galleryRepair9,
      galleryRepair10,
    ],
    detailing: [
      galleryPremium1,
      galleryPremium2,
      galleryPremium3,
      galleryPremium4,
      galleryPremium5,
      galleryPremium6,
      galleryPremium7,
      galleryPremium8,
      galleryPremium9,
      galleryPremium10,
    ],
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gallery.title')}</h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          <Tabs defaultValue={category || 'repair'} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages[cat.id as keyof typeof galleryImages].map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-lg aspect-video bg-muted cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${cat.label} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="font-semibold">{t('gallery.beforeAfter')}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
