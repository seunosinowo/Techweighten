import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
