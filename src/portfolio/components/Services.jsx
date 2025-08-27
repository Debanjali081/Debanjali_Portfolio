import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiCode, 
  FiCpu, 
  FiMessageSquare, 
  FiUsers, 
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

export default function Services({ refs }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const services = [
    {
      title: "Full-stack Development",
      description: "Building responsive, accessible web apps using React, Node and MongoDB.",
      icon: <FiCode />,
      color: "text-purple-400",
      borderColor: "border-purple-500",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Deployment"],
      delay: 0.1
    },
    {
      title: "AI Integrations",
      description: "Integrating vision/LLM APIs (Gemini, Google Vision) to add intelligent features.",
      icon: <FiCpu />,
      color: "text-cyan-400",
      borderColor: "border-cyan-500",
      features: ["AI API Integration", "Computer Vision", "Language Models", "Data Processing"],
      delay: 0.2
    },
    {
      title: "Real-time Systems",
      description: "Realtime messaging and monitoring using WebSockets / Socket.io.",
      icon: <FiMessageSquare />,
      color: "text-blue-400",
      borderColor: "border-blue-500",
      features: ["WebSockets", "Live Updates", "Real-time Analytics", "Monitoring"],
      delay: 0.3
    },
    {
      title: "Consulting & Mentorship",
      description: "Code reviews, architecture guidance and interview prep.",
      icon: <FiUsers />,
      color: "text-green-400",
      borderColor: "border-green-500",
      features: ["Code Reviews", "Architecture Planning", "Technical Interviews", "Career Guidance"],
      delay: 0.4
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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

  return (
    <section id="services" ref={refs.services} className="px-6 sm:px-8 lg:px-12 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How I can help bring your ideas to life with technical expertise and creative solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              custom={index}
              className="relative p-6 rounded-2xl bg-slate-800/30 border border-slate-700 transition-all duration-300"
            >
              {/* Service icon */}
              <div className={`text-3xl mb-5 ${service.color}`}>
                {service.icon}
              </div>

              {/* Service title */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              
              {/* Description */}
              <p className="text-slate-300 mb-4">{service.description}</p>

              {/* Divider */}
              <div className="h-px bg-slate-700 mb-4"></div>

              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + service.delay + 0.3 }}
                    className="flex items-center gap-2 text-slate-400 text-sm"
                  >
                    <span className={service.color}>
                      <FiCheck size={16} />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}