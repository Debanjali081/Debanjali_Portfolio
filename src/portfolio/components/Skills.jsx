import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiJavascript, SiHtml5, SiCss3, SiExpress, SiNextdotjs, SiPostgresql ,SiGit,SiGithub,
  SiFigma
} from 'react-icons/si';

export default function Skills({ refs }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Skills data with icons and colors
  const skills = [
    { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500', level: 90 },
    { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500', level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', level: 88 },
    { name: 'React.js', icon: <SiReact />, color: 'text-cyan-400', level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white', level: 80 },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500', level: 85 },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400', level: 83 },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400', level: 80 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400', level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-300', level: 87 },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600', level: 85 },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-purple-400', level: 83 },
    { name: 'Figma', icon: <SiFigma />, color: 'text-purple-500', level: 70 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };



  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  return (
    <section id="skills" ref={refs.skills} className="px-6 sm:px-8 lg:px-12 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies I specialize in — click a skill to see more details and filter projects
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedSkill?.name === skill.name 
                  ? 'bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70'
              }`}
              onClick={() => handleSkillClick(skill)}
            >
              <motion.div 
                className={`text-3xl mb-3 ${skill.color}`}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <div className="text-sm text-slate-200 font-medium text-center">{skill.name}</div>
              
              {/* Progress bar (visible when selected) */}
              {selectedSkill?.name === skill.name && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="w-full mt-3"
                >
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${skill.color.replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <div className="text-xs text-slate-400 mt-1 text-right">{skill.level}%</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Skill Details */}
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className={`text-4xl ${selectedSkill.color}`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                {selectedSkill.icon}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${selectedSkill.color.replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className="text-slate-400">{selectedSkill.level}% proficiency</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-4">
              {selectedSkill.name === 'React.js' && 'Building dynamic user interfaces with reusable components and hooks.'}
              {selectedSkill.name === 'Node.js' && 'Creating server-side applications and APIs with JavaScript runtime.'}
              {selectedSkill.name === 'MongoDB' && 'Working with NoSQL databases for flexible data storage solutions.'}
              {selectedSkill.name === 'Tailwind CSS' && 'Crafting modern, responsive designs with utility-first CSS framework.'}
              {selectedSkill.name === 'JavaScript' && 'Developing interactive web applications with modern ES6+ features.'}
              {selectedSkill.name === 'HTML' && 'Structuring web content with semantic markup and accessibility in mind.'}
              {selectedSkill.name === 'CSS' && 'Styling web applications with modern layout techniques and animations.'}
              {selectedSkill.name === 'Next.js' && 'Building server-rendered React applications with optimized performance.'}
              {selectedSkill.name === 'Express.js' && 'Creating RESTful APIs and web applications with minimal Node.js framework.'}
              {selectedSkill.name === 'PostgreSQL' && 'Working with relational databases and complex SQL queries.'}
              {selectedSkill.name === 'Git' && 'Version control and collaboration using distributed version control system.'}
              {selectedSkill.name === 'GitHub' && 'Managing code repositories and collaborating with other developers.'}
              {selectedSkill.name === 'Figma' && 'Designing user interfaces and creating prototypes for web applications.'}
              {selectedSkill.name === 'VS Code' && 'Using powerful code editor with extensions for efficient development.'}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white"
              onClick={() => setSelectedSkill(null)}
            >
              Close Details
            </motion.button>
          </motion.div>
        )}

        {/* Skills Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { 
              title: 'Frontend Development', 
              skills: 'React, Next.js, HTML, CSS, JavaScript, Tailwind CSS',
              color: 'from-cyan-500/20 to-cyan-700/20',
              border: 'border-cyan-500/30'
            },
            { 
              title: 'Backend Development', 
              skills: 'Node.js, Express.js, MongoDB, PostgreSQL, REST APIs',
              color: 'from-purple-500/20 to-purple-700/20',
              border: 'border-purple-500/30'
            },
            { 
              title: 'Tools & Others', 
              skills: 'Git, GitHub, Figma, VS Code, Agile Methodologies',
              color: 'from-slate-600/20 to-slate-800/20',
              border: 'border-slate-600/30'
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-5 rounded-xl border bg-gradient-to-br ${category.color} ${category.border}`}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
              <p className="text-slate-300">{category.skills}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}