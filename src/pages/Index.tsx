
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import ProjectsSection from '@/components/Projects';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Index = () => {
  useEffect(() => {
    document.title = "Satyam Bharti - Portfolio";
  }, []);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  
  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      <motion.div
        className="fixed bottom-6 right-6 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="p-3 rounded-full bg-white/90 shadow-lg border border-gray-200 text-gray-800 hover:bg-accent hover:text-white transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </a>
      </motion.div>
      
      <motion.div style={{ opacity, scale }}>
        <Hero />
      </motion.div>
      
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
