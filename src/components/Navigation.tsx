import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo-transparent.png';

export default function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-2 bg-secondary/30 rounded-md p-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          i18n.language === 'es' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          i18n.language === 'ru' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage('uk')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          i18n.language === 'uk' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        UK
      </button>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220_15%_25%/0.8)] backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ADM Auto Flow" className="h-16 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              {t('nav.services')}
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              {t('nav.gallery')}
            </Link>
            <Link to="/promotions" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              {t('nav.promotions')}
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              {t('nav.contacts')}
            </Link>

            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-foreground hover:text-primary transition-colors">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  {t('nav.services')}
                </Link>
                <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  {t('nav.gallery')}
                </Link>
                <Link to="/promotions" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  {t('nav.promotions')}
                </Link>
                <Link to="/contacts" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  {t('nav.contacts')}
                </Link>
                <div className="pt-4 border-t border-border">
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
