import React from "react";

export default function Skills({ items = [] }) {
  return (
    <section id="skills" className="mt-16">
      <h2 className="text-3xl font-bold text-slate-900">Skills</h2>

      <div className="overflow-hidden relative w-full py-10">
        <div className="marquee">
          <div className="marquee-inner flex gap-8">
            {items.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}

            {/* Duplicate for seamless infinite scroll */}
            {items.map((skill, i) => (
              <SkillCard key={`clone-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="min-w-[180px] px-6 py-6 rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center hover:scale-105 transition cursor-pointer select-none">
      
      {/* ANIMATED EMOJI */}
      <div className="text-5xl mb-2 emoji-anim">
        {getEmojiForSkill(skill)}
      </div>

      <p className="text-lg font-semibold text-slate-700">{skill}</p>
    </div>
  );
}

function getEmojiForSkill(skill) {
  const map = {
    Python: "🐍",
    Flask: "🔥",
    React: "⚛️",
    TensorFlow: "🧠",
    PyTorch: "🤖",
    SQL: "🗄️",
    Docker: "🐳",
    Git: "🔧",
    "Computer Vision": "👁️",
    NLP: "💬"
  };

  return map[skill] || "✨";
}
