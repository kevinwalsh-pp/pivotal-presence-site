import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "I highly recommend Kevin for his remarkable ability to drive leadership growth through insightful guidance and strategic advice. Kevin's tailored coaching approach has significantly enhanced my leadership skills and overall effectiveness.",
    author: "Sameer Girn",
    role: "Director"
  },
  {
    quote: "Kevin has an outstanding talent in fostering growth and transformation. A perceptive listener and seasoned expert in leadership development, he quickly grasps complex situational dynamics and tailors his guidance accordingly.",
    author: "Derek Johnson",
    role: "Senior Vice President"
  },
  {
    quote: "Kevin's guidance helped me not only refine my leadership skills but also gain more confidence in my decision-making. Kevin is genuinely invested in a person's success and brings a perfect blend of empathy, wisdom, and strategy to every conversation.",
    author: "Colin Murphy",
    role: "Vice President"
  },
  {
    quote: "Working with Kevin gave me the clarity and support to take the necessary steps. He asked thoughtful questions and used processes that helped me understand what was holding me back and the steps to move forward.",
    author: "Andrea O'Callaghan",
    role: "Business Owner"
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            What Leaders Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="bg-background p-8 md:p-10 rounded-sm shadow-lg h-full flex flex-col">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
