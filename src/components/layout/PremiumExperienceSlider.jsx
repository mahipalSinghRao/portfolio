import { experience } from "../../data/portfolioData";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const CARD_WIDTH = 340;
const GAP = 24;

function PremiumAutoCenterSlider() {
    const trackRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let frame;

        const loop = () => {
            if (!paused && trackRef.current) {
                trackRef.current.scrollLeft += 0.6;

                const maxScroll =
                    trackRef.current.scrollWidth / 2;

                if (trackRef.current.scrollLeft >= maxScroll) {
                    trackRef.current.scrollLeft = 0;
                }
            }

            frame = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(frame);
    }, [paused]);

    return (
        <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative overflow-hidden py-10 terminal-card mt-10 overflow-hidden rounded-2xl z-10 backdrop-blur-[14px]"
        >
            <div className="flex gap-6 px-[40vw] ">
                {[...experience, ...experience].map((job, i) => (
                    <motion.div
                        key={i}
                        className="group relative min-w-[340px] rounded-2xl border border-white/10 bg-[#020617] p-6 transition-all duration-300"
                    >
                        {/* 🔥 Blur Layer */}
                        <div className="transition-all duration-300 group-hover:blur-0  opacity-70 group-hover:opacity-100 ">

                            <p className="text-xs text-neon">{job.period}</p>

                            <h3 className="mt-2 text-lg font-semibold">
                                {job.role}
                            </h3>

                            <p className="text-sm text-white/60">
                                {job.company}
                            </p>

                            <ul className="mt-3 text-sm text-white/70 space-y-1">
                                {job.points.map((p, idx) => (
                                    <li key={idx}>• {p}</li>
                                ))}
                            </ul>
                        </div>

                        {/* 🔥 Center Zoom Effect */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="w-full h-full scale-100 group-hover:scale-[1.05] transition-transform duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default PremiumAutoCenterSlider;