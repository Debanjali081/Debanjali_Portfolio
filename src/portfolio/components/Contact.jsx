import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiRefreshCw, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact({ refs }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "rgba(139, 92, 246, 0.5)",
      boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="contact" ref={refs.contact} className="px-6 sm:px-8 lg:px-12 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm open to roles and freelance work — send a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-white">
              Let's Connect
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-slate-300 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of these channels.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:debanjali017@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-slate-400">debanjali017@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+919827780783"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-slate-400">+91-9827780783</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.linkedin.com/in/debanjali-lenka/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-slate-400">/in/debanjali-lenka</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/Debanjali081"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-500/10 flex items-center justify-center text-slate-400">
                  <FiGithub size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-slate-400">@Debanjali081</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-slate-300 mb-2">Your Name</label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative"
                >
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
                    <FiUser size={18} />
                  </div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-slate-300 mb-2">Your Email</label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative"
                >
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
                    <FiMail size={18} />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-slate-300 mb-2">Your Message</label>
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                  className="relative"
                >
                  <div className="absolute left-3 top-3 text-slate-500">
                    <FiMessageSquare size={18} />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex gap-4 pt-2"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--electric)] text-black rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <FiRefreshCw />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="reset"
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white rounded-lg font-medium transition-colors"
                >
                  Reset
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}