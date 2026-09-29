"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Footprints, ShieldCheck, Sun } from "lucide-react";

export const Yatri: React.FC = () => {
  const yatriPoints = [
    {
      icon: Compass,
      title: "Preparation of Mind",
      desc: "Entering sacred spaces with contextual understanding of the deity, tradition, and historical lineage.",
    },
    {
      icon: Footprints,
      title: "Reverence on the Path",
      desc: "Approaching ancient kshetras not merely as sightseeing spots, but as sacred sanctums of penance and grace.",
    },
    {
      icon: ShieldCheck,
      title: "Structured Navigation",
      desc: "Clear tabulations and essential details to guide prospective pilgrims smoothly across varied regions.",
    },
    {
      icon: Sun,
      title: "Inner Joy & Solace",
      desc: "Transforming physical travel into an elevating spiritual pilgrimage of lasting peace.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                08 / The Pilgrim&apos;s Companion
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal leading-[1.1] mb-6">
              For the Prospective Yatri
            </h2>

            <p className="text-[#6B6B6B] text-base leading-relaxed font-light mb-8">
              The journey begins long before the first step is taken. By
              understanding the significance, sthala mahatmya, and spiritual
              ethos of each kshetra beforehand, a seeker transforms a physical
              visit into a profound yatra.
            </p>

            {/* Subtle path line indicator */}
            <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#8A5A24]">
              <span className="w-12 h-[1px] bg-[#8A5A24]" />
              <span>A Conscious Pilgrimage</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {yatriPoints.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-8 bg-[#F8F6F0]/70 border border-[#EAE5D9] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#EAE5D9] flex items-center justify-center text-[#8A5A24] mb-6">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                        {pt.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
