import React from "react";

export default function Recognition({ items = [] }) {
  return (
    <section id="recognition" className="mt-24">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-10 text-center">
        Recognition
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {items.map((recog, index) => (
          <div
            key={index}
            className="
              recog-card
              w-[250px] h-[180px] p-6 rounded-2xl bg-white shadow-lg border
              flex flex-col justify-center text-center
              hover:scale-105 hover:shadow-2xl hover:bg-white/90
              transition-all duration-500
            "
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-4xl mb-2 animate-glow">{getEmoji(recog.type)}</div>
            <p className="font-semibold text-lg">{recog.title}</p>
            <p className="text-sm text-slate-600 mt-1">{recog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function getEmoji(type) {
  const map = {
    mentor: "🧑‍🏫",
    award: "🏆",
    hackathon: "⚡",
    appreciation: "🌟"
  };
  return map[type] || "⭐";
}
