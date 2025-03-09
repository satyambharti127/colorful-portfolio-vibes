
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/Projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-gray-600 text-lg">
              A collection of my work across web development and data science domains.
            </p>
          </motion.div>
        </div>
      </div>
      
      <ProjectsSection />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in collaborating?</h2>
            <p className="text-gray-600 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-3 px-8 bg-accent text-white font-medium rounded-full hover:shadow-lg transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
