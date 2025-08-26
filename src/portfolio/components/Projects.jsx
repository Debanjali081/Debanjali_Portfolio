import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronRight, FiFilter, FiX } from 'react-icons/fi';

export default function Projects({ refs, projects }) {

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

 
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

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
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };


  return (
    <section id="projects" ref={refs.projects} className="px-6 sm:px-8 lg:px-12 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A selection of projects I've built — showcasing my skills and creativity
          </p>
        </motion.div>

       
         

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project image/thumbnail */}
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 line-clamp-2">{project.desc}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center text-white"
                      onClick={(e) => handleProjectClick(e, project)}
                    >
                      <FiChevronRight size={20} />
                    </motion.button>
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center text-white"
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center text-white"
                      >
                        <FiGithub size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => handleProjectClick(e, project)}
                  >
                    View details <FiChevronRight />
                  </motion.button>
                  
                  <div className="flex gap-2">
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                        title="Live Demo"
                      >
                        <FiExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                        title="Source Code"
                      >
                        <FiGithub size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-slate-400"
          >
            No projects found with this filter. Try another one!
          </motion.div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={closeModal}
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="h-64 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-5xl">🚀</div>
                </div>
                
                <p className="text-slate-300 mb-6">{selectedProject.desc}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 rounded-lg bg-slate-700/50 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  )}
                  {selectedProject.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white"
                    >
                      <FiGithub /> Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}