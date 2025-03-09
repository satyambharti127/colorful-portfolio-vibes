
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact';
import { motion } from 'framer-motion';

const Contact = () => {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>
      
      <ContactSection />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "What services do you offer?",
                  answer: "I specialize in full-stack web development, data visualization, and data science solutions. This includes custom web applications, dashboards, and data analysis."
                },
                {
                  question: "Are you available for freelance work?",
                  answer: "Yes, I'm available for freelance projects. Feel free to contact me with details about your project for a quick response."
                },
                {
                  question: "What is your typical project process?",
                  answer: "I follow a structured approach: requirements gathering, planning, design, development, testing, and deployment, with regular client communication throughout."
                },
                {
                  question: "Do you offer maintenance services?",
                  answer: "Yes, I provide ongoing maintenance and support services to ensure your application continues to run smoothly after deployment."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-left"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
