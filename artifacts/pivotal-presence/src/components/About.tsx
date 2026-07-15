import { useEffect, useRef, useState } from 'react';
import kevinImg from '../../../../attached_assets/kevin-headshot.jpg';

export default function About() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Image */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src={kevinImg}
                alt="Kevin Walsh"
                className="w-full rounded-sm shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`md:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-foreground">
              About Kevin Walsh
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                I spent 25 years in the tech industry leading teams through major transitions—telecoms, financial services, technology companies navigating constant disruption. I know what it feels like when the ground shifts beneath your leadership.
              </p>
              
              <p>
                Now I work with senior leaders to build the human skills that make change navigable: clarity in complexity, confidence in uncertainty, and the ability to turn conflict into resolution rather than escalation.
              </p>
              
              <p>
                My approach is systemic—your leadership doesn't happen in a vacuum. It's shaped by your team, your organization, your industry, and the wider forces at play. We work with that whole system, not just isolated behaviors.
              </p>
              
              <p>
                I also bring Gestalt techniques into the work: building self-awareness, presence, and the capacity to notice what's happening in real-time, not just reflect on it later.
              </p>

              <div className="pt-8 border-t border-border mt-8">
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Credentials</h3>
                <ul className="space-y-2 text-sm md:text-base text-foreground/70">
                  <li>Certified EMCC Coach Practitioner</li>
                  <li>Certified Mediator (Mediators' Institute of Ireland)</li>
                  <li>Diploma in Business & Executive Coaching (UCD Smurfit)</li>
                  <li>Advanced Diploma in Mediation (King's Inns School of Law)</li>
                  <li>Professional Diploma in Leadership & Management (UCD)</li>
                  <li>PhD Chemistry, B.Sc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
