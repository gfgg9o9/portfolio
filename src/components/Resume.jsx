import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Resume
        </motion.h2>
        
        <div className="flex flex-col items-center justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl w-full bg-primary p-8 rounded-lg shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-textLight mb-4">Wassim Nasr</h3>
            <p className="text-lg mb-2">Full-Stack Developer & Cybersecurity Engineer</p>
            
            <div className="mt-4 space-y-1 text-sm text-textLight/80">
              <p>Email: wassimna0@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/wassim-nasr-208b62241</p>
              <p>GitHub: github.com/wassim801</p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-accent mb-2">Skills Highlight</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>MERN Stack Development (MongoDB, Express, React, Node.js)</li>
                <li>Mobile App Development with Flutter</li>
                <li>Cybersecurity & Network Protection</li>
                <li>Machine Learning & AI Integration</li>
                <li>Database Design & Management (SQL, NoSQL)</li>
                <li>DevOps & Deployment Automation</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-accent mb-2">Education</h4>
              <ul className="list-none space-y-2 ml-2">
                <li>
                  <p className="font-medium">Engineering Degree in Cybersecurity (Final Year)</p>
                  <p className="text-sm text-textLight/70">EPI Digital School</p>
                </li>
                <li>
                  <p className="font-medium">Bachelor's Degree in Software Development</p>
                  <p className="text-sm text-textLight/70">Higher Institution of Kebili</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-accent mb-2">Professional Experience</h4>
              <ul className="list-none space-y-2 ml-2">
                <li>
                  <p className="font-medium">Full-Stack Developer & Cybersecurity Engineer</p>
                  <p className="text-sm text-textLight/70">Sartex | 4 months, 2023</p>
                </li>
                <li>
                  <p className="font-medium">Full-Stack Developer & Cybersecurity Engineer</p>
                  <p className="text-sm text-textLight/70">Sitex | 4 months, 2023</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-accent mb-2">Project Highlights</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>B2B/B2C Relationship Platform (MERN Stack)</li>
                <li>E-commerce Websites Development</li>
                <li>Delivery Mobile App & Admin Dashboard</li>
                <li>Airbnb-style Application Suite</li>
                <li>Business Chat & Strategy Application</li>
                <li>Custom Firewall & Security Solutions</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/Wassim_Nasr_Resume.md" 
            download="Wassim_Nasr_Resume.md"
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-primary px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            <FiDownload className="text-lg" />
            Download Full Resume
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-sm text-text/70"
          >
            The resume is in Markdown format. You can convert it to PDF using online tools or applications. Projects are showcased independently and not linked to LinkedIn repositories.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Resume