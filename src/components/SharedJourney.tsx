"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Footprints } from "lucide-react";

export const SharedJourney: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="p-3 bg-white border border-[#EAE5D9] shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/author-wife-journey.jpg"
                  alt="Author Ramesh Gangashetty and his wife during the book release and pilgrimage journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] font-light">
                A Devotional Partnership • 8–9 Years
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                The Pilgrimage Companions
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.08] mb-6">
              The Journey Was Shared
            </h2>

            <p className="font-serif italic text-xl text-[#8A5A24] mb-8">
              A decade of sacred travel undertaken hand-in-hand as a quiet family sadhana.
            </p>

            <div className="space-y-5 text-[#6B6B6B] text-base font-light leading-relaxed mb-8">
              <p>
                The extensive field visits that form the foundation of{" "}
                <em>Thirtha Yatra</em> were not conducted in solitude. The author
                undertook almost all of these sacred journeys across India
                together with his wife.
              </p>
              <p>
                From boarding remote regional trains to walking parikramas around
                ancient temple corridors, they shared the physical rigors,
                spiritual solace, and deep joy of each kshetra. This shared
                companionship brought warmth, balance, and human empathy to the
                entire compilation.
              </p>
            </div>

            {/* Respectful metadata note */}
            <div className="pt-6 border-t border-[#EAE5D9] flex items-center gap-4 text-xs tracking-wider uppercase text-[#171717]">
              <span className="w-2 h-2 rounded-full bg-[#8A5A24]" />
              <span>Independent Pilgrimage • Mutual Devotion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
