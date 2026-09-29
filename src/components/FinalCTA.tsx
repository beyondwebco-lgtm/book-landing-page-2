"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#FFFFFF] border-t border-[#EAE5D9] relative overflow-hidden text-center">
      {/* Subtle temple architectural background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg
          viewBox="0 0 800 800"
          className="w-[900px] h-[900px] text-[#8A5A24] stroke-current fill-none stroke-[0.8]"
        >
          <path d="M 400 100 L 415 140 L 385 140 Z" />
          <path d="M 370 140 L 430 140 L 450 220 L 350 220 Z" />
          <path d="M 330 220 L 470 220 L 490 320 L 310 320 Z" />
          <path d="M 290 320 L 510 320 L 540 440 L 260 440 Z" />
          <path d="M 240 440 L 560 440 L 600 600 L 200 600 Z" />
          <circle cx="400" cy="400" r="300" strokeDasharray="3 6" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.15] mb-6">
            Discover the Sacred Geography of Bharat.
          </h2>

          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Explore the temples, thirtha kshetras, rivers, mountains and stories
            that have shaped India&apos;s spiritual heritage.
          </p>

          <div className="flex justify-center">
            <Link
              href="#book"
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#171717] text-white text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#8A5A24] transition-all duration-300 shadow-sm"
            >
              <span>Explore Thirtha Yatra</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
