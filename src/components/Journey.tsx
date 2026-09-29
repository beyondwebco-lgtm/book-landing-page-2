"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-36 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Journey Description */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                04 / Pilgrimage Geography
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.08] mb-8">
              A Journey Across Sacred Bharat
            </h2>

            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light mb-6">
              From the snowy Himalayan shrines in the north to the ocean-kissed
              ghats of Kanyakumari and Rameswaram, the sacred map of Bharat is an
              interconnected network of sacred geography.
            </p>

            <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light mb-8">
              Thirtha Yatra organizes these sacred locations systematically,
              providing pilgrims and cultural enthusiasts with a unified
              perspective on India&apos;s sacred landscape.
            </p>

            {/* Note on data integrity */}
            <div className="p-5 bg-[#F8F6F0] border-l-2 border-[#8A5A24] text-xs text-[#6B6B6B] font-light leading-relaxed">
              <span className="font-medium text-[#171717] uppercase tracking-wider block mb-1">
                Authentic Reference
              </span>
              Every kshetra documented in this volume reflects verified routes,
              sacred traditions, and firsthand visits by the author.
            </div>
          </div>

          {/* Right Column: Minimal Outline Map & Coordinate Aesthetic */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 bg-[#F8F6F0] border border-[#EAE5D9] relative"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE5D9]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8A5A24] font-medium">
                  <Navigation size={14} /> Sacred Meridian of Bharat
                </div>
                <span className="font-mono text-xs text-[#6B6B6B]">8.4°N — 37.6°N</span>
              </div>

              {/* Minimal SVG Sacred Geography Outline Graphic */}
              <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full text-[#8A5A24] stroke-current fill-none stroke-[0.8]"
                >
                  {/* Minimal Subcontinent Map Contour */}
                  <path
                    d="M 200 40 
                       C 230 60, 260 70, 275 100 
                       C 290 130, 280 160, 260 190 
                       C 245 220, 255 250, 240 290 
                       C 225 330, 210 360, 200 380 
                       C 190 360, 175 330, 160 290 
                       C 145 250, 155 220, 140 190 
                       C 120 160, 110 130, 125 100 
                       C 140 70, 170 60, 200 40 Z"
                    strokeDasharray="4 3"
                    className="opacity-40"
                  />
                  {/* Cardinal Axis */}
                  <line x1="200" y1="30" x2="200" y2="390" strokeDasharray="1 4" className="opacity-30" />
                  <line x1="80" y1="210" x2="320" y2="210" strokeDasharray="1 4" className="opacity-30" />

                  {/* Sacred Marker Nodes with Subtle Pulsing Aesthetic */}
                  <circle cx="200" cy="80" r="3.5" fill="#8A5A24" />
                  <text x="212" y="84" fill="#171717" fontSize="9" letterSpacing="1" fontFamily="sans-serif">Himalayan Kshetras</text>

                  <circle cx="245" cy="150" r="3.5" fill="#8A5A24" />
                  <text x="257" y="154" fill="#171717" fontSize="9" letterSpacing="1" fontFamily="sans-serif">Ganga & Eastern Thirtha</text>

                  <circle cx="150" cy="180" r="3.5" fill="#8A5A24" />
                  <text x="75" y="184" fill="#171717" fontSize="9" letterSpacing="1" fontFamily="sans-serif">Western Shrines</text>

                  <circle cx="200" cy="240" r="3.5" fill="#8A5A24" />
                  <text x="212" y="244" fill="#171717" fontSize="9" letterSpacing="1" fontFamily="sans-serif">Deccan & Central Temples</text>

                  <circle cx="200" cy="350" r="3.5" fill="#8A5A24" />
                  <text x="212" y="354" fill="#171717" fontSize="9" letterSpacing="1" fontFamily="sans-serif">Southern Kshetras & Ghats</text>
                </svg>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#6B6B6B]">
                <span>Topographical Index</span>
                <span>Unbroken Continuity</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
