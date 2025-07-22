import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <span className="text-accent font-mono">Hi, my name is</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-textLight mb-4"
        >
          Wassim Nasr.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-text mb-6"
        >
          I build secure digital solutions.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-lg mb-8"
        >
          I'm a software engineer specializing in Full-Stack Web Development and Cybersecurity Engineering. 
          I create digital products that are not only functional and modern but also resilient and secure.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <a 
            href="#projects" 
            className="btn px-6 py-3"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="fixed left-6 bottom-0 hidden md:block"
        >
          <ul className="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-text">
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent hover:translate-y-[-5px] transition-all duration-300 inline-block"
              >
                <FiGithub size={22} />
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com/in/wassim-nasr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent hover:translate-y-[-5px] transition-all duration-300 inline-block"
              >
                <FiLinkedin size={22} />
              </a>
            </li>
            <li>
              <a 
                href="mailto:wassimnasr.dev@gmail.com" 
                className="text-text hover:text-accent hover:translate-y-[-5px] transition-all duration-300 inline-block"
              >
                <FiMail size={22} />
              </a>
            </li>
          </ul>
        </motion.div>
        
        {/* Email Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="fixed right-6 bottom-0 hidden md:block"
        >
          <div className="flex flex-col items-center after:content-[''] after:w-px after:h-24 after:bg-text">
            <a 
              href="mailto:wassimnasr.dev@gmail.com" 
              className="text-text hover:text-accent transition-colors duration-300 font-mono tracking-widest [writing-mode:vertical-rl]"
            >
              wassimnasr.dev@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero