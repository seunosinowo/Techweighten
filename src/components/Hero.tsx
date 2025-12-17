import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Carousel opts={{ loop: true }} setApi={setApi} className="relative">
        <CarouselContent>
          <CarouselItem>
            <div className="relative min-h-screen flex items-center">
              <img src="/assets/hero-bg.jpg" alt="Technology background" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/70" />
              <div className="container-custom relative z-10 py-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                    Empowering Businesses with <span className="text-accent">Technology</span>
                  </h1>
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Your business is our business. We deliver innovative IT solutions tailored to your operational, technical, and business goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative min-h-screen flex items-center">
              <img src="/assets/team-collab.jpg" alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/70" />
              <div className="container-custom relative z-10 py-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                    What Makes Us Different
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    We combine strategy, engineering, and support to build resilient digital operations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {[
                      'Tailored solutions for specific goals',
                      'Modern tools and best practices',
                      'Partnership and long-term support',
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-center gap-2 text-primary-foreground/90">
                        <CheckCircle className="text-accent" size={22} />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative min-h-screen flex items-center">
              <img src="/assets/server-room.jpg" alt="Reliable infrastructure" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/70" />
              <div className="container-custom relative z-10 py-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                    We Ensure 99% Uptime
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Performance, reliability, and proactive monitoring to keep your business online.
                  </p>
                  <div className="mt-6">
                    <div className="text-4xl md:text-5xl font-bold text-accent">99% Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;
