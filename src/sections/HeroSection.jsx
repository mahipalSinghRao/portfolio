import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import CodeTerminal from "../components/hero/CodeTerminal";
import { highlights, profile } from "../data/portfolioData";
import { useTypewriter } from "../components/common/TypeHooks";
import ThreeDCard from "../components/common/ThreeDCard";



function HeroSection() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const typedRole = useTypewriter([
    "Full Stack Developer",
    "React & Node Specialist",
    "Data Science & AI Engineer",
    "UI/UX Designer"
  ]);

  return (
    <section id="home" className="snap-section container-pad relative min-h-[78vh] overflow-hidden pt-8 ">
      <motion.div
        className="hero-blob hero-blob-a mt-24"
        animate={{ x: [0, 42, -30, 0], y: [0, -36, 50, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: "100%" }}
      />
      <motion.div
        className="hero-blob hero-blob-b mt-24"
        animate={{ x: [0, -34, 24, 0], y: [0, 18, -24, 0], scale: [1, 0.9, 1.08, 1] }}/*  */
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: "100%" }}
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 md:mt-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-neon/35 bg-neon/10 px-3 py-1 text-xs text-neon/90 backdrop-blur-[14px]">
            <Terminal size={13} />
            {profile.availability}
          </p>
          {/* <h1 className="hero-name mt-5 text-4xl font-semibold leading-tight md:text-6xl">{profile.name}</h1> */}
          <h1 className="hero-name shine-text mt-5 text-4xl md:text-6xl font-semibold backdrop-blur-[14px]">
            {profile.name}
          </h1>

          {/* <h2 className="hero-role mt-2 text-xl md:text-2xl">{profile.role}</h2> */}
          <h2 className="hero-role mt-2 text-xl md:text-2xl font-mono ">
            {typedRole}
            <span className="cursor">|</span>
          </h2>
          <p className="mt-5 max-w-xl font-mono text-sm text-white/75 md:text-base backdrop-blur-[14px]">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              onMouseMove={(e) => {
                const box = e.currentTarget.getBoundingClientRect();
                setPoint({
                  x: (e.clientX - (box.left + box.width / 2)) * 0.2,
                  y: (e.clientY - (box.top + box.height / 2)) * 0.2
                });
              }}
              onMouseLeave={() => setPoint({ x: 0, y: 0 })}
              animate={point}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="inline-flex items-center gap-2 rounded-md border border-neon/45 bg-neon/10 px-6 py-3 text-sm font-semibold text-neon shadow-neon"
            >
              Start Collaboration
              <ArrowUpRight size={17} />
            </motion.a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/40 px-6 py-3 font-mono text-sm text-white/80 transition hover:border-neon/45"
            >
              View Code Projects
              <Terminal size={16} />
            </a>
          </div>

          <div className=" mt-8 grid max-w-lg grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="terminal-card hero-highlights rounded-xl p-3 text-center backdrop-blur-[14px] flex flex-col items-center justify-center"
              >
                <p className="text-lg font-semibold text-neon">{item.value}</p>
                <p className="text-xs text-white/60">{item.label}</p>
              </div>
            ))}
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl"
        >
          <CodeTerminal />
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;
