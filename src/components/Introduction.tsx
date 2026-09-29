"use client";

import React from "react";
import { motion } from "framer-motion";

export const Introduction: React.FC = () => {
  const elementsOfIdentity = [
    "Temples & Gopurams",
    "Holy Rivers & Sangams",
    "Sacred Mountains & Hills",
    "Saints & Great Rishis",
    "Ancient Vedic Scriptures",
    "Timeless Philosophy",
    "Sacred Art & Iconography",
    "Classical Literature",
    "Living Traditions of Yoga",
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-y border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            01 / The Core Philosophy
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal leading-[1.15] max-w-5xl tracking-tight">
            &ldquo;India is more than a geography.&rdquo;
          </h2>
          <p className="mt-6 font-serif italic text-xl md:text-2xl text-[#8A5A24] max-w-4xl leading-relaxed">
            &ldquo;India will just be a mere geography without its religious and
            spiritual ethos combined with moral values and civilization.&rdquo;
          </p>
        </motion.div>

        {/* Clean Two-Column Layout (No Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-[#EAE5D9]">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal mb-4">
              The Spiritual Tapestry of Bharat
            </h3>
            <p className="text-[#6B6B6B] text-base leading-relaxed font-light">
              Across millennia, the identity of the subcontinent was woven not
              merely by administrative borders, but by the continuous footsteps
              of pilgrims traveling from river to mountain, from sanctum to
              sanctum. This book documents that living landscape.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A5A24] font-medium mb-6">
              Shaped through centuries by:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
              {elementsOfIdentity.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 border-b border-[#EAE5D9]/80 text-[#171717] text-sm tracking-wide font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
