import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle = ({ className }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <Button
        variant={language === 'da' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('da')}
        className={`text-sm font-medium min-w-[40px] transition-all ${
          language === 'da' 
            ? 'bg-primary text-primary-foreground shadow-sm' 
            : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
        }`}
      >
        DA
      </Button>
      <span className="text-gray-400">/</span>
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`text-sm font-medium min-w-[40px] transition-all ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground shadow-sm' 
            : 'text-gray-700 hover:bg-red-100 hover:text-red-600'
        }`}
      >
        EN
      </Button>
    </div>
  );
};