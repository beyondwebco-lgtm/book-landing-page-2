"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, HeartHandshake, FileText } from "lucide-react";

export const PersonalJourney: React.FC = () => {
  const steps = [
    {
      icon: Eye,
      tag: "01 / DIRECT DARSHAN",
      title: "Seen",
      desc: "Every sanctum, gopuram, and holy riverbank visited directly in silence and contemplation.",
    },
    {
      icon: HeartHandshake,
      tag: "02 / LIVING TRADITION",
      title: "Experienced",
      desc: "Participating in sacred rituals, understanding regional ethos, and engaging with temple traditions.",
    },
    {
      icon: FileText,
      tag: "03 / AUTHENTIC ARCHIVE",
      title: "Documented",
      desc: "Carefully tabulating deities, historical periods, legends, and geographical coordinates.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        {/* Section Header */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            10 / The Author&apos;s Pilgrimage
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal tracking-tight mb-6">
          Seen. Experienced. Documented.
        </h2>

        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light max-w-3xl mb-16">
          The information was gathered through personal visits to the places
          included in the book. A chronicle built on patience, direct presence,
          and scholarly dedication.
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#F8F6F0]/80 border border-[#EAE5D9] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A5A24] block mb-4">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-3xl text-[#171717] font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
