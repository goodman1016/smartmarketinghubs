"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[100vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/img/hero-dark.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-black/70" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center px-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Expert Consulting Solutions  
            <span className="block text-[#C5A46E]">
              That Scale Your Business
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            High-impact strategies designed for modern organizations.
            We help companies grow faster, operate smarter, and dominate their market.
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#C5A46E] text-black font-medium rounded-lg hover:bg-[#b7945e] transition"
            >
              Book Strategy Call
            </a>

            <a
              href="/partner"
              className="px-8 py-3 border border-[#C5A46E] text-[#C5A46E] rounded-lg hover:bg-[#C5A46E] hover:text-black transition"
            >
              Become a Partner
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold">
            High-Performance <span className="text-[#C5A46E]">Consulting</span>
          </h3>
          <p className="mt-4 text-gray-400 text-lg">
            We deliver strategic solutions that accelerate business performance.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="p-8 border border-white/10 rounded-xl bg-black/40 hover:bg-black/60 transition">
              <h4 className="text-2xl font-semibold text-[#C5A46E]">Growth Strategy</h4>
              <p className="mt-4 text-gray-400">
                Data-driven blueprints that unlock predictable growth and stronger revenue.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-xl bg-black/40 hover:bg-black/60 transition">
              <h4 className="text-2xl font-semibold text-[#C5A46E]">Automation & Operations</h4>
              <p className="mt-4 text-gray-400">
                AI-powered workflows and optimized systems that increase efficiency.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-xl bg-black/40 hover:bg-black/60 transition">
              <h4 className="text-2xl font-semibold text-[#C5A46E]">Brand Positioning</h4>
              <p className="mt-4 text-gray-400">
                Premium brand strategy that elevates trust and strengthens market authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold">
              Meet Your Strategic Growth Partner
            </h3>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              With 16+ years of experience in enterprise consulting, AI, digital strategy,
              and operational transformation, we help companies solve complex problems and scale intelligently.
            </p>

            <a
              href="/about"
              className="inline-block mt-8 px-6 py-3 border border-[#C5A46E] text-[#C5A46E] rounded-lg hover:bg-[#C5A46E] hover:text-black transition"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-80 bg-[url('/about-preview.jpg')] bg-cover bg-center rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* ================= PARTNER CTA ================= */}
      <section className="py-24 px-6 bg-black text-center">
        <h3 className="text-4xl font-bold">
          Interested in a <span className="text-[#C5A46E]">Strategic Partnership?</span>
        </h3>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          We're currently selecting long-term partners for consulting,
          digital products, and high-value collaboration opportunities.
        </p>

        <a
          href="/partner"
          className="inline-block mt-8 px-10 py-4 bg-[#C5A46E] text-black font-semibold rounded-lg hover:bg-[#b8945d] transition"
        >
          Become a Partner
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-black border-t border-white/10 text-center text-gray-400 text-sm">
        © 2025 SmartMarketingHubs — All Rights Reserved.
      </footer>
    </main>
  );
}
