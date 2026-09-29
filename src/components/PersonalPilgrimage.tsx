"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Compass, MapPin, Footprints, Shield, Heart } from "lucide-react";

export const PersonalPilgrimage: React.FC = () => {
  const pilgrimagePillars = [
    {
      title: "Independent Travel",
      description:
        "Every train journey, local bus route, and countryside road travelled by self-arrangement without tour operators.",
    },
    {
      title: "Self-Arranged Stays",
      description:
        "Finding shelter in temple dharamshalas, mutt guest houses, and modest pilgrim lodgings across states.",
    },
    {
      title: "Unrushed Visits",
      description:
        "Remaining present in each kshetra to observe the local rituals, temple timings, and sanctum ambience.",
    },
    {
      title: "Meticulous Planning",
      description:
        "Mapping connections between ancient sthala puranas and real geographical access across Bharat.",
    },
  ];

  const journeyMilestones = [
    {
      period: "Years 1 – 3",
      title: "Southern Gopurams & Coastal Kshetras",
      note: "Exploring the great Dravidian temple towns, Kaveri sangams, and sacred island theerthams across Tamil Nadu, Andhra, Karnataka, and Kerala.",
    },
    {
      period: "Years 4 – 6",
      title: "Central Shrines & Western Jyotirlingas",
      note: "Traversing ancient river valleys, Narmada banks, Saurashtra coastlines, and historic temples of Maharashtra and Gujarat.",
    },
    {
      period: "Years 7 – 9",
      title: "Himalayan Dhams & Gangetic Kshetras",
      note: "Ascending high-altitude Himalayan dhams, sacred ghats of Kashi, Prayag, and concluding years of continuous field documentation.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Firsthand Chronicle
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        {/* Section 1: A Journey of 8–9 Years */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.08] mb-6">
              A Journey of 8–9 Years
            </h2>
            <p className="font-serif italic text-xl text-[#8A5A24] mb-6">
              Not a hurried itinerary, but nearly a decade of devotion and living research.
            </p>
            <p className="text-[#6B6B6B] text-base leading-relaxed font-light mb-6">
              The author&apos;s pilgrimage journey with his wife extended over
              approximately <strong>8–9 years</strong>. Every page of this guide
              was born not from secondary compilations, but from nearly a decade
              of continuous travel across the length and breadth of India.
            </p>
            <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">
              Rather than rushing from one temple to another, they immersed
              themselves in the atmosphere of each holy site—absorbing its
              sanctity, observing the sacred rivers, and documenting its living
              heritage.
            </p>
          </div>

          {/* Pilgrimage Timeline (Non-corporate, artisanal aesthetic) */}
          <div className="lg:col-span-6">
            <div className="relative pl-8 md:pl-10 space-y-10 border-l border-[#8A5A24]/40">
              {journeyMilestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Subtle Node Marker */}
                  <div className="absolute -left-[37px] md:-left-[45px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F8F6F0] border-2 border-[#8A5A24] group-hover:bg-[#8A5A24] transition-colors" />

                  <span className="font-mono text-xs uppercase tracking-widest text-[#8A5A24] font-semibold block mb-1">
                    {milestone.period}
                  </span>
                  <h3 className="font-serif text-2xl text-[#171717] font-normal mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed">
                    {milestone.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Every Journey Was Personal / A Pilgrimage Without a Package */}
        <div className="pt-16 border-t border-[#EAE5D9]">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8A5A24] font-semibold block mb-3">
              Independent Devotion
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal mb-4">
              Every Journey Was Personal
            </h3>
            <p className="text-[#6B6B6B] text-base font-light leading-relaxed">
              The author and his wife travelled independently rather than
              through package tours or conducted commercial trips. By making
              their own arrangements for travel, accommodation, visits, and
              pilgrimage planning, each step retained its spiritual purity and
              firsthand authenticity.
            </p>
          </div>

          {/* Route and arrangements 4-column breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilgrimagePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-[#EAE5D9] relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#8A5A24] font-semibold block mb-4">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl text-[#171717] font-normal mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Route Motif Line */}
          <div className="mt-12 flex items-center justify-center gap-4 text-xs tracking-[0.22em] text-[#6B6B6B] uppercase font-light">
            <span className="h-[1px] w-16 bg-[#8A5A24]/30" />
            <span className="flex items-center gap-2">
              <Footprints size={14} className="text-[#8A5A24]" /> Independent • Firsthand • Unhurried
            </span>
            <span className="h-[1px] w-16 bg-[#8A5A24]/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
