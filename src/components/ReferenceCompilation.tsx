"use client";

import React from "react";
import { motion } from "framer-motion";
import { Table, Search, BookOpen, Layers, CheckCircle } from "lucide-react";

export const ReferenceCompilation: React.FC = () => {
  const categories = [
    {
      title: "Dasavatara Kshetras",
      description:
        "Sacred shrines celebrating the ten divine incarnations of Lord Vishnu across diverse geographies.",
      badge: "Vaisnava Heritage",
    },
    {
      title: "12 Jyotir Lingas",
      description:
        "The primordial radiant pillars of Lord Shiva consecrated from Kedarnath to Rameshwaram.",
      badge: "Shaiva Sanctuaries",
    },
    {
      title: "Shakti Peetams",
      description:
        "Hallowed spots consecrated by the sacred presence and manifestation of the Divine Mother.",
      badge: "Devi Shrines",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section 5: From Personal Visits to a Reference Book */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
              Methodology & Rigor
            </span>
            <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.08] mb-12">
            From Personal Visits to a Reference Book
          </h2>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-[#EAE5D9]">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal">
                Direct Observation Over Secondary Accounts
              </h3>
              <p className="text-[#6B6B6B] text-base font-light leading-relaxed">
                Rather than compiling hearsay or relying on existing tour
                catalogues, every chapter was built upon personal visits to the
                pilgrimage places. The author documented details directly on
                location—verifying temple timings, accessing river banks, and
                confirming sthala legends with local priests and elders.
              </p>
              <p className="text-[#6B6B6B] text-base font-light leading-relaxed">
                This firsthand foundation gives the book its distinct feeling of
                intimacy and authenticity, making it an invaluable resource for
                future pilgrims seeking grounded facts alongside spiritual depth.
              </p>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A5A24] font-medium block mb-6">
                Key Editorial Pillars
              </span>
              <div className="space-y-4">
                {[
                  {
                    title: "Firsthand Experience",
                    text: "Physical visits ensuring accuracy of terrain, routes, and sanctum ambience.",
                  },
                  {
                    title: "Personal Observation",
                    text: "Direct recording of temple architecture, river conditions, and local customs.",
                  },
                  {
                    title: "Systematic Compilation",
                    text: "Unifying scattered lore into an organized, comprehensive source compendium.",
                  },
                  {
                    title: "Practical Categorization",
                    text: "Structuring data so yatris can plan journeys aligned with their devotional focus.",
                  },
                  {
                    title: "Future Pilgrim Utility",
                    text: "An actionable orientation guide before embarking on sacred travel.",
                  },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-[#EAE5D9] flex items-start gap-4"
                  >
                    <CheckCircle
                      size={16}
                      className="text-[#8A5A24] mt-0.5 shrink-0"
                    />
                    <div>
                      <h4 className="font-serif text-lg text-[#171717] font-medium">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Organized for the Yatri */}
        <div className="pt-16 border-t border-[#EAE5D9]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                  Classification System
                </span>
                <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal">
                Organized for the Yatri
              </h3>
            </div>
            <p className="text-xs text-[#6B6B6B] uppercase tracking-[0.16em] font-light max-w-sm">
              Temples chronicled category-wise with cross-referencing tables
            </p>
          </div>

          <p className="text-[#6B6B6B] text-base font-light leading-relaxed max-w-3xl mb-10">
            To assist pilgrims in locating sanctuaries aligned with their
            lineage or devotional goals, the book categorizes holy sites
            systematically and includes a dedicated lookup table for quick
            orientation:
          </p>

          {/* Expandable Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-[#EAE5D9] flex flex-col justify-between group hover:border-[#8A5A24]/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A5A24] block mb-3">
                    {cat.badge}
                  </span>
                  <h4 className="font-serif text-2xl text-[#171717] font-normal mb-3 group-hover:text-[#8A5A24] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Master Lookup Table Callout */}
          <div className="p-8 bg-white border border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#8A5A24] shrink-0">
                <Table size={18} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#171717] font-normal">
                  Dedicated Reference Table
                </h4>
                <p className="text-xs text-[#6B6B6B] font-light">
                  A comprehensive master index allowing readers to quickly locate temples of interest by deity, state, and geographic significance.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-mono uppercase tracking-widest text-[#8A5A24] px-4 py-2 border border-[#8A5A24]/30 bg-[#F8F6F0]">
              Index Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
