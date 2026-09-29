"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Footprints, Heart, MapPin, Compass, Train, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export const PersonalPilgrimage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const journeyStages = [
    {
      period: "Years 1 – 3",
      title: "Southern Gopurams & Coastal Kshetras",
      region: "Tamil Nadu • Andhra Pradesh • Karnataka • Kerala",
      description:
        "Exploring the great Dravidian temple towns, Kaveri river confluences, Rameshwaram, and sacred island theerthams across the southern peninsula.",
      focus: "Thousand-pillared corridors, coastal tirthas & ancient Shaiva-Vaishnava traditions.",
    },
    {
      period: "Years 4 – 6",
      title: "Central Shrines & Western Jyotirlingas",
      region: "Maharashtra • Gujarat • Madhya Pradesh • Western Ghats",
      description:
        "Traversing ancient river valleys, Narmada banks, Saurashtra coastlines, Somnath, and venerable Jyotirlingas with independent countryside travel.",
      focus: "River circumambulations, sacred hill shrines & stone iconography.",
    },
    {
      period: "Years 7 – 9",
      title: "Himalayan Dhams & Gangetic Kshetras",
      region: "Uttarakhand • Uttar Pradesh • Bihar • Northern Dhams",
      description:
        "Ascending high-altitude Himalayan dhams, Kedarnath, Badrinath, and the sacred river ghats of Kashi and Prayag, concluding nearly a decade of field research.",
      focus: "Alpine ascetic kshetras, living monastic lineages & master field verification.",
    },
  ];

  const methodologyPillars = [
    {
      icon: Train,
      title: "Independent Travel",
      description: "Every train route, local bus, and countryside road travelled by self-arrangement without tour operators.",
    },
    {
      icon: Heart,
      title: "Shared Pilgrimage",
      description: "Undertaken hand-in-hand with his wife as a quiet family sadhana across thousands of kilometres.",
    },
    {
      icon: Compass,
      title: "Unrushed Visits",
      description: "Spending hours absorbing temple precincts, sacred rivers, and sthala traditions before taking darshan.",
    },
    {
      icon: ShieldCheck,
      title: "Firsthand Notes",
      description: "Direct on-ground verification of temple access, daily timings, and priest oral accounts.",
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            The Living Research
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        {/* Top Overview: 8-9 Years + Devotional Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12] mb-5">
              A Journey of 8–9 Years
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-[#8A5A24] mb-6">
              Not a hurried itinerary, but nearly a decade of independent devotional research across India.
            </p>
            <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base font-light leading-relaxed">
              <p>
                Every page of <em>Thirtha Yatra</em> was born from personal visits.
                The author, <strong>Ramesh Gangashetty</strong>, undertook almost
                all of these sacred journeys across India together with his
                wife—travelling by train, public bus, and local arrangements
                without tour packages.
              </p>
              <p>
                Rather than rushing through queue checklists, they immersed
                themselves in the setting: walking temple perimeters during the
                day, sitting by sacred river ghats, and taking darshan in deep
                tranquility before documenting each sanctuary into an authoritative guide.
              </p>
            </div>
          </div>

          {/* Authentic Companion Photo Card */}
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#F8F6F0] border border-[#EAE5D9] shadow-xs">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src="/images/author-wife-journey.jpg"
                  alt="Author Ramesh Gangashetty and his wife during the pilgrimage journey"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A5A24] font-medium block">
                  A Devotional Partnership • 8–9 Years Across Bharat
                </span>
                <p className="text-[11px] text-[#6B6B6B] font-light mt-0.5">
                  Ramesh Gangashetty & his wife during the sacred field journeys
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL TIMELINE SLIDER (3 STAGES)                                    */}
        {/* ========================================================================= */}
        <div className="bg-[#F8F6F0] border border-[#EAE5D9] p-6 md:p-10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE5D9]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A5A24] block mb-1">
                Pilgrimage Chronology
              </span>
              <h3 className="font-serif text-2xl text-[#171717] font-normal">
                Three Eras of Field Documentation
              </h3>
            </div>

            {/* Mobile / Desktop Stage Selector Pills */}
            <div className="flex items-center gap-2">
              {journeyStages.map((stage, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                    activeStage === idx
                      ? "bg-[#171717] text-white shadow-xs"
                      : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/50"
                  }`}
                >
                  {stage.period}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Timeline Layout on Desktop / Filtered Active on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {journeyStages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#8A5A24] shadow-xs"
                      : "bg-white/60 border-[#EAE5D9] hover:border-[#8A5A24]/40"
                  }`}
                >
                  <div>
                    {/* Period badge & step number */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5D9]/70">
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#8A5A24]">
                        {stage.period}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#6B6B6B]/70 font-mono">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal mb-2 leading-snug">
                      {stage.title}
                    </h4>

                    <span className="text-[11px] font-mono text-[#8A5A24] block mb-3 leading-tight">
                      {stage.region}
                    </span>

                    <p className="text-xs text-[#6B6B6B] font-light leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE5D9]/60 text-[11px] text-[#171717]/80 font-light italic">
                    <strong className="font-normal text-[#8A5A24]">Focus:</strong> {stage.focus}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact 4 Methodology Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-white border border-[#EAE5D9] flex items-start gap-4 hover:border-[#8A5A24]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#8A5A24] shrink-0 mt-0.5">
                  <Icon size={15} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#171717] font-normal mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
