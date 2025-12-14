import React from "react";

export default function Hero(){
  return (
    <section className="pt-8 pb-10 grid md:grid-cols-2 gap-8 items-center">
      {/* left */}
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hi, I'm Narasimha<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary1 to-accent">Digital</span> 
        </h1>

        <p className="text-slate-600 max-w-xl">
          I build AI-driven systems and full-stack apps that solve real problems — from model research to production deployment.
        </p>

        <div className="flex gap-4 items-center">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">How it Works</button>
        </div>

        <div className="flex gap-8 mt-6">
          <div>
            <div className="text-2xl font-bold text-primary1">10+</div>
            <div className="text-sm text-slate-600">Major Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">20+</div>
            <div className="text-sm text-slate-600">Collaborations</div>
          </div>
        </div>
      </div>
      {/* right: circular illustration + floating badge */}
      <img
  src="https://i.pinimg.com/1200x/53/49/72/534972596d512f789df903994fb83a68.jpg"
  alt="profile"
  className="
    w-[290px] h-[170px] 
    md:w-[520px] md:h-[520px]
    rounded-full object-cover 
    shadow-2xl border-4 border-white
  "
  onError={(e)=> e.target.style.display='none' }
/>
    </section>
  );
}
