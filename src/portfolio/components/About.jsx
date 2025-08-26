import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiCloud, FiCrop, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Data
  const skillsData = {
    frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 88 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Postman', level: 80 },
      { name: 'AWS', level: 65 }
    ]
  };

  const experienceData = [
    {
      title: 'Trainee Software Developer',
      company: 'Quotus Software Solution Pvt. Ltd.',
      period: 'April 2025 – Present',
      description: 'Collaborating on backend development tasks, building REST APIs and microservices using Node.js and Express.js. Implementing secure authentication and authorization mechanisms using JWT and Passport.js.',
      achievements: [
        'Developed scalable RESTful APIs',
        'Implemented JWT authentication',
        'Optimized database queries'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Computer Science Engineering',
      institution: 'Nalanda Institute Of Technology, BBSR',
      period: '2021-Present',
      description: 'Currently pursuing graduation in Computer Science Engineering.'
    },
    {
      degree: 'Science Intermediate',
      institution: 'Kalpanadevi Women’s Science College, Bhadrak',
      period: '2019-2021',
      description: 'Completed intermediate education with focus on Science.'
    },
    {
      degree: 'Matriculation',
      institution: 'Tillo Nodal High School, Bhadrak, Odisha',
      period: '2019',
      description: 'Completed matriculation with general studies.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-[var(--electric)]  mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-3xl mx-auto">
            A passionate MERN stack developer with expertise in building full-stack web applications and AI-powered solutions.
          </motion.p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'skills', label: 'Skills', icon: <FiCode /> },
            { id: 'experience', label: 'Experience', icon: <FiTrendingUp /> },
            { id: 'education', label: 'Education', icon: <FiCrop /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id ? 'bg-[var(--electric)] text-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Frontend', icon: <FiCpu />, skills: skillsData.frontend },
                { title: 'Backend', icon: <FiDatabase />, skills: skillsData.backend },
                { title: 'Tools', icon: <FiCloud />, skills: skillsData.tools }
              ].map((category, categoryIndex) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="bg-slate-700 p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-purple-400 text-xl">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + categoryIndex * 0.3 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-700 p-6 rounded-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  
                  <h4 className="text-lg font-medium mb-3 text-slate-200">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="flex items-start gap-2 text-slate-300"
                      >
                        <span className="text-purple-400 mt-1">•</span> {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
              
              <div className="space-y-12">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-4 border-slate-900 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="bg-slate-700 p-6 rounded-xl shadow-lg">
                        <span className="text-purple-400 text-sm font-medium">{edu.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
                        <p className="text-slate-400 font-medium mt-1">{edu.institution}</p>
                        <p className="text-slate-300 mt-3">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;