"use client";

import React from "react";
import { Table, Sparkles, MapPin, Compass } from "lucide-react";

export const ReferenceCompilation: React.FC = () => {
  const categories = [
    {
      title: "Dasavatara Kshetras",
      badge: "Vaishnava Heritage",
      description:
        "Sacred shrines celebrating the ten divine incarnations of Lord Vishnu across diverse historical geographies.",
      details: "State-wise documentation from coastal Andhra to northern valleys.",
    },
    {
      title: "12 Jyotir Lingas",
      badge: "Shaiva Sanctuaries",
      description:
        "The primordial radiant pillars of Lord Shiva consecrated from Kedarnath in the Himalayas to Rameshwaram by the sea.",
      details: "Sthala puranas, sanctum traditions, and authentic temple timings.",
    },
    {
      title: "Shakti Peetams",
      badge: "Devi Shrines",
      description:
        "Hallowed spots consecrated by the sacred presence and manifestation of the Divine Mother across Bharat.",
      details: "Living pilgrim lineages, river theerthams, and spiritual ethos.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Classification System
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12]">
              Organized for the Yatri
            </h2>
          </div>

          <p className="text-[#6B6B6B] text-xs sm:text-sm font-light max-w-md">
            Categorized systematically to allow pilgrims to plan meaningful journeys aligned with their devotional lineage and spiritual goals.
          </p>
        </div>

        {/* Compact 3-Card Layout / Responsive Slider on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 overflow-x-auto scrollbar-none pb-2 -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-7 md:p-8 border border-[#EAE5D9] flex flex-col justify-between group hover:border-[#8A5A24]/60 transition-all duration-300 shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5D9]/70">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A5A24] font-semibold">
                    {cat.badge}
                  </span>
                  <span className="font-mono text-xs text-[#8A5A24]/60">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3 group-hover:text-[#8A5A24] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE5D9]/60 text-[11px] text-[#8A5A24] font-mono">
                {cat.details}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Reference Table Highlight */}
        <div className="p-6 md:p-8 bg-white border border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#F8F6F0] border border-[#EAE5D9] flex items-center justify-center text-[#8A5A24] shrink-0">
              <Table size={20} />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal mb-1">
                Dedicated Reference Table
              </h4>
              <p className="text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed max-w-2xl">
                A structured master index at the end of the volume enabling readers to quickly cross-reference temples by deity, state, river, and regional accessibility.
              </p>
            </div>
          </div>

          <span className="shrink-0 text-xs font-mono uppercase tracking-widest text-[#8A5A24] px-4 py-2 border border-[#8A5A24]/30 bg-[#F8F6F0]">
            Master Index Included
          </span>
        </div>
      </div>
    </section>
  );
};
