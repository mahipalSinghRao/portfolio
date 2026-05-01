import { useRef, useEffect } from "react";

function ThreeDCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const frame = useRef(null);

  const state = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // 🔥 smooth animation loop (THIS is the real fix)
  const animate = () => {
    const s = state.current;

    // lerp (smooth follow)
    s.x += (s.targetX - s.x) * 0.08;
    s.y += (s.targetY - s.y) * 0.08;

    if (cardRef.current) {
      cardRef.current.style.transform = `
        rotateX(${s.x}deg)
        rotateY(${s.y}deg)
        scale(1.02)
      `;
    }

    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    state.current.targetX = py * -12;
    state.current.targetY = px * 12;
  };

  const handleMouseLeave = () => {
    state.current.targetX = 0;
    state.current.targetY = 0;

    if (cardRef.current) {
      cardRef.current.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    }
  };

  return (
    <div style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`rounded-2xl transition-transform duration-10 will-change-transform ${className}`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ThreeDCard;