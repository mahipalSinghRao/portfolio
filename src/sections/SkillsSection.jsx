import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import { skills } from "../data/portfolioData";

function SkillsSection() {
  return (
    <section id="skills" className="snap-section container-pad mt-24 backdrop-blur-[14px]">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Tech Stack"
        subtitle="Core technologies I work with to build modern, scalable web applications."
      />
      <div className="terminal-card mt-10 overflow-hidden rounded-2xl p-5">
        <div className=" rounded-2xl p-5">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="inline-flex rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm text-neon"
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>

        <div className="rounded-2xl p-5">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="inline-flex rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-sm text-neon"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

  );
}

export default SkillsSection;
