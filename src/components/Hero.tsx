import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up opacity-0"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Empowering Businesses with{' '}
            <span className="text-accent">Technology</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Your business is our business. We deliver innovative IT solutions tailored to your operational, technical, and business goals.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Button variant="accent" size="xl" asChild>
              <NavLink to="/contact">
                Start Your Project
                <ArrowRight size={20} />
              </NavLink>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <NavLink to="/services">Explore Services</NavLink>
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up opacity-0"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            {[
              { number: '99%', label: 'Uptime' },
              { number: '150+', label: 'Projects' },
              { number: '50+', label: 'Clients' },
              { number: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
