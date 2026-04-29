/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        card: "rgba(255, 255, 255, 0.06)",
        neon: "#52F7D4",
        accent: "#8B5CF6"
      },
      boxShadow: {
        neon: "0 0 24px rgba(82, 247, 212, 0.45)",
        soft: "0 12px 50px rgba(0, 0, 0, 0.3)"
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 20% 20%, rgba(82,247,212,0.15), transparent 38%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.15), transparent 40%)"
      }
    }
  },
  plugins: []
};
