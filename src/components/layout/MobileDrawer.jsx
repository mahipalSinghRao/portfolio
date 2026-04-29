import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navItems } from "../../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

function MobileDrawer({ open, onClose, activeId, theme, setTheme }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[65] bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] h-screen w-72 border-l border-white/10 bg-[#060b12] p-5 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-sm text-neon">Navigation</p>
              <button type="button" onClick={onClose} className="rounded-md border border-white/15 p-1.5 text-white/80">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={onClose}
                  className={`rounded-lg px-3 py-2 text-sm uppercase tracking-[0.16em] ${
                    activeId === item ? "bg-neon/20 text-neon" : "text-white/75"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-5">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileDrawer;
