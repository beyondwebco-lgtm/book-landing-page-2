"use client";

import React from "react";
import { motion } from "framer-motion";

export const FeaturedQuote: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#FFFFFF] border-t border-[#EAE5D9] relative overflow-hidden flex items-center justify-center">
      {/* Very faint background mandala element */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg
          viewBox="0 0 600 600"
          className="w-[800px] h-[800px] text-[#8A5A24] stroke-current fill-none stroke-[0.8]"
        >
          <circle cx="300" cy="300" r="280" />
          <circle cx="300" cy="300" r="200" strokeDasharray="3 6" />
          <circle cx="300" cy="300" r="120" />
          <circle cx="300" cy="300" r="60" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Subtle Accent Mark */}
          <div className="flex justify-center mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-[1.25] tracking-tight mb-8">
            &ldquo;Every temple in this holy land has a story to tell.&rdquo;
          </h2>

          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-8 bg-[#8A5A24]/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A5A24] font-medium">
              Thirtha Yatra
            </span>
            <span className="h-[1px] w-8 bg-[#8A5A24]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
