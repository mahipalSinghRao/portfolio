import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, skills, experience, projects } from "../../data/portfolioData";

const scenarios = [
  [
    "$ whoami",
    profile.name,
    profile.role,
    profile.location,
    profile.availability,
  ],

  [
    "$ skills --stack",
    ...skills.slice(0, 10),
    "...",
    "Full MERN Stack Developer",
  ],

  ...experience.map((job) => [
    `$ work --company=${job.company}`,
    job.role,
    job.period,
    job.location,
    ...job.points.slice(0, 3),
  ]),

  ...projects.map((project) => [
    `$ run project:${project.title.toLowerCase().replace(/\s+/g, "-")}`,
    project.title,
    project.period,
    project.description.slice(0, 80) + "...",
    ...project.highlights.slice(0, 5),
  ]),

  [
    "$ achievements",
    "✔ Backend performance improved by 15–30%",
    "✔ UI load time reduced by 25%",
    "✔ Built scalable MERN applications",
  ],

  [
    "$ contact --info",
    profile.email,
    profile.phone,
    "GitHub: " + profile.links.github,
  ],
  [
    " status",
    "Open for opportunities 🚀",
    "Remote / Hybrid / Relocation ready",
  ],
];

function CodeTerminal() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typed, setTyped] = useState([]);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  const activeScript = scenarios[scenarioIndex];

  // typing logic
  useEffect(() => {
    if (isResetting) {
      const t = setTimeout(() => {
        setTyped([]);
        setLineIndex(0);
        setCharIndex(0);
        setScenarioIndex((p) => (p + 1) % scenarios.length);
        setIsResetting(false);
      }, 900);
      return () => clearTimeout(t);
    }

    if (lineIndex >= activeScript.length) {
      const t = setTimeout(() => setIsResetting(true), 1400);
      return () => clearTimeout(t);
    }

    const line = activeScript[lineIndex];
    const isCmd = line.startsWith("$");
    const delay = isCmd ? 22 : 14;

    const t = setTimeout(() => {
      if (charIndex < line.length) {
        setCharIndex((p) => p + 1);
      } else {
        setTyped((p) => [...p, line]);
        setLineIndex((p) => p + 1);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [activeScript, charIndex, isResetting, lineIndex]);

  const currentLine = useMemo(() => {
    if (lineIndex >= activeScript.length) return "";
    return activeScript[lineIndex].slice(0, charIndex);
  }, [activeScript, charIndex, lineIndex]);

  // auto scroll (both directions)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
    // el.scrollLeft = el.scrollWidth;
  }, [typed, currentLine]);

  return (
    <div className="terminal-card relative h-[500px] rounded-3xl overflow-hidden">
      {/* glow sweep */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[52px] h-16 bg-gradient-to-b from-neon/15 to-transparent z-[0]"
        animate={{ y: [0, 320, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />

      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 relative z-[2]">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <p className="text-xs font-mono text-white/60">
          ~/workspace/mahipal-portfolio
        </p>
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 top-[49px] bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px)] bg-[size:100%_32px] opacity-40 pointer-events-none z-[0]" />

      {/* content */}
      <div
        ref={containerRef}
        className="relative z-[1] h-[calc(660px-52px)] overflow-auto p-5 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-white/10 text-wrap"
      >
        {typed.map((line, i) => (
          <motion.div
            key={`${line}-${i}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wrap"
          >
            {line.startsWith("$") ? (
              <p className=" text-neon/95 text-wrap">
                <span className="text-cyan-300 text-wrap">mahipal@portfolio</span>:~{" "}
                <span className="text-white/90 text-wrap">{line.replace("$", "$ ")}</span>
              </p>
            ) : (
              <p className="pl-4  text-white/65 text-wrap">
                {line}
              </p>
            )}
          </motion.div>
        ))}

        {/* typing line */}
        {lineIndex < activeScript.length && (
          <p className="text-neon/90 break-words">
            {currentLine.startsWith("$") ? (
              <>
                <span className="text-cyan-300">mahipal@portfolio</span>:~{" "}
                {currentLine.replace("$", "$ ")}
              </>
            ) : (
              <span className="pl-4 text-white/65">{currentLine}</span>
            )}
            <span className="inline-block w-[7px] h-4 bg-neon/90 ml-1 animate-pulse align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}

export default CodeTerminal;