"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  organization: string;
  badge: string;
  isFeatured?: boolean;
  highlightQuote: string;
  bodyText: string[];
}

export const WhatReadersSay: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "chaganti-koteswara-rao",
      name: "Chaganti Koteswara Rao",
      designation: "Eminent Scholar & Pravachana Karta",
      organization: "Benedictory Note • Thirtha Yatra",
      badge: "Featured Benedictory Note",
      isFeatured: true,
      highlightQuote:
        "“I pray to God that he blesses the author with the inspiration and ability to write many more books in the future.”",
      bodyText: [
        "Although many books in various languages have been published on pilgrimages, this book, “Teertha Yatra,” written by Sri Ramesh Gangashetty, is unique. Usually, such books are written keeping the geographical position of India in view and cover various forms of God. However, this book covers Sri Siva, Sri Devi, Sri Radha, Lord Vishnu, and Sri Datta in a distinctive manner.",
        "Further, the book gives a small and striking introduction to the Kshetras and the Swamijis associated with them in simple language. The author has taken great care to avoid unnecessary information. The information is presented state-wise, with details of the history of the places.",
      ],
    },
    {
      id: "swami-jnanananda",
      name: "Swami Jnanananda",
      designation: "Adhyaksha",
      organization: "Ramakrishna Math, Hyderabad",
      badge: "Book Launch Blessing",
      highlightQuote:
        "“The author shares his firsthand experiences to help future pilgrims become acquainted with the sacred places beforehand, making their journey truly fulfilling.”",
      bodyText: [
        "The author has undertaken an extraordinary personal pilgrimage across the country. By documenting his direct experiences and presenting them with clarity, the book allows future yatris to become intimately acquainted with the sanctity, background, and traditions of each sacred place beforehand. Such preparation elevates a visit from ordinary travel to a meaningful spiritual sadhana.",
      ],
    },
    {
      id: "s-r-ramanujan",
      name: "S. R. Ramanujan",
      designation: "Senior Journalist",
      organization: "Hyderabad",
      badge: "Critical Review",
      highlightQuote:
        "“A valuable source book compiling personal visits with category-wise chronicling of Dasavatara, Jyotir Lingas, and Shakti Peetams.”",
      bodyText: [
        "Thirtha Yatra stands out as a genuine source book created out of personal visits rather than desk research. The systematic category-wise chronicling brings structured clarity to India's vast sacred heritage. It serves as an essential guide for anyone wishing to understand the enduring importance of our sacred places.",
      ],
    },
    {
      id: "s-v-m-sastry",
      name: "S. V. M. Sastry",
      designation: "Scholar & Chronicler",
      organization: "Secunderabad",
      badge: "Scholarly Reflection",
      highlightQuote:
        "“Informative and insightful, capturing the spiritual meaning and the author's meticulous pilgrimage with his wife across nature, rivers, and sanctity.”",
      bodyText: [
        "A truly informative and insightful work reflecting the author's pilgrimage with his wife over several years. What distinguishes this work is the author's meticulous planning and detailed collection, presenting both deity-wise and geographic-wise analyses. It highlights the importance of truly experiencing the place—its atmosphere, nature, holy rivers, and prevailing sanctity—rather than simply rushing through darshan.",
      ],
    },
    {
      id: "dr-s-paradhasaradhi",
      name: "Dr. S. Paradhasaradhi",
      designation: "Professor (Retd.)",
      organization: "Osmania University, Hyderabad",
      badge: "Academic Appreciation",
      highlightQuote:
        "“A comprehensive presentation of Thirthas, their sanctity and significance, inculcating noble values and inspiring pilgrimage.”",
      bodyText: [
        "This book provides a comprehensive presentation of India's holy Thirthas, explaining their religious sanctity and civilizational significance. Through lucid narration of traditional beliefs and moral values, it fosters positive attitudes and inspires readers across generations to undertake pilgrimage with reverence.",
      ],
    },
    {
      id: "dr-chetan-kumar-thota",
      name: "Dr. Chetan Kumar Thota",
      designation: "Physician & Cultural Enthusiast",
      organization: "Hyderabad",
      badge: "Reader Reflection",
      highlightQuote:
        "“Documenting temple visits with simple and systematic presentation, making sacred exploration accessible and deeply satisfying.”",
      bodyText: [
        "The meticulous documentation of temple visits in this book makes the vast world of Indian temples accessible to common readers. Its simple and systematic presentation covers temples across the country, making the reading experience deeply satisfying and practically usable for travel planning.",
      ],
    },
  ];

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 600;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), testimonials.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 600;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Appreciation & Critical Reception
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12]">
              What Readers Say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scrollTo("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
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

        {/* Horizontal Testimonial Slider */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 -mx-6 px-6 md:-mx-12 md:px-12 select-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`w-[88vw] sm:w-[620px] md:w-[720px] shrink-0 snap-center p-7 md:p-10 border flex flex-col justify-between transition-all duration-300 ${
                item.isFeatured
                  ? "bg-[#F8F6F0] border-[#8A5A24]/40 shadow-xs"
                  : "bg-white border-[#EAE5D9] hover:border-[#8A5A24]/50"
              }`}
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE5D9]/70">
                  <div className="flex items-center gap-2">
                    {item.isFeatured && (
                      <span className="p-1 rounded-full bg-[#8A5A24] text-white">
                        <Star size={12} fill="currentColor" />
                      </span>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A5A24] font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <Quote size={20} className="text-[#8A5A24]/40 rotate-180" />
                </div>

                {/* Highlight Quote */}
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#171717] leading-relaxed mb-5">
                  {item.highlightQuote}
                </blockquote>

                {/* Body Paragraphs */}
                <div className="space-y-3 text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed mb-6">
                  {item.bodyText.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#EAE5D9]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#171717] font-normal">
                    — {item.name}
                  </h4>
                  <p className="text-[11px] text-[#8A5A24] uppercase tracking-wider font-medium">
                    {item.designation}
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B]">
                  {item.organization}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6 mb-12">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to review by ${item.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[#8A5A24]"
                  : "w-2 bg-[#EAE5D9] hover:bg-[#8A5A24]/50"
              }`}
            />
          ))}
        </div>

        {/* Compact Book Launch Highlight Banner */}
        <div className="p-6 md:p-8 bg-[#F8F6F0] border border-[#EAE5D9] grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xs">
          <div className="md:col-span-4 relative aspect-[4/3] w-full overflow-hidden border border-[#EAE5D9] bg-white">
            <Image
              src="/images/swami-jnanananda-launch.jpg"
              alt="Swami Jnanananda releasing Thirtha Yatra book at Ramakrishna Math Hyderabad"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] block mb-1">
              Historical Book Launch Archive
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal mb-2">
              Blessed & Released by Revered Swami Jnanananda
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-light leading-relaxed">
              The volume was formally released at a solemn gathering presided over by
              Swami Jnanananda, Adhyaksha of Ramakrishna Math, Hyderabad, recognizing
              the author&apos;s devotion and dedicated 8–9 years of field documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
