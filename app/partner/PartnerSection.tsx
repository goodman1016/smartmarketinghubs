"use client";

import { motion } from "framer-motion";

export default function PartnerSection() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ======================================================= */}
      {/*               PREMIUM HERO — CURVED GOLD WAVE           */}
      {/* ======================================================= */}
      <section className="relative w-full pt-28 pb-40">

        {/* Curved Gold Wave Background */}
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1440 600"
            className="w-full h-full opacity-20"
            preserveAspectRatio="none"
          >
            <path
              fill="#C5A46E"
              d="M0,200 C300,350 600,50 900,200 C1200,350 1440,150 1440,150 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-5"
            >
              {/* Vertical Gold Bar */}
              <div className="w-[6px] h-40 bg-gradient-to-b from-[#C5A46E] to-[#8F6B3C] rounded-full shadow-[0_0_15px_#C5A46E]" />

              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  Strategic
                  <br />
                  <span className="text-[#C5A46E]">Partnerships</span>
                </h1>

                <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-lg">
                  Build elite collaborations with a modern AI-powered agency
                  delivering innovation, growth, and enterprise-level execution.
                </p>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="inline-block mt-10 px-12 py-4 bg-[#C5A46E] text-black text-lg font-semibold rounded-lg shadow-xl hover:shadow-[#C5A46E]/40 transition"
                >
                  Become a Partner
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Image — Floating, Premium */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#C5A46E]/20 to-transparent blur-xl"></div>

            <img
              src="/img/partner-hero.jpg"
              alt="Partnership collaboration"
              className="relative z-10 rounded-3xl w-full h-[480px] object-cover shadow-[0_0_45px_rgba(197,164,110,0.25)]"
            />
          </motion.div>

        </div>
      </section>

      {/* ======================================================= */}
      {/*         BENEFITS — FLOATING GLASS PREMIUM CARDS         */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-8 pb-40">
        <h2 className="text-4xl font-bold text-center">
          Benefits of Becoming a <span className="text-[#C5A46E]">Partner</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {[
            ["💰", "Revenue Sharing", "Earn recurring revenue via co-engagements & joint AI offerings."],
            ["🤝", "Co-Branded Solutions", "Build enterprise-grade products powered by our AI systems."],
            ["⚡", "Priority Access", "Get exclusive access to our technology before anyone else."],
            ["🌍", "Lead Exchange", "Global intros to enterprise clients, VCs, and technology partners."],
            ["📣", "Joint Marketing", "Premium co-branded PR, case studies, events, and launches."],
            ["🧠", "Engineering Enablement", "Technical playbooks, training, and direct engineering support."],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10
                         shadow-[0_0_30px_rgba(197,164,110,0.15)]
                         hover:shadow-[0_0_50px_rgba(197,164,110,0.35)]
                         hover:border-[#C5A46E] transition-all"
            >
              <div className="text-4xl mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold text-[#C5A46E]">{title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================= */}
      {/*             LOGO STRIP — MINIMAL LUXURY STYLE           */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <h2 className="text-4xl font-bold text-center mb-6">Trusted By Leaders</h2>

        <div className="flex flex-wrap justify-center gap-16 opacity-80 mt-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-32 h-14 bg-white/10 rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* ======================================================= */}
      {/*               FINAL CTA — GOLDEN GLASS PANEL            */}
      {/* ======================================================= */}
      <section className="py-28 bg-gradient-to-b from-black to-[#0b0b0b] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-14 rounded-[2.5rem] bg-white/[0.05] border border-white/10 backdrop-blur-xl
                       shadow-[0_0_60px_rgba(197,164,110,0.35)] text-center"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Let’s Build a{" "}
              <span className="text-[#C5A46E]">World-Class Partnership</span>
            </h2>

            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              Work with us to create intelligent, scalable, and transformative outcomes for global clients.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-14 py-4 rounded-xl bg-[#C5A46E] text-black
                         font-semibold text-lg shadow-xl hover:bg-[#b99753] transition-all"
            >
              Contact Our Team
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
