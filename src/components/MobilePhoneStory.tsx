"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Feather, Type, Check } from "lucide-react";

export const MobilePhoneStory: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic & Storytelling */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Dedication & Craft
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
              A Book Written on a Mobile Phone
            </h2>

            <p className="font-serif italic text-xl md:text-2xl text-[#8A5A24] mb-8 leading-relaxed">
              Without a computer or laptop, every single sentence of this extensive
              English volume was typed keystroke by keystroke on a smartphone.
            </p>

            <div className="space-y-5 text-[#6B6B6B] text-base font-light leading-relaxed mb-8">
              <p>
                In an era dominated by modern computing suites and editorial
                agencies, the creation of <em>Thirtha Yatra</em> stands as a quiet
                testament to singular perseverance. The author did not own a
                computer or laptop during the drafting of this manuscript.
              </p>
              <p>
                Instead, during long train journeys between kshetras, quiet
                evenings at temple guest houses, and daily hours of reflection,
                the entire manuscript—detailing hundreds of sacred spots, deity
                forms, and historical chronicles—was composed patiently on a
                mobile handset.
              </p>
            </div>

            {/* Respectful takeaway points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EAE5D9] text-xs text-[#171717] uppercase tracking-wider font-light">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]" />
                <span>Zero Commercial Production Aids</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]" />
                <span>Pure Personal Dedication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Mobile Phone-Inspired Archival Screen Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[340px] bg-[#F8F6F0] p-6 border border-[#EAE5D9] shadow-sm relative"
            >
              {/* Minimal Device Frame Graphic (Artisanal, paper-like, not a glossy tech mockup) */}
              <div className="border border-[#EAE5D9] bg-white p-6 relative">
                {/* Minimal Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE5D9] text-[10px] uppercase font-mono tracking-widest text-[#8A5A24]">
                  <span>Manuscript Draft</span>
                  <span>100% Mobile Keyed</span>
                </div>

                {/* Excerpt Simulation */}
                <div className="space-y-3 font-serif text-sm text-[#171717] leading-relaxed select-none opacity-90">
                  <p className="font-semibold text-xs tracking-wider uppercase text-[#8A5A24]">
                    THIRTHA YATRA • FIELD NOTE
                  </p>
                  <p className="italic text-xs text-[#6B6B6B]">
                    &ldquo;Arrived at the sanctum at dusk. The stone steps cool after the noon sun. Every pillar tells of ancient sculptors...&rdquo;
                  </p>
                  <p className="text-xs text-[#171717] leading-relaxed">
                    Thousands of lines chronicling temple history, sacred theerthams, and deity lineages typed word by word on a handheld screen.
                  </p>
                </div>

                {/* Bottom Cursor Indicator */}
                <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-[10px] text-[#6B6B6B] font-mono">
                  <span>CHAR: 284,000+</span>
                  <span className="inline-block w-2 h-3 bg-[#8A5A24] animate-pulse" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] font-light">
                  Archival Manuscript Origin
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
