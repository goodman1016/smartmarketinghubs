"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 
                   bg-black/40 backdrop-blur-xl 
                   border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* LOGO */}
          <a href="/" className="text-2xl font-bold tracking-wide">
            Smart<span className="text-[#C5A46E]">Marketing</span>Hubs
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-10 text-lg font-medium">
            {["about", "services", "partner", "contact"].map((item) => (
              <a
                key={item}
                href={`/${item}`}
                className="relative group"
              >
                <span className="text-gray-300 group-hover:text-[#C5A46E] transition">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                {/* GOLD GLOW BOTTOM BAR */}
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[#C5A46E] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
        <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-3xl text-white"
            onClick={() => setOpen(true)}
            >
            <HiMenu />
        </button>

        </div>
      </motion.nav>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col p-8"
          >
            <button
            type="button"
            aria-label="Close menu"
            className="text-4xl self-end text-white"
            onClick={() => setOpen(false)}
            >
            <HiX />
            </button>

            <div className="flex flex-col space-y-8 text-3xl mt-20 text-center">
                {["about", "services", "partner", "contact"].map((item) => (
                <a
                    key={item}
                    href={`/${item}`}
                    className="relative group tracking-wide font-medium"
                >
                    <span className="text-gray-300 group-hover:text-[#C5A46E] transition-colors duration-300">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>

                    {/* PREMIUM GOLD UNDERLINE + GLOW */}
                    <span
                    className="absolute left-0 bottom-[-6px] h-[2px] w-0 
                    bg-[#C5A46E] group-hover:w-full transition-all duration-500
                    shadow-[0_0_8px_#C5A46E]"
                    />
                </a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
