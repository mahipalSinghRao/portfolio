import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 24, stiffness: 230, mass: 0.4 });
  const smoothY = useSpring(y, { damping: 24, stiffness: 230, mass: 0.4 });

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-neon/60 bg-neon/20 blur-[1px] md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}

export default CustomCursor;
