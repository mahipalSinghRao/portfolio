import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { projects } from "../data/portfolioData";
import ThreeDCard from "../components/common/ThreeDCard";

function ProjectsSection() {
  return (
    <section id="projects" className="snap-section container-pad mt-24">
      <SectionHeading
        eyebrow="Work"
        title="Selected Projects"
        subtitle="Real projects from your resume, presented with a premium card layout."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">

        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="pro-card-article terminal-card group rounded-2xl p-5 hover:border-neon/55 hover:shadow-neon"
          >

            <p className="text-xs uppercase tracking-[0.18em] text-neon/90">{project.period}</p>
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm text-white/70">{project.description}</p>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-emerald-300/90">
              {`git clone ${project.links.github.replace("https://github.com/", "")}`}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="pro-tech rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs ">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-xs">
              {project.links.live ? (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neon">
                  <ExternalLink size={14} />
                  Live
                </a>
              ) : null}
              <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/80">
                <Github size={14} />
                Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>



    </section>
  );
}

export default ProjectsSection;
