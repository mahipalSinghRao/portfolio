// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// function ExperienceSlider({ experience }) {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         duration: 25,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden mt-12">

//       {/* Fade edges */}
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent z-10" />
//       <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent z-10" />

//       <motion.div
//         className="flex gap-6 w-max"
//         animate={controls}

//         onMouseEnter={() => controls.stop()}   // 🛑 pause
//         onMouseLeave={() => {
//           controls.start({
//             x: ["0%", "-50%"],
//             transition: {
//               duration: 25,
//               ease: "linear",
//               repeat: Infinity,
//             },
//           });
//         }} // ▶ resume
//       >
//         {[...experience, ...experience].map((job, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ y: -10, scale: 1.05 }}
//             className="min-w-[320px] max-w-[320px] terminal-card rounded-2xl p-5 relative group"
//           >
//             {/* Glow */}
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_35px_rgba(var(--neon-rgb),0.25)]" />

//             <h3 className="text-lg font-semibold">{job.role}</h3>
//             <p className="text-xs text-neon/80">{job.period}</p>
//             <p className="text-sm text-white/60">{job.company}</p>

//             <div className="mt-3 h-[1px] bg-white/10" />

//             <ul className="mt-3 space-y-2 text-sm text-white/75">
//               {job.points.slice(0, 3).map((point, i) => (
//                 <li key={i} className="flex gap-2">
//                   <span className="text-neon">▹</span>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default ExperienceSlider;

import SectionHeading from "../components/common/SectionHeading";
import PremiumExperienceSlider from "../components/layout/PremiumExperienceSlider";
import { experience } from "../data/portfolioData";

function ExperienceSection() {
  return (
    <section id="experience" className="container-pad mt-28 ">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        subtitle="A journey through my experience, roles, and real-world contributions."
      />

      <PremiumExperienceSlider experience={experience} />
    </section>
  );
}

export default ExperienceSection;