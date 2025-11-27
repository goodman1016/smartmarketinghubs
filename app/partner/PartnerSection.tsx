"use client";

import { motion } from "framer-motion";

export default function PartnerSection() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Become a{" "}
          <span className="text-[#C5A46E]">Strategic Partner</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-300 mt-6 text-lg"
        >
          Collaborate with us to drive innovation, scale new markets,
          and deliver unmatched value to clients worldwide.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8 }}
          className="h-[3px] bg-[#C5A46E] mx-auto mt-10 shadow-[0_0_20px_#C5A46E]"
        />
      </section>

      {/* PARTNERSHIP BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-12">

        {[
          {
            title: "Revenue Sharing",
            desc: "Earn predictable revenue through co-engagements, referrals, and joint solutions.",
            icon: "💰",
          },
          {
            title: "Co-Branded Solutions",
            desc: "Deliver premium, jointly-developed AI & digital transformation solutions.",
            icon: "🤝",
          },
          {
            title: "Priority Support",
            desc: "Your team receives elevated access, faster response, and high-touch support.",
            icon: "⚡",
          },
          {
            title: "Lead Exchange",
            desc: "Access our extended global network for opportunity sharing and enterprise introductions.",
            icon: "🌍",
          },
          {
            title: "Marketing & Events",
            desc: "We collaborate on webinars, content, campaigns, and in-person events.",
            icon: "📣",
          },
          {
            title: "Technical Enablement",
            desc: "Partner teams get training, playbooks, templates, and engineering resources.",
            icon: "🧠",
          },
        ].map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-xl border border-white/10 bg-white/[0.02]
                       hover:bg-white/[0.05] hover:border-[#C5A46E] transition duration-300
                       shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(197,164,110,0.25)]"
          >
            <div className="text-4xl mb-4">{partner.icon}</div>
            <h3 className="text-2xl font-semibold text-[#C5A46E] mb-3">
              {partner.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{partner.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* PARTNER LOGOS */}
      <section className="max-w-7xl mx-auto px-6 pb-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Trusted by Elite Organizations
        </motion.h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          We collaborate with companies that prioritize innovation, scalability, and long-term strategic value.
        </p>

        {/* Placeholder logos (you can replace with real ones in /public ) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 opacity-70">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex justify-center"
            >
              <div className="w-28 h-12 bg-white/10 rounded-md" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white/[0.03] py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build a{" "}
            <span className="text-[#C5A46E]">High-Impact Partnership?</span>
          </h2>

          <p className="text-gray-300 mt-4">
            Let’s explore opportunities to create long-term value together.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 rounded-lg bg-[#C5A46E] text-black text-lg font-semibold
                       hover:bg-[#b99753] transition shadow-[0_0_20px_rgba(197,164,110,0.5)]"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
