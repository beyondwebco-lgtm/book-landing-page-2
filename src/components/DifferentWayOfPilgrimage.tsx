"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sunrise, Wind, Waves, Footprints, Sparkles, Moon } from "lucide-react";

export const DifferentWayOfPilgrimage: React.FC = () => {
  const pilgrimageSteps = [
    {
      icon: Footprints,
      phase: "Phase 1: Exploration",
      title: "Walking Around During the Day",
      description:
        "Arriving in town and walking around the temple perimeter and local streets to absorb the setting before entering.",
    },
    {
      icon: Wind,
      phase: "Phase 2: Presence",
      title: "Observing Atmosphere & Ambience",
      description:
        "Quietly witnessing the devotion of local pilgrims, the traditional sounds, and the spiritual energy of the sacred precincts.",
    },
    {
      icon: Waves,
      phase: "Phase 3: Sacred Nature",
      title: "Appreciating Nature & Holy Rivers",
      description:
        "Sitting by the flowing riverbanks or holy water theerthams, honoring the natural geography that cradles the temple.",
    },
    {
      icon: Moon,
      phase: "Phase 4: Consecrated Darshan",
      title: "Taking Darshan Later in the Day",
      description:
        "Entering the inner sanctum with a calm, receptive heart after experiencing the sanctity of the entire kshetra.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Ethos of Travel
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            A Different Way of Experiencing Pilgrimage
          </h2>
          <p className="font-serif italic text-xl text-[#8A5A24] mb-6">
            Beyond the haste of ritual checklists: absorbing the soul of each holy kshetra.
          </p>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            As noted by cultural chronicler S. V. M. Sastry, the author followed
            a distinctive, personal philosophy when visiting sacred places. Rather
            than merely rushing for early-morning queue darshan and departing for
            the next destination, the author preferred to genuinely experience the
            place first.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pilgrimageSteps.map((step, idx) => {
            const Icon = step.icon;
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
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A5A24] block mb-2">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-2xl text-[#171717] font-normal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note clarifying personal approach */}
        <div className="p-6 bg-white border border-[#EAE5D9] text-xs text-[#6B6B6B] font-light leading-relaxed flex items-center gap-4">
          <Sparkles size={16} className="text-[#8A5A24] shrink-0" />
          <span>
            <em>Note on Approach:</em> This rhythm reflects the author&apos;s personal pilgrim methodology documented across years of field research, shared to invite readers into deeper contemplative engagement.
          </span>
        </div>
      </div>
    </section>
  );
};
