import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import galleryDetailing1 from '@/assets/gallery-detailing-1.jpg';
import galleryCeramic1 from '@/assets/gallery-ceramic-1.jpg';
import galleryRepair1 from '@/assets/gallery-repair-1.jpg';

export default function Gallery() {
  const { t } = useTranslation();
  const { category } = useParams();

  const categories = ['detailing', 'repair'];

  // Gallery images with real images generated
  const galleryImages = {
    detailing: [
      galleryDetailing1,
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    repair: [
      galleryRepair1,
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
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

          <Tabs defaultValue={category || 'auction'} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {t(`gallery.${cat}`)}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages[cat as keyof typeof galleryImages].map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-lg aspect-video bg-muted cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${cat} ${index + 1}`}
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
    </div>
  );
}
