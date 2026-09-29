"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhyThirthaYatra: React.FC = () => {
  const editorialStatements = [
    {
      label: "Prior Acquaintance",
      statement:
        "The book helps readers become acquainted with a place of pilgrimage beforehand.",
      elaboration:
        "Entering a sacred sanctuary with knowledge of its sthala mahatmya and spiritual ethos transforms routine sightseeing into conscious, reverent darshan.",
    },
    {
      label: "Fulfilling Experience",
      statement:
        "This preparation leads to a significantly more fulfilling pilgrimage experience.",
      elaboration:
        "When the mind is already attuned to the history and deities of the kshetra, the seeker experiences profound inner peace rather than hurry or disorientation.",
    },
    {
      label: "Authentic Compilation",
      statement:
        "A comprehensive source of reliable information about sacred pilgrimage places.",
      elaboration:
        "Gathers vital details of temple locations, holy water theerthams, and sanctum traditions into a unified, trustworthy guide.",
    },
    {
      label: "Clarity of Language",
      statement:
        "Written in clear, simple language accessible to every reader.",
      elaboration:
        "Devoid of unnecessarily dense prose or superficial travel jargon, presenting sacred knowledge with grace and lucid simplicity.",
    },
    {
      label: "Concise Introductions",
      statement:
        "Provides concise, striking introductions to sacred places and revered Swamys.",
      elaboration:
        "Captures the essential divine essence and historical background without overwhelming the reader with extraneous details.",
    },
    {
      label: "Perennial Value",
      statement:
        "An ideal lifelong reference book for individuals and families.",
      elaboration:
        "Crafted to sit quietly in the home library, consulted before embarking on journeys or revisited for daily sacred reading.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Purpose & Inception
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            Why Thirtha Yatra?
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            A sacred pilgrimage across Bharat is elevated when the yatri
            approaches with understanding. The volume was created to bridge
            ancient lore and modern pilgrimage with quiet authority and clarity.
          </p>
        </motion.div>

        {/* Elegant Editorial Statements with Subtle Dividers */}
        <div className="divide-y divide-[#EAE5D9]">
          {editorialStatements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
            >
              {/* Left Column: Number & Label */}
              <div className="lg:col-span-3 flex items-center gap-4">
                <span className="font-mono text-xs text-[#8A5A24] font-medium tracking-widest">
                  0{index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A5A24] font-medium">
                  {item.label}
                </span>
              </div>

              {/* Middle Column: Large Editorial Statement */}
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-snug group-hover:text-[#8A5A24] transition-colors duration-300">
                  {item.statement}
                </h3>
              </div>

              {/* Right Column: Subtle Elaboration */}
              <div className="lg:col-span-4">
                <p className="text-[#6B6B6B] text-sm md:text-base font-light leading-relaxed">
                  {item.elaboration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
