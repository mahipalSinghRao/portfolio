const themes = [
  { id: "cyber", label: "Cyber" },
  { id: "matrix", label: "Matrix" },
  { id: "midnight", label: "Midnight" }
];

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1">
      {themes.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setTheme(item.id)}
          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] transition ${
            theme === item.id ? "bg-neon/20 text-neon" : "text-white/65 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
