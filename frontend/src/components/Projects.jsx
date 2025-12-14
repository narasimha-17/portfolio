import React from "react";

export default function Projects({items=[]}){
  return (
    <section className="mt-12" id="projects">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map(p=>(
          <div key={p.id} className="card hover:shadow-lg transition">
            <div className="h-40 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center">
              {p.img ? <img src={p.img} alt={p.title} className="object-cover w-full h-full" /> : <div className="text-slate-400">Image</div>}
            </div>
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map(t=> <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
