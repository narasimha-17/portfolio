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
    }, 1200);
  };

  return (
    <section id="contact" className="mt-32 mb-24 text-center">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-10">
        Contact Me
      </h2>

      <div
        className="
          max-w-xl mx-auto 
          p-8 rounded-3xl 
          backdrop-blur-xl bg-white/30 
          shadow-2xl border border-white/40
          animate-fadeIn
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full p-4 rounded-xl 
                bg-white/50 backdrop-blur-sm 
                border border-white/60
                text-slate-900
                focus:ring-2 focus:ring-indigo-400
                outline-none transition
              "
            />
            <label className="floating-label">Your Name</label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full p-4 rounded-xl 
                bg-white/50 backdrop-blur-sm 
                border border-white/60
                text-slate-900
                focus:ring-2 focus:ring-indigo-400
                outline-none transition
              "
            />
            <label className="floating-label">Your Email</label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="
                w-full p-4 rounded-xl 
                h-32 resize-none
                bg-white/50 backdrop-blur-sm 
                border border-white/60
                text-slate-900
                focus:ring-2 focus:ring-indigo-400
                outline-none transition
              "
            ></textarea>
            <label className="floating-label">Your Message</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-xl 
              bg-gradient-to-r from-indigo-500 to-purple-600 
              text-white font-semibold 
              shadow-lg hover:shadow-xl 
              hover:scale-[1.02] transition-all
              active:scale-95
            "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-600 font-semibold mt-2">
              Message Sent! I will reply soon 😊
            </p>
          )}

        </form>
      </div>
    </section>
  );
}
