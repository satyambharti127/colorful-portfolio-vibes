
import { motion } from 'framer-motion';
import { Cpu, BarChart, Code, Globe, Database, LineChart } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.1, 0.25, 0.3, 1],
      }
    })
  };
  
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Power BI', level: 80 },
    { name: 'Tableau', level: 75 },
    { name: 'R Programming', level: 70 },
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Computer Science Engineer with <span className="text-gradient">Data Science</span> Expertise
          </h2>
          <p className="text-gray-600 text-lg">
            With over 5 years of coding experience, I specialize in building modern web applications
            and unlocking insights from complex datasets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="p-4 border border-gray-100 rounded-xl mb-6 bg-gray-50/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Specialization in Data Science
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Vellore Institute of Technology (VIT Vellore)</span>
                      <span className="mx-2">•</span>
                      <span>4th Year</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                  <div className="p-2 rounded-md bg-blue-50 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-gray-700">8252541111</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                  <div className="p-2 rounded-md bg-purple-50 text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <span className="text-gray-700">satyam.bharti@example.com</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                  <div className="p-2 rounded-md bg-green-50 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span className="text-gray-700">Vellore, Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Code, title: "MERN Stack", color: "bg-blue-50 text-blue-500" },
                { icon: Globe, title: "Web Dev", color: "bg-purple-50 text-purple-500" },
                { icon: Database, title: "MongoDB", color: "bg-green-50 text-green-500" },
                { icon: BarChart, title: "Power BI", color: "bg-orange-50 text-orange-500" },
                { icon: LineChart, title: "Tableau", color: "bg-indigo-50 text-indigo-500" },
                { icon: Cpu, title: "R", color: "bg-red-50 text-red-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className={`p-3 rounded-lg mb-2 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
