import { motion } from "framer-motion";
import { Github, GitFork, Star } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { githubStats, pinnedRepos, profile } from "../data/portfolioData";

function GithubSection() {
  return (
    <section id="github" className="snap-section container-pad mt-24">
      <SectionHeading
        eyebrow="Open Source"
        title="GitHub Snapshot"
        subtitle="Pinned repositories highlighting my core skills and development focus."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3 backdrop-blur-[14px]">
        {githubStats.map((item) => (
          <div key={item.label} className="terminal-card rounded-xl p-4 flex  items-center justify-around">
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-neon">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3 backdrop-blur-[14px]">
        {pinnedRepos.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="terminal-card block rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-sm text-neon">{repo.name}</p>
              <Github size={16} className="text-white/65" />
            </div>
            <p className="mt-3 text-sm text-white/70">{repo.description}</p>
            <p className="mt-3 font-mono text-xs text-cyan-300">{repo.stack}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">
                <Star size={13} />
                Featured
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork size={13} />
                Active
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <a href={profile.links.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm text-neon">
        View full GitHub profile -&gt;
      </a>
    </section>
  );
}

export default GithubSection;
