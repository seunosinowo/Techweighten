import { 
  Server, 
  Monitor, 
  Code, 
  Globe, 
  Headphones, 
  ClipboardList,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const services = [
  {
    icon: Server,
    title: 'IT Infrastructure Setup',
    description: 'Server and network installation, router/switch/firewall setup, cloud-based system deployment, and email platform migration.',
    features: ['Network Configuration', 'Cloud Deployment', 'Security Setup'],
  },
  {
    icon: Monitor,
    title: 'Hardware & Equipment',
    description: 'Supply and configuration of laptops, desktops, printers, CCTV systems, access control, and time & attendance systems.',
    features: ['Device Supply', 'CCTV Installation', 'Access Control'],
  },
  {
    icon: Code,
    title: 'Software Deployment',
    description: 'Installation and configuration of enterprise applications, custom software delivery, and licensing management.',
    features: ['App Integration', 'Custom Software', 'License Management'],
  },
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Corporate website design and hosting, web and mobile application development, UI/UX design and optimization.',
    features: ['Website Design', 'Mobile Apps', 'UI/UX Design'],
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description: 'Preventive and corrective maintenance, troubleshooting, system upgrades, remote and on-site support services.',
    features: ['24/7 Support', 'System Upgrades', 'Troubleshooting'],
  },
  {
    icon: ClipboardList,
    title: 'IT Consultancy',
    description: 'IT policy development, technology audit, risk assessment, strategic IT planning and digital transformation advisory.',
    features: ['Strategy Planning', 'Risk Assessment', 'Digital Transformation'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for{' '}
            <span className="text-accent">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver a comprehensive suite of IT solutions tailored for the evolving needs of modern businesses across all industries.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-accent/15 rounded-[3rem] blur-2xl opacity-60" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img
              src="/assets/ser1.jpg"
              alt="Service visual 1"
              className="h-36 md:h-48 w-full object-cover rounded-3xl shadow-xl"
            />
            <img
              src="/assets/ser2.jpg"
              alt="Service visual 2"
              className="h-36 md:h-48 w-full object-cover rounded-3xl shadow-xl"
            />
            <img
              src="/assets/ser3.jpg"
              alt="Service visual 3"
              className="h-36 md:h-48 w-full object-cover rounded-3xl shadow-xl"
            />
            <img
              src="/assets/ser4.jpg"
              alt="Service visual 4"
              className="h-36 md:h-48 w-full object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border card-hover relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowRight size={16} />
              </NavLink>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <NavLink to="/contact">
              Discuss Your Project
              <ArrowRight size={20} />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
