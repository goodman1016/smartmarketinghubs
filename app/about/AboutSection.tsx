"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="bg-black text-white">
      {/* SECTION WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        {/* TITLE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            About{" "}
            <span className="text-[#C5A46E]">SmartMarketingHubs</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a premium consulting partner helping businesses scale faster 
            through AI-powered strategy, operational excellence, and intelligent automation.
          </p>
        </motion.div>

        {/* GOLD DIVIDER */}
        <div className="w-24 h-[3px] bg-[#C5A46E] mx-auto mt-10 shadow-[0_0_15px_#C5A46E]" />

        {/* 2-COLUMN SHOWCASE */}
        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">
          
          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Strategic Growth Partner
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              With 16+ years of experience across enterprise consulting, AI engineering, 
              digital strategy, and transformation — we design systems that help organizations 
              grow faster, operate smarter, and increase revenue predictably.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              From startups to global teams, we bring clarity, execution, and a data-driven 
              blueprint that converts complexity into scalable growth.
            </p>
          </motion.div>

          {/* IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(197,164,110,0.35)]"
          >
            <img
              src="/img/preview2.jpg"
              alt="Team Strategy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* VALUES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-14 mt-24"
        >
          {/* CARD */}
          {[
            {
              title: "Our Mission",
              desc: "Unlock scalable growth using intelligent systems, AI automation, and modern digital strategy.",
            },
            {
              title: "Our Values",
              desc: "Precision. Transparency. Execution. No fluff — only measurable results and strategic clarity.",
            },
            {
              title: "Our Philosophy",
              desc: "Smart systems outperform hard work. We build leverage that amplifies efficiency and revenue.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] 
                         hover:border-[#C5A46E] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#C5A46E] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </section>
    </div>
  );
}
