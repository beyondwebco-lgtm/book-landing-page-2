"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Building, Landmark, Check } from "lucide-react";

export const RecognitionSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Official Recognition & Public Archival
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            Recognition
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            Factual institutional selections and acquisitions acknowledging the
            authoritative reference value of the work.
          </p>
        </div>

        {/* Two Factual Official-looking Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Block 1: Raja Rammohun Roy Library Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-white border border-[#EAE5D9] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#F8F6F0] border border-[#EAE5D9] flex items-center justify-center text-[#8A5A24] mb-8">
                <Landmark size={22} />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A5A24] block mb-3">
                Official Selection
              </span>

              <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-snug mb-4">
                Raja Rammohun Roy Library Foundation, Kolkata
              </h3>

              <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed mb-6">
                The book was formally selected by the selection committee of the{" "}
                <strong>Raja Rammohun Roy Library Foundation (RRRLF)</strong>,
                Kolkata—an autonomous organization under the Ministry of Culture,
                Government of India, dedicated to supporting public library
                services across the country.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EAE5D9] flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
              <Check size={14} className="text-[#8A5A24]" />
              <span>Selected for Public Library Distribution</span>
            </div>
          </motion.div>

          {/* Block 2: Ministry of External Affairs Acquisition */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-12 bg-white border border-[#EAE5D9] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#F8F6F0] border border-[#EAE5D9] flex items-center justify-center text-[#8A5A24] mb-8">
                <Building size={22} />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A5A24] block mb-3">
                Institutional Acquisition
              </span>

              <h3 className="font-serif text-2xl md:text-3xl text-[#171717] font-normal leading-snug mb-4">
                Also Acquired by the Ministry of External Affairs
              </h3>

              <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed mb-6">
                Copies of the English volume of <em>Thirtha Yatra</em> were
                officially purchased by the{" "}
                <strong>Ministry of External Affairs (MEA)</strong>, Government of
                India, recognizing its rich presentation of Indian temple
                heritage, art, and civilizational geography.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EAE5D9] flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
              <Check size={14} className="text-[#8A5A24]" />
              <span>Acquired for Indian Cultural Reference</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
