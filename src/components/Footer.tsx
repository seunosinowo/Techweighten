import { NavLink } from '@/components/NavLink';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src="/assets/techweighten-logo.png" alt="TechWeighten Logo" className="h-12 w-auto mb-6" />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              TechWeighten is a forward-thinking technology solutions company dedicated to helping businesses work smarter, faster, and more securely.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} TechWeighten Technologies. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Team', href: '/team' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'IT Infrastructure',
                'Hardware Supply',
                'Software Deployment',
                'Web Development',
                'IT Support',
                'IT Consultancy',
              ].map((service) => (
                <li key={service}>
                  <NavLink
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            Empowering African businesses with secure, innovative technology.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
