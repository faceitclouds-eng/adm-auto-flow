import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Menu, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo-transparent.png';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ru', label: 'RU' },
  { code: 'uk', label: 'UK' },
];

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide ${
      isActive ? 'text-primary' : ''
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/75 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 max-w-full">
        {/* Row 1: Logo + Nav Links + Language */}
        <div className="flex items-center justify-between h-14">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="ADM Auto Flow" className="h-12 w-auto object-contain" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
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

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {currentLang.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-md shadow-lg z-[60] min-w-[80px] py-1">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
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
                <div className="pt-4 border-t border-border space-y-2">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); handleLinkClick(); }}
                      className={`block w-full text-left px-3 py-2 text-sm font-medium rounded transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary text-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <a
                  href="tel:+17285008522"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-5 py-3 rounded transition-colors uppercase tracking-wide"
                >
                  <Phone className="h-4 w-4" />
                  {t('hero.callNow')}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Row 2: Phone number + Call Now button (desktop only) */}
        <div className="hidden md:flex items-center justify-end gap-4 pb-2">
          <a href="tel:+17285008522" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            +1 (728) 500-8522
          </a>
          <a
            href="tel:+17285008522"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-5 py-2 rounded transition-colors uppercase tracking-wide"
          >
            {t('hero.callNow')}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
