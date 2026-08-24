import { useEffect, useState } from 'react';
import logo from '../../../../attached_assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 font-serif text-2xl font-semibold tracking-wide text-foreground">
          <img src={logo} alt="" className="w-8 h-8 object-contain" />
          <span>Pivotal Presence</span>
        </a>
        
        <a
          href="https://calendly.com/kevin-walsh-pivotalpresence/pivotal_conversation"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium transition-all duration-300 ${
            isScrolled 
              ? 'bg-primary text-primary-foreground px-5 py-2.5 rounded hover:bg-primary/90' 
              : 'text-foreground border-b border-foreground/30 hover:border-foreground pb-1'
          }`}
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
