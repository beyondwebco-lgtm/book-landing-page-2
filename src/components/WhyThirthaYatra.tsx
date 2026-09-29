"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const WhyThirthaYatra: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 320;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), editorialStatements.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 340;
    const scrollAmount = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  // Mouse drag functionality for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Purpose & Inception
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12]">
              Why Thirtha Yatra?
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="text-[#6B6B6B] text-xs sm:text-sm font-light max-w-sm hidden lg:block">
              Six foundational dimensions elevating sacred pilgrimage from ordinary travel into conscious spiritual sadhana.
            </p>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTo("left")}
                disabled={!canScrollLeft}
                aria-label="Previous card"
                className={`p-2.5 rounded-full border transition-all duration-200 ${
                  canScrollLeft
                    ? "border-[#EAE5D9] text-[#171717] hover:border-[#8A5A24] hover:text-[#8A5A24] bg-white cursor-pointer"
                    : "border-[#EAE5D9]/40 text-[#6B6B6B]/30 bg-[#FAF8F5] cursor-not-allowed"
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("right")}
                disabled={!canScrollRight}
                aria-label="Next card"
                className={`p-2.5 rounded-full border transition-all duration-200 ${
                  canScrollRight
                    ? "border-[#EAE5D9] text-[#171717] hover:border-[#8A5A24] hover:text-[#8A5A24] bg-white cursor-pointer"
                    : "border-[#EAE5D9]/40 text-[#6B6B6B]/30 bg-[#FAF8F5] cursor-not-allowed"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 -mx-6 px-6 md:-mx-12 md:px-12 select-none scroll-smooth cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {editorialStatements.map((item, index) => (
            <div
              key={index}
              className="w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[380px] shrink-0 snap-start bg-[#F8F6F0] border border-[#EAE5D9] p-7 md:p-8 flex flex-col justify-between group hover:border-[#8A5A24]/60 transition-all duration-300"
            >
              <div>
                {/* Header: Number & Tag */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE5D9]/70">
                  <span className="font-mono text-xs text-[#8A5A24] font-semibold tracking-widest">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8A5A24] px-2.5 py-1 bg-white border border-[#EAE5D9]">
                    {item.label}
                  </span>
                </div>

                {/* Main Statement */}
                <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal leading-snug mb-4 group-hover:text-[#8A5A24] transition-colors">
                  {item.statement}
                </h3>

                {/* Elaboration */}
                <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed">
                  {item.elaboration}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#EAE5D9]/50 flex items-center justify-between text-[11px] text-[#6B6B6B]/70 font-light">
                <span>Thirtha Yatra Inception</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A5A24]/40 group-hover:bg-[#8A5A24] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {editorialStatements.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[#8A5A24]"
                  : "w-2 bg-[#EAE5D9] hover:bg-[#8A5A24]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
