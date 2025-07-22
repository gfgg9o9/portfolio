import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-accent">Wassim Nasr</h2>
            <p className="text-sm text-textLight/70 mt-1">Full-Stack Developer & Cybersecurity Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/wassimnasr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textLight hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/wassimnasr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textLight hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/wassimnasr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textLight hover:text-accent transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-textLight/70">&copy; {currentYear} Wassim Nasr. All rights reserved.</p>
            <p className="text-xs text-textLight/50 mt-1">Built with React & Tailwind CSS</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-textLight/10">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#home" className="text-sm text-textLight/70 hover:text-accent transition-colors duration-300">Home</a>
            <a href="#about" className="text-sm text-textLight/70 hover:text-accent transition-colors duration-300">About</a>
            <a href="#skills" className="text-sm text-textLight/70 hover:text-accent transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-sm text-textLight/70 hover:text-accent transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-sm text-textLight/70 hover:text-accent transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer