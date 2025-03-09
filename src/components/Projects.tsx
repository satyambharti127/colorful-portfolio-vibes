
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  category: string;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard using Power BI to visualize complex datasets with real-time updates and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["Power BI", "Data Analysis", "Dashboard"],
      demoLink: "#",
      githubLink: "#",
      category: "data-science"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack MERN application with user authentication, product management, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#",
      category: "web-development"
    },
    {
      id: 3,
      title: "Predictive Analysis Tool",
      description: "Machine learning model that predicts market trends using historical data and advanced statistical algorithms.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Machine Learning", "Data Science"],
      demoLink: "#",
      githubLink: "#",
      category: "data-science"
    },
    {
      id: 4,
      title: "Social Media Application",
      description: "Feature-rich social platform with real-time messaging, content sharing, and sophisticated recommendation system.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Redux", "Node.js"],
      demoLink: "#",
      githubLink: "#",
      category: "web-development"
    },
    {
      id: 5,
      title: "Database Management System",
      description: "Custom database solution with optimized query processing and advanced security features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["Java", "SQL", "Database Design"],
      demoLink: "#",
      githubLink: "#",
      category: "software"
    },
    {
      id: 6,
      title: "Automated Testing Framework",
      description: "Robust testing infrastructure that automates quality assurance processes across multiple platforms.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Testing", "Automation"],
      demoLink: "#",
      githubLink: "#",
      category: "software"
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-accent/10 text-accent">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A showcase of my technical expertise across web development and data science domains.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-2 mb-12">
          {[
            { value: "all", label: "All Projects" },
            { value: "web-development", label: "Web Development" },
            { value: "data-science", label: "Data Science" },
            { value: "software", label: "Software Engineering" }
          ].map(filter => (
            <Button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              variant={selectedFilter === filter.value ? "default" : "outline"}
              className={`rounded-full px-6 ${
                selectedFilter === filter.value 
                  ? "" 
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative overflow-hidden h-56">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end gap-2 mb-2">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
                          <ExternalLink size={18} className="text-white" />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
                          <Github size={18} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
