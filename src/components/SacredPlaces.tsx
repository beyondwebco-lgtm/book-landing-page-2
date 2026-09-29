"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Landmark } from "lucide-react";

export const SacredPlaces: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), templeRoles.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
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

  // Mouse drag handlers
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
    <section id="sacred-places" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                02 / Civilization & Heritage
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12] mb-4">
              The Sacred Places of Bharat
            </h2>
            <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light max-w-2xl">
              Temples were never solitary ritual shrines. They served as the
              living heart of community life, knowledge preservation, architectural
              mastery, and spiritual awakening.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scrollTo("left")}
              disabled={!canScrollLeft}
              aria-label="Previous role"
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
              aria-label="Next role"
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

        {/* Compact Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-5 overflow-x-auto scrollbar-none pb-4 pt-1 -mx-6 px-6 md:-mx-12 md:px-12 select-none scroll-smooth cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {templeRoles.map((item, index) => (
            <div
              key={index}
              className="w-[78vw] sm:w-[300px] md:w-[320px] lg:w-[340px] shrink-0 snap-start bg-[#F8F6F0] border border-[#EAE5D9] p-6 md:p-7 flex flex-col justify-between group hover:border-[#8A5A24]/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE5D9]/70">
                  <span className="font-mono text-xs text-[#8A5A24] font-semibold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Landmark size={14} className="text-[#8A5A24]/50 group-hover:text-[#8A5A24] transition-colors" />
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-[#171717] font-normal mb-3 group-hover:text-[#8A5A24] transition-colors">
                  {item.role}
                </h3>

                <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EAE5D9]/50 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8A5A24]">
                <span>Sanctuary Role</span>
                <span>Role {index + 1} of 8</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {templeRoles.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to role ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-7 bg-[#8A5A24]"
                  : "w-1.5 bg-[#EAE5D9] hover:bg-[#8A5A24]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
