import { useEffect, useRef, useState } from 'react';

export default function Services() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-foreground">
            How I Work With You
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Two distinct services, both grounded in the same principle: building the human skills to lead through complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Executive Coaching */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="h-full">
              <div className="mb-6">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                  Executive Coaching
                </h3>
                <div className="w-16 h-1 bg-primary"></div>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                For senior leaders navigating the constant churn of organizational change, team dynamics, and personal growth.
              </p>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Leadership growth and executive presence</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Managing change and uncertainty</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Delegation and team performance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Conflict resolution and difficult conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Career transitions and strategic direction</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workplace Mediation */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="h-full">
              <div className="mb-6">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                  Workplace Mediation
                </h3>
                <div className="w-16 h-1 bg-primary"></div>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                When workplace disputes risk escalation, mediation offers a path to resolution that preserves relationships and avoids litigation.
              </p>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Resolving interpersonal workplace conflicts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Uncovering underlying interests beyond positions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Moving parties toward mutual resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Preventing escalation to formal processes</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Restoring working relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
