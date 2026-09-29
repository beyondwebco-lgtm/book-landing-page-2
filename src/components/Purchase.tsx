"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShoppingBag, Book, Sparkles } from "lucide-react";

export const Purchase: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<"hardcover" | "paperback">("hardcover");

  return (
    <section id="purchase" className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
              12 / Acquire the Volume
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal tracking-tight mb-6">
            Begin Your Yatra
          </h2>

          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            Take a journey through the sacred places, stories and spiritual
            heritage of Bharat.
          </p>
        </div>

        {/* Purchase Card / Selection Box */}
        <div className="max-w-4xl mx-auto bg-[#F8F6F0] border border-[#EAE5D9] p-8 md:p-14 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left: Book Thumbnail */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-[220px] md:w-[260px] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)] bg-white p-2 border border-[#EAE5D9]">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Thirtha Yatra Book Cover"
                  width={280}
                  height={380}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Edition Details & Purchase Action */}
            <div className="md:col-span-7 flex flex-col items-start">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#8A5A24] mb-2">
                Official Release
              </span>
              <h3 className="font-serif text-3xl text-[#171717] font-normal mb-2">
                Thirtha Yatra
              </h3>
              <p className="text-xs text-[#6B6B6B] uppercase tracking-wider mb-6">
                A Guide to Holy Temples and Thirtha Kshetras in India
              </p>

              {/* Format Switcher */}
              <div className="w-full flex gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => setSelectedFormat("hardcover")}
                  className={`flex-1 py-3 px-4 text-xs uppercase tracking-wider font-medium border transition-all text-center ${
                    selectedFormat === "hardcover"
                      ? "border-[#8A5A24] bg-white text-[#171717] shadow-xs"
                      : "border-[#EAE5D9] text-[#6B6B6B] hover:border-[#8A5A24]/50"
                  }`}
                >
                  Hardcover Edition
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFormat("paperback")}
                  className={`flex-1 py-3 px-4 text-xs uppercase tracking-wider font-medium border transition-all text-center ${
                    selectedFormat === "paperback"
                      ? "border-[#8A5A24] bg-white text-[#171717] shadow-xs"
                      : "border-[#EAE5D9] text-[#6B6B6B] hover:border-[#8A5A24]/50"
                  }`}
                >
                  Paperback Edition
                </button>
              </div>

              {/* Inclusions */}
              <div className="space-y-2 mb-8 text-xs text-[#171717] font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A5A24]" /> Complete regional temple & kshetra index
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A5A24]" /> High-grade matte paper & archival typography
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#8A5A24]" /> Sthala purana summaries & route guidelines
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.amazon.in/-/hi/Thirtha-Yatra-Guide-Temples-Kshetras/dp/1684661331?s=bazaar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#171717] text-white text-xs uppercase tracking-[0.24em] font-medium text-center hover:bg-[#8A5A24] transition-colors flex items-center justify-center gap-3 shadow-xs"
              >
                <ShoppingBag size={14} />
                <span>Buy the Book</span>
              </a>

              <p className="mt-3 text-[11px] text-[#6B6B6B] font-light text-center w-full">
                Secure checkout • Available for nationwide and international delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
