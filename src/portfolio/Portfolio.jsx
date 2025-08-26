import React, { useEffect, useRef, useState } from "react";
import { useParticleEffect } from "./utils/particleEffect";
import { sections, projects, skills } from "./data/portfolioData";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };

  const { initParticles } = useParticleEffect();

  useEffect(() => {
    // IntersectionObserver to set active nav
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => refs[s].current && obs.observe(refs[s].current));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    return initParticles();
  }, [initParticles]);

  return (
    <div className="relative text-slate-100 min-h-screen bg-gradient-to-b from-[#081029] to-black font-sans">
      {/* background canvas particles */}
      <canvas id="bg-canvas" className="fixed inset-0 -z-10" />

      {/* custom color variables */}
      <style>{` :root{--electric:#00D9FF; --purple:#8B5CF6; --cyan:#06FFA5} `}</style>

      <Navigation active={active} sections={sections} refs={refs} />
      <Hero refs={refs} />
      <About refs={refs} />
      <Skills refs={refs} skills={skills} />
      <Projects refs={refs} projects={projects} />
      <Services refs={refs} />
      <Contact refs={refs} />
      <Footer />
    </div>
  );
}
