import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function MouseReactiveFX() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.5 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 220);
      mouseY.set(event.clientY - 220);
      setTrail((prev) => [...prev.slice(-10), { id: Date.now(), x: event.clientX, y: event.clientY }]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[30] hidden md:block">
      <motion.div className="mouse-spotlight" style={{ x, y }} />
      {trail.map((dot, index) => (
        <motion.span
          key={dot.id}
          className="particle-trail"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.02 }}
          style={{ left: dot.x, top: dot.y }}
        />
      ))}
    </div>
  );
}

export default MouseReactiveFX;
