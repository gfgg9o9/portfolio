import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  
  // No need to use init() separately when using the newer approach with sendForm

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    // Replace these with your actual EmailJS service ID and template ID
    const serviceId = 'service_bql8xgs'
    const templateId = 'portfolio_contact'
    
    // Using the current recommended approach with publicKey as an object parameter
    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: '4JIWUY8Svk0obaq_L' // Make sure this is your complete public key
    })
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text)
        setIsSubmitting(false)
        setSubmitStatus('error')
        setErrorMessage('Failed to send message. Please try again later.')
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setErrorMessage('')
        }, 5000)
      })
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-textLight mb-6">Let's Connect</h3>
            <p className="text-textLight/80 mb-8">
              I'm currently available for freelance work, full-time positions, and consulting opportunities. If you have a project that needs coding expertise, security implementation, or if you're looking for a developer to join your team, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-accent">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-textLight">Email</h4>
                  <a href="mailto:wassimna0@gmail.com" className="text-sm text-accent hover:underline">wassimna0@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-accent">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-textLight">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/wassim-nasr-208b62241/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">linkedin.com/in/wassim-nasr-208b62241</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-accent">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-textLight">GitHub</h4>
                  <a href="https://github.com/wassim801" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">github.com/wassim801</a>
                </div>
              </div>
              
              
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textLight mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-textLight"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textLight mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-textLight"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-textLight mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-textLight"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textLight mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-primary border border-primary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-textLight resize-none"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-400 text-center"
                  >
                    Your message has been sent successfully!
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-400 text-center"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact