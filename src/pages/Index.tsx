import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ClientCarousel from '@/components/ClientCarousel';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
        <ClientCarousel />
      <Services />
      <Expertise />
      <Footer />
    </main>
  );
};

export default Index;
