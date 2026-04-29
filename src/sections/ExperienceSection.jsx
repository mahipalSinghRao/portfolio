import { motion, useScroll, useSpring } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { experience } from "../data/portfolioData";

function ExperienceSection() {
  const { scrollYProgress } = useScroll();
  const lineScale = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });

  return (
    <section id="experience" className="snap-section container-pad mt-24">
      <SectionHeading
        eyebrow="Career"
        title="Experience Timeline"
        subtitle="Professional journey based on your resume roles and outcomes."
      />
      <div className="relative mt-10 pl-8">
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-neon via-accent to-transparent"
        />
        <div className="space-y-7">
          {experience.map((job, idx) => (
            <motion.article
              key={job.role + job.company}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="terminal-card relative rounded-2xl p-5"
            >
              <BriefcaseBusiness size={17} className="absolute -left-9 top-6 text-neon" />
              <p className="text-xs uppercase tracking-[0.18em] text-neon/90">{job.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{job.role}</h3>
              <p className="text-sm text-white/65">
                {job.company} - {job.location}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {job.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
