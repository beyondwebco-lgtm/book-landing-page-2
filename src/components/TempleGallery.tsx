"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const TempleGallery: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                03 / Visual Heritage
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal">
              Ancient Temple Heritage
            </h2>
          </div>
          <p className="text-[#6B6B6B] text-sm md:text-base font-light max-w-md">
            Stone that breathes prayer, centuries of devotion captured in
            timeless granite and sanctum shadows.
          </p>
        </div>

        {/* Refined Art-Book Style Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-white p-2 border border-[#EAE5D9] shadow-sm group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/temple-heritage.jpg"
                  alt="Ancient Temple Heritage corridor and Gopuram"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#6B6B6B] font-light">
              <span>Sacred Kshetra Corridor</span>
              <span className="text-[#8A5A24]">Plate I — Architecture</span>
            </div>
          </motion.div>

          {/* Secondary Supporting Image & Editorial Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden bg-white p-2 border border-[#EAE5D9] shadow-sm group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/temple-ghat.jpg"
                  alt="Sacred River Ghat at dawn"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[#6B6B6B] font-light flex items-center justify-between">
              <span>Holy River Ghats</span>
              <span className="text-[#8A5A24]">Plate II — Thirtha</span>
            </div>

            {/* Editorial Caption Card */}
            <div className="mt-8 p-6 bg-white border border-[#EAE5D9]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A5A24] font-medium block mb-2">
                Curator&apos;s Note
              </span>
              <p className="font-serif italic text-base text-[#171717] leading-relaxed">
                &ldquo;A sacred kshetra is defined as much by its flowing waters and
                silent stone steps as by its sanctum.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
