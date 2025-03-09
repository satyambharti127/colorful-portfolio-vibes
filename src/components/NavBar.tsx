
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, User, Briefcase, Phone, Home } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code size={28} className="text-accent" />
          </motion.div>
          <motion.span 
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Satyam
          </motion.span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/', icon: Home },
            { name: 'About', path: '/about', icon: User },
            { name: 'Projects', path: '/projects', icon: Briefcase },
            { name: 'Contact', path: '/contact', icon: Phone },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="relative group flex items-center gap-1.5"
            >
              <item.icon size={16} className="text-gray-600 group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium text-gray-800 group-hover:text-accent transition-colors">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
