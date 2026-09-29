"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Layers, Map, Table } from "lucide-react";

export const BookPreview: React.FC = () => {
  const previewFeatures = [
    {
      icon: BookOpen,
      title: "Hardcover Archival Binding",
      desc: "Designed to endure generations of pilgrimage and study.",
    },
    {
      icon: Table,
      title: "Comprehensive Tabular Data",
      desc: "Structured listings of deities, locations, periods, and significance.",
    },
    {
      icon: Map,
      title: "Regional Distribution Maps",
      desc: "Carefully calibrated outlines charting sacred pilgrimage routes.",
    },
    {
      icon: Layers,
      title: "Editorial Typography",
      desc: "High-legibility dual typeface system printed on premium off-white stock.",
    },
  ];

  return (
    <section id="preview" className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                11 / Archival Quality
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal">
              Inside the Pages
            </h2>
          </div>
          <p className="text-xs text-[#6B6B6B] uppercase tracking-[0.16em] font-light max-w-xs">
            Exemplary editorial design crafted for clarity and longevity
          </p>
        </div>

        {/* Large Book Interior Spread Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden bg-white p-4 md:p-8 border border-[#EAE5D9] shadow-sm mb-16"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#EAE5D9]/60">
            <Image
              src="/images/interior-spread.jpg"
              alt="Inside spread of Thirtha Yatra book showing tabular data and pilgrimage map"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B6B] uppercase tracking-widest pt-2">
            <span>Interior Spread: South India Sacred Sites Index</span>
            <span className="text-[#8A5A24]">Tabular & Cartographic System</span>
          </div>
        </motion.div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#EAE5D9] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#8A5A24] mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-serif text-xl text-[#171717] font-normal mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed font-light">
                    {feat.desc}
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
