import React from "react";

export default function Navbar() {
  return (
    <div
      className="
        fixed left-1/2 -translate-x-1/2 top-4 
        z-50 px-6 py-3 
        rounded-full 
        backdrop-blur-xl 
        bg-white/30 
        shadow-lg 
        border border-white/50
        flex items-center gap-6
        glass-nav
      "
    >
      <NavIcon emoji="🚀" label="Home" />
      <NavIcon emoji="🧠" label="Skills" />
      <NavIcon emoji="💻" label="Projects" />
      <NavIcon emoji="🏢" label="Internships" />
      <NavIcon emoji="🏆" label="Recognition" />
      <NavIcon emoji="✉️" label="Contact" />
    </div>
  );
}

function NavIcon({ emoji, label }) {
  return (
    <button
      className="
        w-12 h-12 rounded-full 
        flex items-center justify-center 
        text-2xl 
        bg-white/60 
        backdrop-blur-2xl 
        shadow-md 
        hover:shadow-xl hover:bg-white/80
        transition-all 
        hover:scale-110
        active:scale-95
      "
      title={label}
    >
      {emoji}
    </button>
  );
}
