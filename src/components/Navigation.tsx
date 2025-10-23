import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-transparent.png';

export default function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="ADM Auto Flow" className="h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.services')}
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.gallery')}
            </Link>
            <Link to="/materials" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.materials')}
            </Link>
            <Link to="/promotions" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.promotions')}
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.contacts')}
            </Link>

            <div className="flex items-center space-x-2 ml-4 bg-secondary/30 rounded-md p-1">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
