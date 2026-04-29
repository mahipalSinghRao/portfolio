import { MapPin, Mail, Phone } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/portfolioData";

function AboutSection() {
  return (
    <section id="about" className="snap-section container-pad mt-24">
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        subtitle="Profile summary and direct contact details from your resume."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <article className="terminal-card rounded-2xl p-6">
          <p className="text-base leading-relaxed text-white/80">{profile.summary}</p>
        </article>
        <aside className="terminal-card rounded-2xl p-6">
          <div className="space-y-4 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-neon" />
              {profile.location}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-neon" />
              {profile.phone}
            </p>
            <p className="flex items-center gap-2">
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
