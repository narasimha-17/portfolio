import React, { useState } from "react";
import { SparklesIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function StunningContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      // Reset status after showing success message
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    // Main Container with rich background gradient
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-[#1a0b2e] to-slate-900"
    >
      {/* Ambient background light blobs */}
      <div className="bg-glow-blob w-96 h-96 bg-purple-600 top-0 -left-20"></div>
      <div className="bg-glow-blob w-96 h-96 bg-indigo-600 bottom-0 right-0 animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading with gradient text */}
        <div className="mb-16 animate-fadeInUp">
          <span className="flex items-center justify-center gap-2 text-indigo-400 font-medium uppercase tracking-wider mb-4 text-sm">
            <SparklesIcon className="h-5 w-5" />
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
            Let's Create Something Amazing
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Drop me a message
            below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* The Glass Card */}
        <div
          className="
            max-w-xl mx-auto 
            p-8 md:p-12 rounded-[2rem] 
            backdrop-blur-2xl bg-white/5 
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            border border-white/10
            animate-fadeInUp animation-delay-300
            relative
          "
        >
          {/* subtle inner glow border */}
          <div className="absolute inset-0 rounded-[2rem] border border-indigo-500/20 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder=" " // Crucial for floating label CSS
                className="floating-input peer"
              />
              <label className="floating-label">Your Name</label>
              {/* Bottom glow effect on focus */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=" "
                className="floating-input peer"
              />
              <label className="floating-label">Your Email Address</label>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder=" "
                className="floating-input h-40 resize-none peer pt-8"
              ></textarea>
              <label className="floating-label">Your Message</label>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full peer-focus:w-full"></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`
                w-full py-4 rounded-xl 
                font-bold text-lg tracking-wide
                flex items-center justify-center gap-3
                shadow-2xl relative overflow-hidden group
                transition-all duration-300
                ${
                  status === "sent"
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white hover:scale-[1.02] active:scale-95"
                }
                ${status === "sending" ? "opacity-80 cursor-wait" : ""}
              `}
            >
              {status === "sending" ? (
                <>
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                </>
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}