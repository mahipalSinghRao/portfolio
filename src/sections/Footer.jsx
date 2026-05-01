import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
            <div className="container-pad py-8 flex flex-col items-center justify-between gap-6 md:flex-row">

                {/* Left */}
                <p className="text-sm text-white/60 text-center md:text-left">
                    © {new Date().getFullYear()} Mahipal. All rights reserved.
                </p>

                {/* Center (optional tagline) */}
                <p className="text-xs text-white/40 font-mono">
                    Built with React + Tailwind + ❤️
                </p>

                {/* Right (socials) */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/mahipalSinghRao/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/70 hover:text-neon transition"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/70 hover:text-neon transition"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="mahipalsingh450@email.com"
                        className="text-white/70 hover:text-neon transition"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;