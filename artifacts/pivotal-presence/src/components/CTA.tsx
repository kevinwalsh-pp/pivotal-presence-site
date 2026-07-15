import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-8">
            Ready to find your footing?
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 opacity-90 max-w-2xl mx-auto">
            Let's discuss where you are and how we can work together to navigate the transition ahead.
          </p>
          
          <a
            href="https://calendly.com/kevin-walsh-pivotalpresence/pivotal_conversation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background text-foreground hover:bg-background/90 px-10 py-4 text-lg font-medium rounded transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
