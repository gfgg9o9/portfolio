import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiFlutter, SiFirebase, SiPython, SiDocker, SiKubernetes, SiTensorflow, SiD3Dotjs } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 })
  
  // Map technology names to their respective icons
  const techIcons = {
    'React': <SiReact className="text-blue-400" />,
    'Node.js': <SiNodedotjs className="text-green-500" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Express': <SiExpress className="text-gray-400" />,
    'Flutter': <SiFlutter className="text-blue-400" />,
    'Firebase': <SiFirebase className="text-yellow-500" />,
    'Python': <SiPython className="text-blue-500" />,
    'Docker': <SiDocker className="text-blue-500" />,
    'Kubernetes': <SiKubernetes className="text-blue-600" />,
    'TensorFlow': <SiTensorflow className="text-orange-500" />,
    'D3.js': <SiD3Dotjs className="text-orange-400" />
  }
  
  const projects = [
    {
      id: 1,
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging platform with real-time communication features and advanced security protocols.',
      image: 'securechat.jpg',
      category: ['web', 'security'],
      technologies: ['React', 'Node.js', 'Socket.io', 'Crypto API'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'DataViz Dashboard',
      description: 'Interactive data visualization dashboard for business analytics with real-time updates and customizable widgets.',
      image: 'dataviz.jpg',
      category: ['web', 'data'],
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'CyberScan',
      description: 'Network vulnerability scanner with automated reporting and remediation suggestions for security professionals.',
      image: 'cyberscan.jpg',
      category: ['security', 'tools'],
      technologies: ['Python', 'Flask', 'Nmap API', 'React'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'MobileFinance',
      description: 'Cross-platform mobile application for personal finance management with secure transaction tracking.',
      image: 'mobilefinance.jpg',
      category: ['mobile', 'web'],
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'AIAssistant',
      description: 'Intelligent virtual assistant with natural language processing capabilities for task automation.',
      image: 'aiassistant.jpg',
      category: ['ai', 'tools'],
      technologies: ['Python', 'TensorFlow', 'React', 'Express'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'CloudDeploy',
      description: 'DevOps automation tool for streamlined deployment and infrastructure management across cloud platforms.',
      image: 'clouddeploy.jpg',
      category: ['tools', 'devops'],
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'React'],
      github: '#',
      live: '#',
    },
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Security', value: 'security' },
    { name: 'AI', value: 'ai' },
    { name: 'DevOps', value: 'devops' },
    { name: 'Tools', value: 'tools' },
    { name: 'Data', value: 'data' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  }

  const filterVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05 }
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10" ref={projectsRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono text-sm inline-block mb-2"
          >
            &lt; My Work /&gt;
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-textLight mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-text"
          >
            A collection of my recent work spanning web, mobile, security, and AI applications.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variants={filterVariants}
              animate={activeFilter === filter.value ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value 
                ? 'bg-accent text-primary shadow-lg shadow-accent/20' 
                : 'bg-secondary/80 text-textLight hover:bg-accent/10 hover:text-accent'}`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-secondary rounded-xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:shadow-accent/20 hover:-translate-y-2"
                style={{
                  perspective: '1000px',
                }}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary via-secondary to-accent/30 flex items-center justify-center p-6">
                    {/* Project icon/logo */}
                    <motion.div 
                      className="text-6xl font-bold text-accent/80 flex items-center justify-center w-full h-full"
                      animate={{
                        rotateY: hoveredProject === project.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                      {project.category.includes('security') ? (
                        <FaCode className="text-5xl" />
                      ) : project.category.includes('mobile') ? (
                        <SiFlutter className="text-5xl" />
                      ) : project.category.includes('ai') ? (
                        <SiTensorflow className="text-5xl" />
                      ) : project.category.includes('devops') ? (
                        <SiDocker className="text-5xl" />
                      ) : (
                        <FaLaptopCode className="text-5xl" />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Overlay with links */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/80 to-transparent flex items-end justify-center p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-4 mb-4">
                      <motion.a 
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary/80 p-3 rounded-full text-accent hover:text-white hover:bg-accent transition-colors duration-300 backdrop-blur-sm"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary/80 p-3 rounded-full text-accent hover:text-white hover:bg-accent transition-colors duration-300 backdrop-blur-sm"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-textLight group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.category.slice(0, 2).map((cat, catIndex) => (
                        <span key={catIndex} className="text-xs px-2 py-1 bg-accent/10 rounded-full text-accent font-mono">{cat}</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-text mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 text-xs text-textLight/80">
                        <span className="text-accent">{techIcons[tech] || null}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.live}
                    className="inline-flex items-center text-accent text-sm font-medium group/link mt-2"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <HiOutlineArrowNarrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-accent/20 blur-md rounded-lg"></div>
            <a 
              href="#contact" 
              className="relative z-10 px-8 py-4 bg-secondary border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300 inline-flex items-center group"
            >
              <span className="mr-2">Interested in working together?</span>
              <HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects