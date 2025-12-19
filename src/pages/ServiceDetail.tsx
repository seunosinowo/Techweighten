import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const serviceData: Record<string, any> = {
  'it-infrastructure-setup': {
    title: 'IT Infrastructure Setup',
    description: 'Server and network installation, router/switch/firewall setup, cloud-based system deployment, and email platform migration.',
    image: '/assets/ser1.jpg',
    fullDescription: 'Comprehensive IT infrastructure solutions tailored to your business needs. We handle everything from initial planning to implementation and ongoing management.',
    details: [
      'Server and network installation',
      'Router/switch/firewall setup',
      'Cloud-based system deployment',
      'Email platform migration',
      'Network security configuration',
      'Backup and disaster recovery solutions'
    ],
    benefits: [
      'Improved system reliability',
      'Enhanced security posture',
      'Scalable infrastructure',
      'Reduced operational costs',
      'Better performance'
    ]
  },
  'hardware-equipment': {
    title: 'Hardware & Equipment',
    description: 'Supply and configuration of laptops, desktops, printers, CCTV systems, access control, and time & attendance systems.',
    image: '/assets/ser2.jpg',
    fullDescription: 'Complete hardware solutions including procurement, configuration, and setup of all necessary equipment for your organization.',
    details: [
      'Laptop and desktop supply',
      'Printer installation and configuration',
      'CCTV system setup',
      'Access control systems',
      'Time & attendance systems',
      'Hardware maintenance support'
    ],
    benefits: [
      'Quality equipment sourcing',
      'Professional installation',
      'Ongoing technical support',
      'Cost-effective solutions',
      'Warranty management'
    ]
  },
  'software-deployment': {
    title: 'Software Deployment',
    description: 'Installation and configuration of enterprise applications, custom software delivery, and licensing management.',
    image: '/assets/ser3.jpg',
    fullDescription: 'Expert software deployment services ensuring smooth implementation and optimal performance of all applications.',
    details: [
      'Enterprise application installation',
      'Custom software deployment',
      'License management',
      'Software updates and patches',
      'Integration with existing systems',
      'User training and documentation'
    ],
    benefits: [
      'Seamless deployment',
      'Reduced downtime',
      'Proper licensing compliance',
      'Enhanced productivity',
      'Technical support included'
    ]
  },
  'web-app-development': {
    title: 'Web & App Development',
    description: 'Corporate website design and hosting, web and mobile application development, UI/UX design and optimization.',
    image: '/assets/ser4.jpg',
    fullDescription: 'Custom web and mobile applications designed to meet your specific business requirements and engage your audience.',
    details: [
      'Corporate website design',
      'Web hosting services',
      'Mobile application development',
      'UI/UX design',
      'E-commerce solutions',
      'API development'
    ],
    benefits: [
      'Modern, responsive design',
      'Improved user experience',
      'Better conversion rates',
      'Mobile-first approach',
      'Ongoing maintenance support'
    ]
  },
  'it-support-maintenance': {
    title: 'IT Support & Maintenance',
    description: 'Preventive and corrective maintenance, troubleshooting, system upgrades, remote and on-site support services.',
    image: '/assets/ser1.jpg',
    fullDescription: 'Comprehensive IT support ensuring your systems run smoothly with minimal downtime and maximum efficiency.',
    details: [
      'Preventive maintenance',
      'Corrective maintenance',
      'Remote support services',
      'On-site support services',
      'System troubleshooting',
      'Regular system upgrades'
    ],
    benefits: [
      '24/7 availability',
      'Reduced downtime',
      'Proactive issue resolution',
      'Extended system lifespan',
      'Cost savings'
    ]
  },
  'it-consultancy': {
    title: 'IT Consultancy',
    description: 'IT policy development, technology audit, risk assessment, strategic IT planning and digital transformation advisory.',
    image: '/assets/ser2.jpg',
    fullDescription: 'Strategic IT consulting to help your organization align technology with business objectives and drive digital transformation.',
    details: [
      'IT policy development',
      'Technology audit',
      'Risk assessment',
      'Strategic IT planning',
      'Digital transformation advisory',
      'Compliance and security assessment'
    ],
    benefits: [
      'Aligned IT strategy',
      'Reduced risks',
      'Better decision making',
      'Improved efficiency',
      'Future-proofed infrastructure'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ''];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {service.fullDescription}
              </p>
              <Button variant="accent" size="xl" asChild>
                <NavLink to="/contact">
                  Get Started
                  <ArrowRight size={20} />
                </NavLink>
              </Button>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                What We Provide
              </h2>
              <ul className="space-y-4">
                {service.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business with {service.title.toLowerCase()}
            </p>
            <Button variant="hero" size="xl" asChild>
              <NavLink to="/contact">
                Contact Us Today
                <ArrowRight size={20} />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
