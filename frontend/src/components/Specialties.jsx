import React from "react";

export default function Specialities() {
  const items = [
    {
      title: "UI/UX Design",
      emoji: "🎨",
      desc: "Short description about UI/UX Design and why it matters.",
      bg: "from-purple-200 to-purple-300"
    },
    {
      title: "Web Development",
      emoji: "💻",
      desc: "Short description about Web Development and why it matters.",
      bg: "from-blue-200 to-cyan-200"
    },
    {
      title: "Machine Learning",
      emoji: "🤖",
      desc: "Short description about ML, AI model building, and deployment.",
      bg: "from-green-200 to-emerald-200"
    },
    {
      title: "API Development",
      emoji: "🔗",
      desc: "Short description about APIs using Flask, FastAPI, and integrations.",
      bg: "from-orange-200 to-yellow-200"
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-slate-900">Our Specialities</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[28px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-slate-100 transition hover:shadow-xl hover:-translate-y-1"
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-md text-3xl`}
            >
              {item.emoji}
            </div>

            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
