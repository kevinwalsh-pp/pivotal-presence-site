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
    quote: "Working with Kevin has been transformative — I've gotta say, it really hit home for me when he asked that one simple question about what I truly value as a leader. Rather than handing me answers, he helped me find them myself, step by step.\n\nI was standing at a major crossroads in my career and frankly, a bit lost. Kevin's coaching gave me the clarity, confidence, and motivation I needed to pick a direction and start moving. It wasn't magic — it was thoughtful, tough questions and practical next steps.",
    author: "Jack Chen",
    role: "Director"
  },
  {
    quote: "When I started working with Kevin, everything in the business ran through me. Every decision, every difficult conversation, every task that felt quicker to do myself. Several months later, the business has a new structure with defined functions and managers, a trusted colleague now carries half of the sales load I used to carry alone, and I've made and followed through on the hardest people decision I've had to make as an owner.\n\nKevin's coaching goes deeper than business structure, he helped me understand the patterns underneath why I was holding everything, and gave me practical ways to change them. He challenges you directly but you always know he's on your side.\n\nIf you're a business owner whose company can't run without you, I'd strongly recommend working with him.",
    author: "John Sherry",
    role: "Director & Owner"
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
                <div className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 flex-grow italic space-y-4">
                  {testimonial.quote.split('\n\n').map((para, i, arr) => (
                    <p key={i}>
                      {i === 0 && '"'}{para}{i === arr.length - 1 && '"'}
                    </p>
                  ))}
                </div>
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
