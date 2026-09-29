"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Author: React.FC = () => {
  return (
    <section id="author" className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Author Portrait in Sacred Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square w-full bg-white p-3 border border-[#EAE5D9] shadow-sm">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/author-journey.jpg"
                  alt="Author documenting ancient temples during field visits"
                  fill
                  className="object-cover grayscale contrast-105"
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] font-light">
                Documenting Sacred Heritage
              </span>
            </div>
          </motion.div>

          {/* Right Column: Author Biography & Firsthand Research Emphasis */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                09 / Dedicated Research
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal leading-[1.1] mb-8">
              About the Author
            </h2>

            {/* Prominent Callout: Firsthand Visits Requirement */}
            <div className="p-6 bg-white border border-[#EAE5D9] mb-8 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#8A5A24] mt-2 shrink-0" />
                <p className="font-serif italic text-lg md:text-xl text-[#171717] leading-relaxed">
                  &ldquo;The information in this book was collated after personal
                  visits to these places by the author.&rdquo;
                </p>
              </div>
            </div>

            <p className="text-[#6B6B6B] text-base leading-relaxed font-light mb-6">
              Driven by an abiding reverence for India&apos;s spiritual ethos and
              architectural brilliance, the author undertook an extensive personal
              pilgrimage across Bharat.
            </p>

            <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light mb-8">
              Rather than compiling second-hand summaries, each kshetra, deity
              tradition, and sacred precinct in this guide is the result of
              direct observation, detailed notes, and firsthand field documentation.
            </p>

            {/* Verification highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EAE5D9]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
                <CheckCircle2 size={16} className="text-[#8A5A24]" /> Firsthand Field Notes
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
                <CheckCircle2 size={16} className="text-[#8A5A24]" /> Authentic Sthala Puranas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
