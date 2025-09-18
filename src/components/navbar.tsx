import { useState } from "react";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-background sticky top-0 z-50 shadow-md border-b">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <img 
            src="/site-uploads/2e69e9b4-8634-47be-92ca-4cc22f1b595e.png" 
            alt="defend Denmark logo" 
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-primary">defend Denmark</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-4">
            <Link 
              to="/companies"
              className="text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
            >
              {t('nav.companies')}
            </Link>
            <Link 
              to="/researchers"
              className="text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
            >
              {t('nav.researchers')}
            </Link>
            <Link 
              to="/bug-bounty"
              className="text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
            >
              {t('nav.bugBounty')}
            </Link>
            <Link 
              to="/community-fund"
              className="text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
            >
              {t('nav.communityFund')}
            </Link>
            <Link 
              to="/about"
              className="text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
            >
              {t('nav.about')}
            </Link>
          </div>
        </div>

        {/* Desktop Language Toggle */}
        <div className="hidden lg:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden ml-auto p-1"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            <Link 
              to="/companies"
              className="block text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
              onClick={closeMenu}
            >
              {t('nav.companies')}
            </Link>
            <Link 
              to="/researchers"
              className="block text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
              onClick={closeMenu}
            >
              {t('nav.researchers')}
            </Link>
            <Link 
              to="/bug-bounty"
              className="block text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
              onClick={closeMenu}
            >
              {t('nav.bugBounty')}
            </Link>
            <Link 
              to="/community-fund"
              className="block text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
              onClick={closeMenu}
            >
              {t('nav.communityFund')}
            </Link>
            <Link 
              to="/about"
              className="block text-blue hover:text-primary transition-colors px-2 py-1 font-medium text-sm"
              onClick={closeMenu}
            >
              {t('nav.about')}
            </Link>
            
            {/* Mobile Language Toggle */}
            <div className="pt-2 border-t">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};