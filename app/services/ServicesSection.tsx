"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 text-center pt-10 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Our{" "}
          <span className="text-[#C5A46E]">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          High-impact solutions designed to accelerate growth, automate operations,
          and transform your organization using modern AI & digital strategy.
        </motion.p>

        {/* GOLD LINE */}
        <div className="w-24 h-[3px] bg-[#C5A46E] mx-auto mt-10 shadow-[0_0_15px_#C5A46E]" />
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-12">

        {[
          {
            title: "AI Strategy & Consulting",
            desc: "Blueprints and strategic roadmaps that help your company adopt AI responsibly and profitably.",
            icon: "01",
          },
          {
            title: "Automation & Operations",
            desc: "Custom AI workflows that reduce manual work, streamline processes, and increase efficiency.",
            icon: "02",
          },
          {
            title: "Brand Positioning",
            desc: "Premium brand architecture and messaging that strengthens market authority.",
            icon: "03",
          },
          {
            title: "Go-To-Market Planning",
            desc: "Strategic launch frameworks that help products reach customers faster and generate traction.",
            icon: "04",
          },
          {
            title: "Data Engineering",
            desc: "Pipeline design, architecture, and analytics systems that convert information into insights.",
            icon: "05",
          },
          {
            title: "Executive Advisory",
            desc: "One-on-one advisory support for CEOs, founders, and leadership teams navigating growth.",
            icon: "06",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-xl border border-white/10 bg-white/[0.02]
                       hover:bg-white/[0.05] hover:border-[#C5A46E] transition-all duration-300
                       shadow-[0_0_0px_rgba(0,0,0,0.0)] hover:shadow-[0_0_20px_rgba(197,164,110,0.25)]"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-[#C5A46E]">{service.title}</h3>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* HOW WE WORK SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center"
        >
          Our <span className="text-[#C5A46E]">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mt-4"
        >
          A proven methodology designed to deliver clarity, speed, and measurable results.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-3 gap-12">

          {[
            {
              step: "01",
              title: "Discovery",
              desc: "We analyze goals, challenges, and opportunities to understand your growth potential.",
            },
            {
              step: "02",
              title: "Strategy & Design",
              desc: "We build a clear roadmap, systems architecture, and actionable plan for execution.",
            },
            {
              step: "03",
              title: "Execution & Optimization",
              desc: "We implement solutions, measure performance, and optimize for continuous scale.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-xl border border-white/10 bg-white/[0.02]
                         hover:bg-white/[0.05] hover:border-[#C5A46E] transition-all duration-300"
            >
              <h3 className="text-[#C5A46E] text-5xl font-bold mb-4">{item.step}</h3>
              <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}
