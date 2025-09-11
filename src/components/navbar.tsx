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
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <img 
              src="/lovable-uploads/2e69e9b4-8634-47be-92ca-4cc22f1b595e.png" 
              alt="defend Denmark logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-primary">defend Denmark</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/companies"
              className="text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
            >
              {t('nav.companies')}
            </Link>
            <Link 
              to="/researchers"
              className="text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
            >
              {t('nav.researchers')}
            </Link>
            <Link 
              to="/bug-bounty"
              className="text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
            >
              {t('nav.bugBounty')}
            </Link>
            <Link 
              to="/community-fund"
              className="text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
            >
              {t('nav.communityFund')}
            </Link>
            <Link 
              to="/about"
              className="text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
            >
              {t('nav.about')}
            </Link>
          </div>
        </div>

        {/* Desktop Language Toggle */}
        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/companies"
              className="block text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
              onClick={closeMenu}
            >
              {t('nav.companies')}
            </Link>
            <Link 
              to="/researchers"
              className="block text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
              onClick={closeMenu}
            >
              {t('nav.researchers')}
            </Link>
            <Link 
              to="/bug-bounty"
              className="block text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
              onClick={closeMenu}
            >
              {t('nav.bugBounty')}
            </Link>
            <Link 
              to="/community-fund"
              className="block text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
              onClick={closeMenu}
            >
              {t('nav.communityFund')}
            </Link>
            <Link 
              to="/about"
              className="block text-blue hover:text-primary transition-colors px-3 py-2 font-medium"
              onClick={closeMenu}
            >
              {t('nav.about')}
            </Link>
            
            {/* Mobile Language Toggle */}
            <div className="pt-4 border-t">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};