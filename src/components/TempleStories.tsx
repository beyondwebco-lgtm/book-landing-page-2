"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const TempleStories: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Sanctum Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full p-2 bg-white border border-[#EAE5D9] shadow-sm">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/temple-heritage.jpg"
                  alt="Temple corridor atmosphere"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                07 / Living Legends
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.2] mb-8">
              &ldquo;Every temple in this holy land has a story to tell.&rdquo;
            </h2>

            <blockquote className="font-serif italic text-lg md:text-xl text-[#8A5A24] leading-relaxed mb-6">
              &ldquo;Every temple in this holy land has a story to tell, a legend
              to elevate our spirits and is a sacred space for all of us to
              experience inner joy.&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-[#EAE5D9] flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              <span className="w-2 h-2 rounded-full bg-[#8A5A24]" />
              <span>Thirtha Yatra — Sacred Chronicle</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
