"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="book"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-[#FFFFFF] overflow-hidden"
    >
      {/* Subtle Indian Architectural Linework Background (Barely visible, paper-print aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg
          viewBox="0 0 800 800"
          className="w-[1200px] h-[1200px] text-[#8A5A24] stroke-current fill-none stroke-[0.75]"
        >
          {/* Temple Gopuram Architectural Outline */}
          <path d="M 400 60 L 415 100 L 385 100 Z" />
          <path d="M 375 100 L 425 100 L 440 160 L 360 160 Z" />
          <path d="M 350 160 L 450 160 L 470 230 L 330 230 Z" />
          <path d="M 320 230 L 480 230 L 505 310 L 295 310 Z" />
          <path d="M 285 310 L 515 310 L 545 400 L 255 400 Z" />
          <path d="M 245 400 L 555 400 L 590 510 L 210 510 Z" />
          <path d="M 200 510 L 600 510 L 640 640 L 160 640 Z" />
          <path d="M 150 640 L 650 640 L 680 760 L 120 760 Z" />
          {/* Central Sanctum Arch */}
          <path d="M 330 760 L 330 600 C 330 520 470 520 470 600 L 470 760" />
          {/* Subtle concentric geometry */}
          <circle cx="400" cy="400" r="360" strokeDasharray="3 6" />
          <circle cx="400" cy="400" r="280" />
          <circle cx="400" cy="400" r="190" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#8A5A24]" />
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                A Journey Through Sacred Bharat
              </span>
            </div>

            {/* Large Book Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.04em] font-normal text-[#171717] leading-[1.02] mb-4">
              THIRTHA YATRA
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-xl md:text-2xl text-[#8A5A24] font-normal tracking-wide mb-3">
              A Guide to Holy Temples and Thirtha Kshetras in India
            </p>

            {/* Author Credit */}
            <p className="text-xs uppercase tracking-[0.24em] text-[#171717]/80 font-medium mb-8">
              By Ramesh Gangashetty
            </p>

            {/* Introduction excerpt */}
            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-xl font-light mb-10">
              Thousands of temples. Sacred rivers. Ancient mountains. Stories of
              saints and rishis. A journey through the spiritual geography of
              Bharat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="#sacred-places"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] text-white text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-[#8A5A24] transition-all duration-300 shadow-sm"
              >
                <span>Explore the Book</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#purchase"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#EAE5D9] bg-[#F8F6F0]/60 text-[#171717] text-[12px] uppercase tracking-[0.2em] font-medium hover:border-[#8A5A24] hover:bg-[#F8F6F0] transition-all duration-300"
              >
                Buy the Book
              </Link>
            </div>

            {/* Subtle Metadata Note */}
            <div className="mt-14 pt-8 border-t border-[#EAE5D9]/70 flex items-center gap-6 text-xs text-[#6B6B6B] tracking-wider uppercase font-light">
              <span className="flex items-center gap-2">
                <Compass size={14} className="text-[#8A5A24]" /> Firsthand Field Research
              </span>
              <span className="w-1 h-1 rounded-full bg-[#EAE5D9]" />
              <span>Temple Heritage & Geography</span>
            </div>
          </motion.div>

          {/* Right Column - Physical Book Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[380px] md:max-w-[420px]">
              {/* Subtle ambient halo shadow */}
              <div className="absolute -inset-4 bg-[#8A5A24]/5 rounded-2xl blur-2xl transition-all duration-500 group-hover:bg-[#8A5A24]/10" />

              {/* Physical Book Mockup Image */}
              <div className="relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Thirtha Yatra Book - Hardcover Edition"
                  width={520}
                  height={680}
                  priority
                  className="w-full h-auto object-cover rounded-sm shadow-[0_20px_50px_-15px_rgba(23,23,23,0.18)] border border-[#EAE5D9]/60"
                />
              </div>

              {/* Minimal caption below book */}
              <div className="mt-4 text-center">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#6B6B6B] font-light">
                  Hardcover & Archival Edition
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
