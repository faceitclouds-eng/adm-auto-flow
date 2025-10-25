import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { t } = useTranslation();
  const { category, service } = useParams();

  const serviceName = service?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4">
        <Link
          to={`/services/${category}`}
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
            {serviceName}
          </h1>
          <div className="w-32 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card p-12 border-0 rounded-sm">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-card-foreground uppercase mb-4">
                Описание услуги
              </h2>
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                Подробная информация о услуге "{serviceName}" будет размещена здесь.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-card-foreground uppercase mb-4">
                  Что входит в услугу:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-card-foreground/80">
                  <li>Детальная консультация специалиста</li>
                  <li>Диагностика и оценка состояния</li>
                  <li>Выполнение работ профессиональным оборудованием</li>
                  <li>Гарантия на выполненные работы</li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-card-foreground uppercase mb-4">
                  Свяжитесь с нами
                </h3>
                <p className="text-card-foreground/80">
                  Для получения подробной информации и записи на услугу, пожалуйста, свяжитесь с нами.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
