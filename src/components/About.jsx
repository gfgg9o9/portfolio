import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 text-lg"
          >
            <p className="mb-4">
              I studied Software Development and hold an Engineering Degree in Cybersecurity, giving me a unique and powerful combination of development expertise and advanced knowledge in digital security. This dual track allows me to create digital products that are not only functional and modern but also resilient and secure.
            </p>
            <p className="mb-4">
              My mission is to bridge the gap between development and cybersecurity. In an era where digital threats are growing, my work ensures that the systems I build are not just functional — but also resilient and trustworthy.
            </p>
            <p className="mb-4">
              I build digital products that solve real problems, are secure by design, and offer a seamless user experience. Whether it's an e-commerce platform, a dashboard for data analytics, or a chatbot powered by AI — I design, develop, and secure every line of code with purpose.
            </p>
            <p>
              I combine clean UI with modern UX practices to create interfaces that are elegant and intuitive, with a dark, futuristic aesthetic, smooth transitions, interactive elements, clear navigation, and tech-inspired animations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 flex justify-center items-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative max-w-xs overflow-hidden bg-secondary rounded-lg">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl text-accent font-bold">
                    W
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About