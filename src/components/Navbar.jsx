import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/#about' },
    { name: 'Skills', to: '/#skills' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Resume', to: '/#resume' },
    { name: 'Contact', to: '/#contact' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-accent font-mono">
          W<span className="text-textLight">_</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a 
                  href={link.to} 
                  className="nav-link text-sm tracking-widest"
                >
                  <span className="text-accent mr-1">{index + 1}.</span> {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-secondary shadow-lg z-50 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-accent focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FiX size={24} />
            </button>
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a 
                    href={link.to} 
                    className="nav-link text-lg tracking-widest"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-accent mr-2">{index + 1}.</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Resume Button */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="/Wassim_Nasr_Resume.md" 
            download="Wassim_Nasr_Resume.md"
            className="btn"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </header>
  )
}

export default Navbar