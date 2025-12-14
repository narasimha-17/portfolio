import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
      
      {/* 1. Background decorative elements (Using standard classes only) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-white pb-2">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's turn your ideas into reality.
          </p>
        </div>

        {/* 2. Glass Card */}
        <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input with Tailwind-only Floating Label */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Name" 
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1 text-xs text-slate-400 transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-400"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1 text-xs text-slate-400 transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-400"
              >
                Your Email
              </label>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-1 text-xs text-slate-400 transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-400"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`
                w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform duration-200
                ${status === "sent" 
                  ? "bg-green-600 cursor-default" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:scale-[1.02] active:scale-95"
                }
              `}
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                "Send Message"
              )}
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
}