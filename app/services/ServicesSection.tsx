"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Workflow,
  PenTool,
  Database,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Users
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">

      {/* ================================================= */}
      {/*                     HERO SECTION                  */}
      {/* ================================================= */}
      <section className="relative w-full min-h-[70vh] flex items-center">

        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/img/hero-services.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Transform Your Business With
              <br />
              <span className="bg-gradient-to-r from-[#C5A46E] to-[#8F6B3C] bg-clip-text text-transparent">
                AI-Driven Strategy
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              We help brands, founders, and enterprises scale faster through modern AI, automation, 
              and elite strategic execution tailored to your industry.
            </p>

            <motion.a
              href="/contact"
              initial={false}
              whileHover={{
                y: -3,
                boxShadow: "0px 8px 20px rgba(197,164,110,0.35)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block mt-10 px-10 py-4 text-lg font-semibold 
                        bg-[#C5A46E] text-black rounded-lg shadow-md
                        transition-all duration-300"
            >
              Book Strategy Call
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/*              WHY CHOOSE US — PREMIUM              */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold leading-tight"
            >
              Why Companies Choose  
              <span className="text-[#C5A46E]"> SmartMarketingHubs</span>
            </motion.h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              We combine AI innovation, elite consulting discipline, and modern design to help 
              businesses scale faster, operate smarter, and stand out in competitive markets.
            </p>

            <div className="mt-10 space-y-8">
              {[
                { icon: <BrainCircuit className="w-8 h-8 text-[#C5A46E]" />, title: "AI-Native Strategy", desc: "Built from the ground up for automation, intelligence, and scalable systems." },
                { icon: <ShieldCheck className="w-8 h-8 text-[#C5A46E]" />, title: "Enterprise Execution", desc: "Architecture, processes, and reliability trusted by organizations at scale." },
                { icon: <Sparkles className="w-8 h-8 text-[#C5A46E]" />, title: "Premium Brand Experience", desc: "High-end creative and messaging that elevate your authority." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-[#C5A46E]">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-12 text-center">
              <div>
                <h3 className="text-4xl font-bold text-[#C5A46E]">50+</h3>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#C5A46E]">$10M+</h3>
                <p className="text-gray-400 text-sm">Client Growth</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#C5A46E]">98%</h3>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/img/whyus.jpg"
              alt="Business strategy team working together"
              className="rounded-2xl shadow-[0_0_40px_rgba(197,164,110,0.25)]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/*        CAPABILITIES — LUXURY PREMIUM SECTION      */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-40">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center tracking-tight"
        >
          What We <span className="text-[#C5A46E]">Deliver</span>
        </motion.h2>

        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto text-lg">
          High-level strategic capabilities engineered to accelerate growth, unlock efficiency, 
          and transform your business with modern AI.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-20">

          {[
            { icon: <Lightbulb />, title: "AI Strategy Development", 
              desc: "Blueprints, assessments, and AI roadmaps engineered for growth & impact." },

            { icon: <Workflow />, title: "Business Process Automation", 
              desc: "Automate operations end-to-end to remove bottlenecks and increase velocity." },

            { icon: <PenTool />, title: "Brand & Creative Systems", 
              desc: "Premium messaging, visuals, and positioning designed for authority." },

            { icon: <Rocket />, title: "GTM & Execution Architecture", 
              desc: "Launch systems, funnels, and execution frameworks that scale." },

            { icon: <Database />, title: "Data Infrastructure & Insights", 
              desc: "Pipelines, dashboards, and intelligence layers that power decisions." },

            { icon: <Users />, title: "C-Suite & Growth Advisory", 
              desc: "Strategic partnership supporting founders, executives, and leadership teams." },

          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="
                p-10 rounded-3xl 
                bg-gradient-to-b from-[#111]/80 to-black 
                border border-white/10 
                hover:border-[#C5A46E]/50 
                hover:shadow-[0_0_45px_rgba(197,164,110,0.18)] 
                transition-all duration-500
              "
            >
              <div className="text-[#C5A46E] text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================================================= */}
      {/*                 PROCESS — NEW TIMELINE            */}
      {/* ================================================= */}
      <section className="max-w-5xl mx-auto px-6 py-32">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center"
        >
          Our <span className="text-[#C5A46E]">Process</span>
        </motion.h2>

        <div className="mt-20 space-y-20 relative">

          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5A46E] to-transparent opacity-40"></div>

          {[
            { step: "01", title: "Discovery", 
              desc: "Deep-dive systems analysis, stakeholder interviews, and opportunity mapping." },

            { step: "02", title: "Strategy & Design", 
              desc: "We craft intelligent architectures, customer journeys, and execution frameworks." },

            { step: "03", title: "Deployment & Optimization", 
              desc: "We implement, measure impact, refine systems, and accelerate performance." },

          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="flex gap-8 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A46E] text-black flex items-center justify-center text-lg font-bold shadow-lg">
                  {item.step}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#C5A46E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>
      {/* ================================================= */}
      {/*                  FINAL CALL TO ACTION             */}
      {/* ================================================= */}
      <section className="py-28 bg-gradient-to-b from-black to-[#0b0b0b] border-t border-white/10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold"
        >
          Let’s Build What’s <span className="text-[#C5A46E]">Next</span>
        </motion.h2>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Whether you're scaling operations, redefining your brand, or adopting AI — 
          we help you move faster with precision and clarity.
        </p>

        <motion.a
          href="/contact"
          whileHover={{
            y: -4,
            boxShadow: "0px 10px 30px rgba(197,164,110,0.35)"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="
            inline-block mt-10 px-12 py-4 
            rounded-lg text-lg font-semibold 
            bg-[#C5A46E] text-black 
            shadow-md transition-all
          "
        >
          Book Strategy Call
        </motion.a>
      </section>
    </div>
  );
}
