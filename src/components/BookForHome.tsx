"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bookmark, Gift, Heart, Home, Library, SunMedium } from "lucide-react";

export const BookForHome: React.FC = () => {
  const facets = [
    {
      icon: Library,
      title: "Valued Home Library Addition",
      desc: "A permanent reference anchor on the home bookshelf, consulted before journeys and cherished between travels.",
    },
    {
      icon: SunMedium,
      title: "Parayana Grantha",
      desc: "Suited for regular devotional reading and reflection, turning daily study into an uplifting mental pilgrimage.",
    },
    {
      icon: Heart,
      title: "A Companion for Elders",
      desc: "Brings the darshan of sacred temples directly into the hands of grandparents and elders unable to undertake strenuous travel.",
    },
    {
      icon: Gift,
      title: "An Auspicious Gift",
      desc: "A thoughtful, blessed gift for housewarmings, auspicious ceremonies, retirements, and festive occasions.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Enduring Presence
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            A Book to Keep
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            More than a one-time travel read, <em>Thirtha Yatra</em> was created to
            abide quietly in the home, offering peace, orientation, and
            spiritual inspiration across generations.
          </p>
        </div>

        {/* 4 Facets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#F8F6F0] border border-[#EAE5D9] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5D9] flex items-center justify-center text-[#8A5A24] mb-6">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
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
