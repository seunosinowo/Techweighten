import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="hidden lg:block bg-navy text-primary-foreground">
        <div className="container-custom">
          <div className="flex items-center justify-between h-10">
            <a href="tel:+2347077323600" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
              <Phone className="h-4 w-4" />
              +234 707 732 3600
            </a>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/techweighten" target="_blank" rel="noopener noreferrer" aria-label="Open X (Twitter)" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/techweighten" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/assets/techweighten-logo.png" alt="TechWeighten Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-lg md:text-2xl font-bold tracking-tight text-foreground">
              TechWeighten
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="nav-link text-sm font-medium"
                activeClassName="text-primary"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="default" asChild>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button variant="accent" size="lg" className="mt-2" asChild>
                <NavLink to="/contact">Get Started</NavLink>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
