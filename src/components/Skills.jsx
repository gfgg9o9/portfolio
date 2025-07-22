import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiRedux, SiFlutter, SiFirebase, SiKalilinux } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <TbBrandJavascript className="text-yellow-400" size={40} /> },
        { name: 'Python', icon: <FaPython className="text-blue-500" size={40} /> },
        { name: 'Java', icon: <FaJava className="text-red-500" size={40} /> },
        { name: 'SQL', icon: <FaDatabase className="text-blue-300" size={40} /> },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" size={40} /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
        { name: 'Flutter', icon: <SiFlutter className="text-blue-400" size={40} /> },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
        { name: 'Express', icon: <SiExpress className="text-gray-400" size={40} /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={40} /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" size={40} /> },
      ]
    },
    {
      title: 'Tools & Security',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" size={40} /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" size={40} /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" size={40} /> },
        { name: 'Kali Linux', icon: <SiKalilinux className="text-blue-400" size={40} /> },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          My Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-primary p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-textLight mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-center group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-textLight mb-4">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">Full-Stack Web Development</h4>
              <p className="text-sm">Building responsive, modern web applications with React, Node.js, Express, and databases like MongoDB and MySQL.</p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">Cybersecurity Integration</h4>
              <p className="text-sm">Implementing OWASP standards, conducting penetration testing, and developing secure APIs to protect digital assets.</p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">AI & Data Dashboards</h4>
              <p className="text-sm">Creating intelligent systems and data visualization tools using Python, Machine Learning, and modern frontend frameworks.</p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">Cross-Platform Applications</h4>
              <p className="text-sm">Developing mobile applications with Flutter and web dashboards with modern UI/UX principles for seamless experiences.</p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">Cloud & DevOps</h4>
              <p className="text-sm">Working with Docker, Git, and Linux environments to create scalable, maintainable deployment solutions.</p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
              <h4 className="text-lg font-bold text-accent mb-2">UI/UX Design</h4>
              <p className="text-sm">Combining clean UI with modern UX practices to create interfaces that are elegant, intuitive, and engaging.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills