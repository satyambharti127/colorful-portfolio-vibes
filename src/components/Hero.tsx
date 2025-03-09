
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Cpu, Database, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -right-20 -top-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -left-20 top-1/3 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.03]">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 min-h-screen flex flex-col justify-center relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent">
                Computer Science Engineer & Data Scientist
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hello, I'm <span className="text-gradient">Satyam Bharti</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                I build innovative web solutions and make sense of data through analytics and visualization. 
                With 5+ years of coding experience and extensive data science knowledge.
              </p>

              <div className="flex flex-wrap gap-4 items-center py-2">
                <Button asChild size="lg" className="group rounded-full">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl opacity-20"></div>
              <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent"></div>
                
                <div className="relative flex items-center justify-center">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Programming code on computer screen" 
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.8 }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                
                  <div className="absolute left-4 bottom-4 right-4">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[Cpu, Database, LineChart].map((Icon, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-lg flex items-center justify-center"
                        >
                          <Icon className="text-white" size={20} />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      className="text-white font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      Turning code into solutions & data into insights
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
