import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo-transparent.png';

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'ru', name: 'Русский' },
    { code: 'uk', name: 'Українська' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="ADM Auto Flow" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost">{t('nav.home')}</Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  {t('nav.services')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/services/auction">{t('services.auctionTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/repair">{t('services.repairTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/detailing">{t('services.detailingTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/cleaning">{t('services.cleaningTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/ev">{t('services.evTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/polishing">{t('services.polishingTitle')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/ceramic">{t('services.ceramicTitle')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  {t('nav.gallery')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/gallery/auction">{t('gallery.auction')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery/detailing">{t('gallery.detailing')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery/repair">{t('gallery.repair')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery/ceramic">{t('gallery.ceramic')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/materials">
              <Button variant="ghost">{t('nav.materials')}</Button>
            </Link>

            <Link to="/promotions">
              <Button variant="ghost">{t('nav.promotions')}</Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  {t('nav.reviews')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/reviews/submit">{t('nav.submitReview')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/reviews">{t('nav.viewReviews')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contacts">
              <Button variant="ghost">{t('nav.contacts')}</Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? 'bg-accent' : ''}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.home')}
              </Button>
            </Link>
            <div className="pl-4 space-y-1">
              <div className="text-sm font-medium text-muted-foreground">{t('nav.services')}</div>
              <Link to="/services/auction" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  {t('services.auctionTitle')}
                </Button>
              </Link>
              <Link to="/services/repair" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  {t('services.repairTitle')}
                </Button>
              </Link>
              <Link to="/services/detailing" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  {t('services.detailingTitle')}
                </Button>
              </Link>
            </div>
            <Link to="/materials" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.materials')}
              </Button>
            </Link>
            <Link to="/promotions" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.promotions')}
              </Button>
            </Link>
            <Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.reviews')}
              </Button>
            </Link>
            <Link to="/contacts" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.contacts')}
              </Button>
            </Link>
            <div className="pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Globe className="mr-2 h-4 w-4" />
                    {languages.find((l) => l.code === i18n.language)?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-popover">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
