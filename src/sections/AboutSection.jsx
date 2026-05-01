import { MapPin, Mail, Phone } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/portfolioData";
import ThreeDGlassCard from "../components/common/ThreeDCard";

function AboutSection() {
  return (
    <section id="about" className="snap-section container-pad mt-24">
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
       subtitle="A snapshot of my journey, expertise, and direct contact details."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        
          <article className="terminal-card rounded-2xl p-6 backdrop-blur-[14px]">
            <p className="text-base leading-relaxed text-white/80 hover:text-neon/70 transition-all duration-300 cursor-text ">{profile.summary}</p>
          </article>
        

        <aside className="terminal-card rounded-2xl p-6 backdrop-blur-[14px]">
          <div className="space-y-4 text-sm text-white/80">
            <p className="flex items-center gap-2 hover:text-neon/70 transition-all duration-300 cursor-text">
              <MapPin size={16} className="text-neon" />
              {profile.location}
            </p>
            <p className="flex items-center gap-2 hover:text-neon/70 transition-all duration-300 cursor-text">
              <Phone size={16} className="text-neon" />
              {profile.phone}
            </p>
            <p className="flex items-center gap-2 hover:text-neon/70 transition-all duration-300 cursor-text">
              <Mail size={16} className="text-neon" />
              {profile.email}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;
