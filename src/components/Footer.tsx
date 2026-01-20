import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              ADM Auto Flow
            </h3>
            <p className="text-muted-foreground">{t('hero.slogan')}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('contacts.title')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('contacts.phone')}: (728) 500-8522</p>
              <p>{t('contacts.email')}: admautoflow@gmail.com</p>
              <p>{t('contacts.address')}: 5533 N Military Trl, Boca Raton, FL 33496</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} ADM Auto Flow. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};
