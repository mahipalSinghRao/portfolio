import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow ? <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-neon/90">// {eyebrow}</p> : null}
      <h2 className="section-title">
        <span className="text-white/55">&lt;</span>
        {title}
        <span className="text-white/55">/&gt;</span>
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
