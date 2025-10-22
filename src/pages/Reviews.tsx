import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function Reviews() {
  const { t } = useTranslation();

  // Sample reviews - in production, these would come from a database
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Excellent service! My car looks brand new after the ceramic coating. Highly recommended!',
      date: '2024-03-15',
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      comment: 'Professional team and great attention to detail. The detailing service exceeded my expectations.',
      date: '2024-03-10',
    },
    {
      name: 'David Chen',
      rating: 5,
      comment: 'They helped me purchase a car from a US auction. Everything went smoothly and professionally.',
      date: '2024-03-05',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('reviews.title')}</h1>
          <div className="w-24 h-1 gradient-accent rounded-full mb-8"></div>

          {reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-glow transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <Avatar>
                          <AvatarFallback className="gradient-hero text-white">
                            {review.name.split(' ').map((n) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{review.name}</h3>
                          <div className="flex items-center space-x-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'fill-accent text-accent'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-lg text-muted-foreground">{t('reviews.noReviews')}</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
