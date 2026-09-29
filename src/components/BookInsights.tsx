"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const BookInsights: React.FC = () => {
  const authorPurposes = [
    {
      verb: "Collect",
      desc: "Gathering sacred traditions, sthala puranas, and regional temple accounts across Bharat.",
    },
    {
      verb: "Curate",
      desc: "Selecting spiritually profound kshetras, holy river confluences, and sacred hill shrines.",
    },
    {
      verb: "Organize",
      desc: "Structuring vast pilgrimage knowledge by geographic regions and spiritual significance.",
    },
    {
      verb: "Tabulate",
      desc: "Presenting structured, easy-to-read reference tables for deities, locations, and historical eras.",
    },
    {
      verb: "Introduce",
      desc: "Providing succinct, profound introductions to each temple's living spirit and sacred ethos.",
    },
  ];

  const pilgrimageSteps = [
    { step: "01", title: "Discover", desc: "Uncover forgotten kshetras and sacred lineages across India." },
    { step: "02", title: "Understand", desc: "Learn the sthala puranas, deity significance, and cultural context." },
    { step: "03", title: "Plan", desc: "Practical orientation for routes, sacred seasons, and darshan ethos." },
    { step: "04", title: "Experience", desc: "Approach each kshetra with reverence, knowledge, and inner calm." },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            05 / Purpose & Practical Reference
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            &ldquo;Where are they? Which are they?&rdquo;
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            Designed as an indispensable compendium for the prospective yatri, the
            book answers the fundamental questions of sacred pilgrimage with clarity,
            reverence, and structured scholarship.
          </p>
        </div>

        {/* What the book does: Editorial Row with subtle dividers */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-10 border-y border-[#EAE5D9]">
          {authorPurposes.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] font-mono text-[#8A5A24] uppercase tracking-widest mb-2">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3">
                {item.verb}
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* DISCOVER -> UNDERSTAND -> PLAN -> EXPERIENCE Flow */}
        <div className="mt-20 pt-10">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#8A5A24] font-semibold mb-8 text-center md:text-left">
            The Yatra Progression
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilgrimageSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-[#EAE5D9] relative flex flex-col justify-between group hover:border-[#8A5A24]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#8A5A24] font-semibold">
                      {step.step}
                    </span>
                    {idx < 3 && (
                      <ArrowRight size={14} className="text-[#6B6B6B]/40 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="font-serif text-2xl text-[#171717] font-medium tracking-wide mb-3">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
