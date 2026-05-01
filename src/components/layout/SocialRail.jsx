import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { profile } from "../../data/portfolioData";

function SocialRail() {
  return (
    <aside className="fixed bottom-10 left-5 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-3">
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="rail-icon">
          <Github size={16} />
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rail-icon">
          <Linkedin size={16} />
        </a>
        <a href={`mailto:${profile.email}`} className="rail-icon">
          <Mail size={16} />
        </a>
        <a href={profile.links.instagram} className="rail-icon">
          <Instagram size={16} />
        </a>
        <span className="mt-1 h-16 w-px bg-white/20" />
      </div>
    </aside>
  );
}

export default SocialRail;
