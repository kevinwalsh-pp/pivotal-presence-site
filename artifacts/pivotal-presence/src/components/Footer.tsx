export default function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-foreground mb-2">
            Pivotal Presence
          </h2>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Kevin Walsh. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
          <a 
            href="mailto:kevin@pivotalpresence.com" 
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a 
            href="https://calendly.com/kevin-walsh-pivotalpresence/pivotal_conversation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}
