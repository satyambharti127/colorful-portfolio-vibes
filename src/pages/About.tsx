
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/About';
import { motion } from 'framer-motion';
import { Code, Cpu, Database } from 'lucide-react';

const About = () => {
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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Journey in <span className="text-gradient">Tech</span>
            </h1>
            <p className="text-gray-600 text-lg">
              From coding enthusiast to data science specialist - here's my story.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mb-20 overflow-hidden rounded-2xl"
          >
            <div className="aspect-video w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5 + 0.3,
                      animation: `float ${Math.random() * 10 + 20}s linear infinite`
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 flex flex-col items-center glass-panel rounded-2xl p-10 max-w-2xl mx-auto shadow-xl">
                <div className="grid grid-cols-3 gap-8 mb-6">
                  {[
                    { icon: Code, label: "5+ Years Coding" },
                    { icon: Cpu, label: "CS Engineer" },
                    { icon: Database, label: "Data Scientist" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.2) }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="p-4 bg-white/80 rounded-full mb-3 shadow-md">
                        <item.icon className="text-accent" size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-gray-700">
                  I blend engineering precision with creative problem-solving to build innovative solutions.
                  My journey in technology has been fueled by curiosity and a passion for continuous learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <AboutSection />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gradient-to-b from-transparent to-gray-50"
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">My Technical Journey</h2>
          <div className="relative">
            {[
              { year: "2019", title: "Started Programming", description: "Began my coding journey with Java and Python" },
              { year: "2020", title: "Web Development", description: "Learned HTML, CSS, and JavaScript" },
              { year: "2021", title: "Full Stack Development", description: "Mastered React and the MERN stack" },
              { year: "2022", title: "Data Science Focus", description: "Deep-dived into data analysis with Power BI and Tableau" },
              { year: "2023", title: "Professional Growth", description: "Applied skills to real-world projects and expanded expertise" }
            ].map((item, index, array) => (
              <div key={index} className="mb-12 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10">
                    {item.year.substring(2)}
                  </div>
                  <div className="h-0.5 flex-1 bg-gray-200 ml-4"></div>
                </div>
                <div className="ml-16 -mt-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < array.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default About;
