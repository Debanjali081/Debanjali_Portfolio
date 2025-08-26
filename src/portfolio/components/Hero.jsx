import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FiPhone, FiMail, FiArrowRight, FiRefreshCw } from "react-icons/fi";

export default function Hero({ refs }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);
  
  // Motion values for drag and return animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Rotate based on x distance for a playful effect
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  
  // Handle drag end - return to original position
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Animate back to original position
    animate(x, 0, { type: "spring", damping: 15, stiffness: 200 });
    animate(y, 0, { type: "spring", damping: 15, stiffness: 200 });
    
    setDragCount(prev => prev + 1);
  };

  return (
    <header id="home" ref={refs.home} className="pt-28 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span style={{ color: "var(--electric)" }}>Debanjali</span> — a MERN developer building AI-powered web apps
          </h1>
          
          <p className="mt-4 text-slate-300 max-w-xl">
            Experienced in building full-stack applications with a focus on performance, accessibility and delightful UI. Currently working as Trainee Software Developer at Quotus Software Solution.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              onClick={(e) => { e.preventDefault(); refs.projects.current.scrollIntoView({ behavior: "smooth" }); }} 
              className="inline-flex items-center gap-2 bg-[var(--electric)] text-black px-4 py-2 rounded-lg shadow-lg"
            >
              View projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              onClick={(e) => { e.preventDefault(); refs.contact.current.scrollIntoView({ behavior: "smooth" }); }} 
              className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-lg text-slate-200"
            >
              Get in touch
            </motion.a>
          </div>

          <div className="mt-6 flex gap-4 items-center text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <FiPhone />+91-9827780783
            </div>
            <div className="flex items-center gap-2">
              <FiMail />debanjali017@gmail.com
            </div>
          </div>
        </motion.div>

        {/* Right side with draggable photo */}
        <div className="flex justify-center lg:justify-end relative">
          <motion.div
            className="relative"
            style={{ x, y, rotate }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Photo frame */}
            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[var(--purple)] to-[var(--electric)] p-1 rounded-full cursor-grab active:cursor-grabbing">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800">
                {/* Your passport photo */}
                <img 
                  src="/passportphoto.jpg" 
                  alt="Debanjali Lenka" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback in case image fails to load */}
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-slate-400" style={{display: 'none'}}>
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Drag instruction indicator */}
            <motion.div 
              className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[var(--electric)] flex items-center justify-center text-black text-xs font-bold"
              initial={{ scale: 1 }}
              animate={{ 
                scale: isDragging ? 1 : [1, 1.2, 1],
                y: isDragging ? 0 : [0, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: isDragging ? 0 : Infinity,
                ease: "easeInOut"
              }}
            >
              {isDragging ? "😄" : "👆"}
            </motion.div>
            
            {/* Floating elements around the photo */}
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[var(--purple)] flex items-center justify-center text-white text-xs font-bold"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              AI
            </motion.div>
            
            
            <motion.div 
              className="absolute top-1/2 -right-6 w-10 h-10 rounded-lg bg-[var(--cyan)] flex items-center justify-center text-black text-xs font-bold"
              animate={{ 
                x: [0, 5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              MERN
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}