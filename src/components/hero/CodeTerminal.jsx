import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
  [
    "$ npm run build",
    "vite v6.4.2 building for production...",
    "✓ 2529 modules transformed.",
    "✓ bundle optimized in 2.5s",
    "$ deploy --prod",
    "Live at https://mahipal.dev"
  ],
  [
    "$ git checkout -b feature/premium-motion",
    "Switched to a new branch 'feature/premium-motion'",
    "$ git commit -m \"feat: add interactive hero and smooth rails\"",
    "[feature/premium-motion] 9a2f1c1 polished interactions",
    "$ git push origin feature/premium-motion",
    "remote: Pull request created successfully."
  ],
  [
    "$ npm run test",
    " PASS src/components/hero/CodeTerminal.test.jsx",
    " PASS src/sections/ProjectsSection.test.jsx",
    "Test Suites: 2 passed, 2 total",
    "$ npm run lint",
    "✔ No lint errors found."
  ]
];

function CodeTerminal() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typed, setTyped] = useState([]);
  const [isResetting, setIsResetting] = useState(false);
  const activeScript = scenarios[scenarioIndex];

  useEffect(() => {
    if (isResetting) {
      const resetTimer = setTimeout(() => {
        setTyped([]);
        setLineIndex(0);
        setCharIndex(0);
        setScenarioIndex((prev) => (prev + 1) % scenarios.length);
        setIsResetting(false);
      }, 1000);
      return () => clearTimeout(resetTimer);
    }

    if (lineIndex >= activeScript.length) {
      const loopTimer = setTimeout(() => setIsResetting(true), 1700);
      return () => clearTimeout(loopTimer);
    }

    const line = activeScript[lineIndex];
    const isCommand = line.startsWith("$");
    const delay = isCommand ? 22 : 14;

    const timer = setTimeout(() => {
      if (charIndex < line.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setTyped((prev) => [...prev, line]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeScript, charIndex, isResetting, lineIndex]);

  const currentLine = useMemo(() => {
    if (lineIndex >= activeScript.length) return "";
    return activeScript[lineIndex].slice(0, charIndex);
  }, [activeScript, charIndex, lineIndex]);

  return (
    <div className="terminal-card relative h-[460px] overflow-hidden rounded-3xl p-0">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[52px] h-12 bg-gradient-to-b from-neon/15 to-transparent"
        animate={{ y: [0, 320, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />
      <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <p className="font-mono text-xs text-white/60">~/workspace/mahipal-portfolio</p>
      </div>

      <div className="absolute inset-0 top-[49px] bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px)] bg-[size:100%_32px] opacity-50" />

      <div className="relative space-y-3 p-5 font-mono text-sm">
        {typed.map((line, idx) => (
          <motion.div
            key={`${line}-${idx}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line.startsWith("$") ? (
              <p className="text-neon/95">
                <span className="text-cyan-300">mahipal@portfolio</span>:~{" "}
                <span className="text-white/90">{line.replace("$", "$ ")}</span>
              </p>
            ) : (
              <p className="pl-4 text-white/65">{line}</p>
            )}
          </motion.div>
        ))}

        {lineIndex < activeScript.length ? (
          <p className="pt-2 text-neon/90">
            {currentLine.startsWith("$") ? (
              <>
                <span className="text-cyan-300">mahipal@portfolio</span>:~{" "}
                <span>{currentLine.replace("$", "$ ")}</span>
              </>
            ) : (
              <span className="pl-4 text-white/65">{currentLine}</span>
            )}
            <span className="inline-block h-4 w-[7px] animate-pulse bg-neon/85 align-middle" />
          </p>
        ) : (
          <p className="pt-2 text-neon/90">
            mahipal@portfolio:~$ <span className="inline-block h-4 w-[7px] animate-pulse bg-neon/85 align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}

export default CodeTerminal;
