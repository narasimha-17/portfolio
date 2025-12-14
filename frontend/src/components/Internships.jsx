import React from "react";

export default function Internships({ items = [] }) {
  return (
    <section id="internships" className="mt-20">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-10 text-center">
        Internships
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
  {items.map((intern, index) => (
    <div
      key={index}
      className="internship-card animate-zoom"
    >
      <InternCard data={intern} />
    </div>
  ))}
</div>

        
      
    </section>
  );
}

function InternCard({ data }) {
  return (
    <div
      className="
        w-[230px] h-[300px] rounded-2xl bg-white 
        shadow-xl border p-6 flex flex-col items-center
        transition-all
      "
    >
      <div className="text-6xl mb-4">{getEmoji(data.company)}</div>

      <h3 className="text-xl font-bold text-center">{data.company}</h3>

      <p className="text-md text-slate-600 text-center mt-1">
        {data.role} · {data.duration}
      </p>

      <p className="text-sm text-slate-700 text-center mt-4 leading-relaxed px-1">
        {data.highlights}
      </p>
    </div>
  );
}

function getEmoji(company) {
  const map = {
    Genospark: "🚀",
    "Infosys Springboard": "🏢",
    TechSaksham: "🎓",
    Google: "🌐",
    "Tata Forage": "🏭",
    BCG: "📊"
  };
  return map[company] || "💼";
}
