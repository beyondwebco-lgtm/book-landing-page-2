"use client";

import React from "react";
import { motion } from "framer-motion";

export const Chapters: React.FC = () => {
  const chapterList = [
    {
      number: "01",
      title: "Sacred Temples",
      description: "Architectural sanctums, ancient shrines, and living temples consecrated across Bharat.",
    },
    {
      number: "02",
      title: "Thirtha Kshetras",
      description: "Holy pilgrim spots revered for centuries as spiritual vortexes of grace and purification.",
    },
    {
      number: "03",
      title: "Holy Rivers",
      description: "The sacred waterways, ghats, and sangams shaping civilizational worship.",
    },
    {
      number: "04",
      title: "Sacred Mountains",
      description: "Hills and mountain peaks dedicated to divine penance, quietude, and supreme realization.",
    },
    {
      number: "05",
      title: "Legends & Traditions",
      description: "Sthala puranas, sacred narratives, and timeless spiritual lore passed down through generations.",
    },
    {
      number: "06",
      title: "Places Associated With Saints & Rishis",
      description: "Sites blessed by the presence, tapasya, and teachings of revered Indian sages.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                06 / Table of Contents Structure
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal">
              Inside Thirtha Yatra
            </h2>
          </div>
          <p className="text-xs text-[#6B6B6B] uppercase tracking-[0.16em] font-light max-w-xs">
            Systematic organization by sacred typology & spiritual significance
          </p>
        </div>

        {/* Chapter Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapterList.map((chap, idx) => (
            <motion.div
              key={chap.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 bg-[#F8F6F0]/60 border border-[#EAE5D9] group hover:bg-[#F8F6F0] hover:border-[#8A5A24]/40 transition-all duration-300"
            >
              <div className="font-mono text-xs text-[#8A5A24] font-semibold tracking-widest mb-6">
                CHAPTER {chap.number}
              </div>
              <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3 group-hover:text-[#8A5A24] transition-colors">
                {chap.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                {chap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
