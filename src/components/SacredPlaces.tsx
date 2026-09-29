"use client";

import React from "react";
import { motion } from "framer-motion";

export const SacredPlaces: React.FC = () => {
  const templeRoles = [
    {
      role: "Places of Worship",
      description: "Sacred sanctuaries of divine communion and quiet introspection.",
    },
    {
      role: "Centers of Spiritual Training",
      description: "Where seekers learn the disciplines of mind, devotion, and character.",
    },
    {
      role: "Places for Yoga",
      description: "Atmospheres designed to align breath, body, and consciousness.",
    },
    {
      role: "Centers of Education",
      description: "Seat of traditional gurukulas, debating halls, and philosophical transmission.",
    },
    {
      role: "Homes of Poetry and Literature",
      description: "Where timeless hymns, stotras, and classical verses were composed and chanted.",
    },
    {
      role: "Spaces for Fine Arts",
      description: "Platforms for classical music, sacred dance, and devotional expression.",
    },
    {
      role: "Centers of Sculpture",
      description: "Living stone galleries of master craftsmen, iconographers, and silpis.",
    },
    {
      role: "Connected with Saints and Rishis",
      description: "Sites consecrated by the penance and presence of enlightened masters.",
    },
  ];

  return (
    <section id="sacred-places" className="py-24 md:py-36 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            02 / Civilization & Heritage
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            The Sacred Places of Bharat
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            Temples were never solitary ritual shrines. They served as the
            living heart of community life, knowledge preservation, architectural
            mastery, and spiritual awakening.
          </p>
        </motion.div>

        {/* Large Typography List with Subtle Dividers (No flashy feature cards) */}
        <div className="divide-y divide-[#EAE5D9]">
          {templeRoles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="py-7 md:py-9 flex flex-col md:flex-row md:items-baseline justify-between group hover:pl-2 transition-all duration-300"
            >
              <div className="flex items-baseline gap-6 md:w-1/2 mb-2 md:mb-0">
                <span className="font-mono text-xs text-[#8A5A24] font-medium tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal group-hover:text-[#8A5A24] transition-colors duration-200">
                  {item.role}
                </h3>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-[#6B6B6B] text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
