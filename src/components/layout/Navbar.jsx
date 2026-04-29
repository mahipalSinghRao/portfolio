import { Code2, Menu } from "lucide-react";
import { navItems, profile } from "../../data/portfolioData";
import ThemeToggle from "./ThemeToggle";
import MobileDrawer from "./MobileDrawer";

function Navbar({ activeId, theme, setTheme, mobileOpen, setMobileOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-pad mt-4">
        <div className="terminal-card flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <Code2 className="text-neon" size={16} />
            {`<${profile.name.split(" ")[0]} />`}
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition ${
                  activeId === item ? "bg-neon/20 text-neon" : "text-white/75 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
          <button
            type="button"
            className="rounded-md border border-white/15 p-1.5 text-white/80 md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeId={activeId}
        theme={theme}
        setTheme={setTheme}
      />
    </header>
  );
}

export default Navbar;
