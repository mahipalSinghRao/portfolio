import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import { education } from "../data/portfolioData";
import ThreeDCard from "../components/common/ThreeDCard";

function EducationSection() {
    return (
        <section id="education" className="snap-section container-pad mt-28">
            <SectionHeading
                eyebrow="Education"
                title="Academic Journey"
                subtitle="A journey combining technical learning with practical and real-world understanding."
            />

            <div className="mt-14 relative">
                {/* 🔥 Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-white/10 md:-translate-x-1/2" />

                <div className="space-y-16">
                    {education.map((item, idx) => {
                        const isLeft = idx % 2 === 0;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                                    }`}
                            >
                                {/* 🔥 Timeline dot */}
                                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-neon shadow-[0_0_12px_rgba(var(--neon-rgb),0.9)] z-10" />

                                {/* 🔥 Card */}
                                <div className={`w-full pl-10 md:pl-0 md:w-[46%] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                                    <ThreeDCard>
                                        <div className="relative rounded-xl p-[1px] group overflow-hidden">

                                            {/* 🔥 Animated Border */}
                                            <div className="absolute inset-0 rounded-xl animate-border-theme" />

                                            {/* 🔥 Actual Card */}
                                            <div className="relative rounded-xl bg-[#020617] p-6">
                                                {/* Degree */}
                                                <h3 className="text-lg font-semibold leading-snug">
                                                    {item.degree}
                                                </h3>

                                                <p className="mt-1 text-sm text-neon">
                                                    {item.institute}
                                                </p>

                                                <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/50 font-mono">
                                                    <span>{item.duration}</span>
                                                    <span>•</span>
                                                    <span>{item.location}</span>
                                                    <span>•</span>
                                                    <span>GPA: {item.gpa}</span>
                                                </div>

                                                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </ThreeDCard>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default EducationSection;