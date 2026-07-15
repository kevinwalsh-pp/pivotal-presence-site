import { useEffect, useRef, useState } from 'react';
import heroImg from '../../../../attached_assets/hero.jpg';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight text-foreground">
            Pivotal Presence
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90 mb-12 max-w-3xl mx-auto"
            style={{ transitionDelay: '0.2s' }}
          >
            Executive coaching and workplace mediation for leaders navigating constant change
          </p>
          <div
            className="transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <a
              href="https://calendly.com/kevin-walsh-pivotalpresence/pivotal_conversation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-medium rounded transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
