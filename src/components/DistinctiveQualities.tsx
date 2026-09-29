"use client";

import React from "react";
import { motion } from "framer-motion";

export const DistinctiveQualities: React.FC = () => {
  const qualities = [
    {
      number: "01",
      title: "Firsthand Pilgrimage Experience",
      detail:
        "Every site documented from authentic, personal on-location visits over nearly a decade.",
    },
    {
      number: "02",
      title: "Simple, Direct Language",
      detail:
        "Written without convoluted jargon, allowing the spiritual heart of each temple to shine through clearly.",
    },
    {
      number: "03",
      title: "Concise Introductions",
      detail:
        "Capturing the sacred essence, presiding deity, and sthala tradition in focused, striking summaries.",
    },
    {
      number: "04",
      title: "Category-Wise Organization",
      detail:
        "Structured by sacred lineages like Jyotir Lingas, Shakti Peetams, and Dasavatara kshetras.",
    },
    {
      number: "05",
      title: "Enduring Reference Value",
      detail:
        "Comprehensive indexes and tabular records providing clarity whenever journeys are planned.",
    },
    {
      number: "06",
      title: "Information Gathered Over Years",
      detail:
        "The cumulative fruit of 8–9 years of patient travel, direct notes, and persistent documentation.",
    },
    {
      number: "07",
      title: "Useful for Prospective Pilgrims",
      detail:
        "Enables yatris to familiarize themselves with customs, orientations, and theerthams beforehand.",
    },
    {
      number: "08",
      title: "Cross-Generational Appeal",
      detail:
        "Equally enriching for young seekers discovering roots and elders cherishing sacred memories.",
    },
    {
      number: "09",
      title: "Gift-Worthy Physical Book",
      detail:
        "Bound and designed with archival care, making it an auspicious keepsake for families.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Distinctive Hallmarks
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            What Makes Thirtha Yatra Different
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            A restrained, fact-grounded guide created without commercial
            hyperbole, focused entirely on authentic sacred heritage.
          </p>
        </div>

        {/* 3x3 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 bg-white border border-[#EAE5D9] flex flex-col justify-between group hover:border-[#8A5A24]/40 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-[#8A5A24] font-semibold tracking-widest block mb-4">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3 group-hover:text-[#8A5A24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
