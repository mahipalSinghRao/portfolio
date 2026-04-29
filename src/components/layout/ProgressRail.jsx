import { motion } from "framer-motion";

function ProgressRail({ progress }) {
  return (
    <aside className="fixed bottom-10 right-5 z-40 hidden lg:flex">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-28 w-[2px] rounded-full bg-white/15">
          <motion.div
            style={{ scaleY: progress, transformOrigin: "bottom" }}
            className="absolute bottom-0 left-0 h-full w-[2px] rounded-full bg-neon"
          />
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</p>
      </div>
    </aside>
  );
}

export default ProgressRail;
