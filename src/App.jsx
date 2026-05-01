import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "./components/layout/CustomCursor";
import MouseReactiveFX from "./components/layout/MouseReactiveFX";
import Navbar from "./components/layout/Navbar";
import ProgressRail from "./components/layout/ProgressRail";
import SocialRail from "./components/layout/SocialRail";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import GithubSection from "./sections/GithubSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import { navItems } from "./data/portfolioData";
import Footer from "./sections/Footer";
import EducationSection from "./sections/EducationSection";
import FloatingCodeGlobal from "./components/layout/FloatingCodeGlobal";

function App() {
  const [activeId, setActiveId] = useState("home");
  const [theme, setTheme] = useState("cyber");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    navItems.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-clip bg-grid-radial">
      <FloatingCodeGlobal />
      <CustomCursor />
      <MouseReactiveFX />
      <div className="pointer-events-none absolute inset-0 code-grid opacity-30" />
      <motion.div style={{ y: parallaxY }} className="pointer-events-none absolute inset-0 opacity-40" />
      <Navbar
        activeId={activeId}
        theme={theme}
        setTheme={setTheme}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <SocialRail />
      <ProgressRail progress={scrollYProgress} />
      <main className="snap-container pt-28">
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <HeroSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <AboutSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <ProjectsSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <GithubSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <SkillsSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <ExperienceSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <EducationSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <ContactSection />
          </motion.div>
          <motion.div layout transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <Footer />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
