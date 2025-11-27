"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Let’s Start a{" "}
          <span className="text-[#C5A46E]">Meaningful Conversation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-300 mt-6 text-lg"
        >
          Whether you're seeking strategic guidance, exploring partnership
          opportunities, or need support for a project — our team is here to help.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          className="h-[3px] bg-[#C5A46E] mx-auto mt-10 shadow-[0_0_18px_#C5A46E]"
        />
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 pb-28">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-xl bg-white/[0.02] border border-white/10
                     shadow-[0_0_0px_rgba(0,0,0,0)]
                     hover:shadow-[0_0_30px_rgba(197,164,110,0.15)]
                     transition duration-300"
        >
          <h3 className="text-3xl font-semibold mb-6">Send us a message</h3>

          <form
            action="#"
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg
                           focus:border-[#C5A46E] outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg
                           focus:border-[#C5A46E] outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg
                           focus:border-[#C5A46E] outline-none transition"
                placeholder="Tell us how we can help"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#C5A46E] text-black text-lg font-semibold
                         hover:bg-[#b99753] transition shadow-[0_0_20px_rgba(197,164,110,0.4)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12"
        >
          {/* EMAIL CARD */}
          <div
            className="p-8 rounded-xl border border-white/10 bg-white/[0.02]
                       hover:bg-white/[0.05] transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#C5A46E]">
              Direct Email
            </h3>
            <p className="text-gray-300">Our team responds within 24 hours.</p>

            <a
              href="mailto:contact@smartmarketinghubs.com"
              className="inline-block mt-4 text-lg text-[#C5A46E] underline underline-offset-4
                         hover:text-white transition"
            >
              admin@smartmarketinghubs.com
            </a>
          </div>

          {/* OFFICES */}
          <div
            className="p-8 rounded-xl border border-white/10 bg-white/[0.02]
                       hover:bg-white/[0.05] transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-5 text-[#C5A46E]">
              Our Offices
            </h3>

            <div className="space-y-6 text-gray-300">
              <div>
                <p className="font-semibold text-white">United States</p>
                <p>Chicago, IL</p>
              </div>

              <div>
                <p className="font-semibold text-white">Singapore</p>
                <p>Central Business District</p>
              </div>

              <div>
                <p className="font-semibold text-white">United Kingdom</p>
                <p>London, Canary Wharf</p>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 text-[#C5A46E]">
              Connect with us
            </h3>

            <div className="flex space-x-6 text-3xl text-gray-400">
              <a href="#" className="hover:text-[#C5A46E] transition"></a>
              <a href="#" className="hover:text-[#C5A46E] transition"></a>
              <a href="#" className="hover:text-[#C5A46E] transition"></a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-300 mt-4">
            Our advisory team is ready to support your growth and help you move forward confidently.
          </p>

          <a
            href="/services"
            className="inline-block mt-8 px-10 py-4 rounded-lg bg-[#C5A46E] text-black text-lg font-semibold
                       hover:bg-[#b99753] transition shadow-[0_0_20px_rgba(197,164,110,0.5)]"
          >
            Explore Our Services
          </a>
        </div>
      </section>
    </div>
  );
}
