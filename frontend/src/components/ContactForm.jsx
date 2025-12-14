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
    // I slightly deepened the gradient here so the transparent glass effect looks better
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 pb-2">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's turn your ideas into reality.
          </p>
        </div>

        {/* CHANGE 1: THE MAIN CARD CONTAINER
           - Changed bg-white/70 to bg-white/20 (Much more transparent)
           - Changed border to border-white/30 (Subtler border)
        */}
        <div className="max-w-lg mx-auto bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl p-8 md:p-10">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                // CHANGE 2: THE INPUT FIELDS
                // - Changed bg-white to bg-white/40 (Semi-transparent)
                // - Changed border to border-white/50 to match the glass look
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/40 border border-white/50 text-slate-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
                placeholder="Name" 
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1 text-xs text-slate-600 font-semibold transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-700 peer-focus:font-semibold"
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
                 // CHANGE 2 applied here too
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/40 border border-white/50 text-slate-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1 text-xs text-slate-600 font-semibold transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-700 peer-focus:font-semibold"
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
                 // CHANGE 2 applied here too
                className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/40 border border-white/50 text-slate-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all shadow-sm"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-1 text-xs text-slate-600 font-semibold transition-all 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-700 peer-focus:font-semibold"
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
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:scale-[1.02] active:scale-95"
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