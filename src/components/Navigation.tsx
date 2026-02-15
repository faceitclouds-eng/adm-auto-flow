import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// ✅ CHANGE (optional): Link -> NavLink, чтобы можно было подсвечивать активный пункт меню
import { NavLink } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo-transparent.png';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // ✅ NEW (optional): единый класс для NavLink с подсветкой активного пункта
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-foreground hover:text-primary transition-colors font-medium text-lg ${
      isActive ? 'text-primary' : ''
    }`;

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/75 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-20">
          {/* ✅ CHANGE (optional): Link -> NavLink (логотип тоже будет работать так же) */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="ADM Auto Flow" className="h-16 w-auto object-contain" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/services" className={navLinkClass}>
              {t('nav.services')}
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              {t('nav.gallery')}
            </NavLink>
            <NavLink to="/promotions" className={navLinkClass}>
              {t('nav.promotions')}
            </NavLink>
            <NavLink to="/contacts" className={navLinkClass}>
              {t('nav.contacts')}
            </NavLink>

            <a
              href="tel:+17285008522"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-full transition-colors uppercase tracking-wide"
            >
              <Phone className="h-4 w-4" />
              {t('hero.callNow')}
            </a>

            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-foreground hover:text-primary transition-colors">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <NavLink to="/services" onClick={handleLinkClick} className={navLinkClass}>
                  {t('nav.services')}
                </NavLink>
                <NavLink to="/gallery" onClick={handleLinkClick} className={navLinkClass}>
                  {t('nav.gallery')}
                </NavLink>
                <NavLink to="/promotions" onClick={handleLinkClick} className={navLinkClass}>
                  {t('nav.promotions')}
                </NavLink>
                <NavLink to="/contacts" onClick={handleLinkClick} className={navLinkClass}>
                  {t('nav.contacts')}
                </NavLink>
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
