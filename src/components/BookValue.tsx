"use client";

import React from "react";
import { motion } from "framer-motion";

export const BookValue: React.FC = () => {
  const pillars = [
    {
      word: "Experience",
      description: "Direct personal encounters gathered over 8–9 years of independent travel.",
    },
    {
      word: "Information",
      description: "Accurate tabulations of deities, sthalas, routes, and sacred theerthams.",
    },
    {
      word: "Reflection",
      description: "Contemplative appreciation of sacred architecture, rivers, and atmosphere.",
    },
    {
      word: "Pilgrimage",
      description: "Elevating routine journeys into conscious, soul-stirring spiritual sadhana.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Synthesized Harmony
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
          More Than a Guide
        </h2>
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light max-w-2xl mb-16">
          An integrated synthesis uniting personal presence, rigorous data, and
          timeless spiritual reflection.
        </p>

        {/* Four Large Words Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#EAE5D9]">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start group"
            >
              <span className="font-mono text-xs text-[#8A5A24] font-medium tracking-widest mb-2">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal tracking-tight mb-3 group-hover:text-[#8A5A24] transition-colors">
                {item.word}
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed font-light text-center md:text-left">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
