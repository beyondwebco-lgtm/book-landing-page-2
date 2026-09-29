"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

interface ReviewItem {
  id: string;
  name: string;
  designation: string;
  organization: string;
  shortQuote: string;
  fullReview: string;
  hasLaunchPhoto?: boolean;
}

export const WhatReadersSay: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const reviews: ReviewItem[] = [
    {
      id: "swami-jnanananda",
      name: "Swami Jnanananda",
      designation: "Adhyaksha",
      organization: "Ramakrishna Math, Hyderabad",
      hasLaunchPhoto: true,
      shortQuote:
        "“The author shares his firsthand experiences to help future pilgrims become acquainted with the sacred places beforehand, making their journey truly fulfilling.”",
      fullReview:
        "The author has undertaken an extraordinary personal pilgrimage across the country. By documenting his direct experiences and presenting them with clarity, the book allows future yatris to become intimately acquainted with the sanctity, background, and traditions of each sacred place beforehand. Such preparation elevates a visit from ordinary travel to a meaningful spiritual sadhana.",
    },
    {
      id: "s-r-ramanujan",
      name: "S. R. Ramanujan",
      designation: "Senior Journalist",
      organization: "Hyderabad",
      shortQuote:
        "“A valuable source book compiling personal visits with category-wise chronicling of Dasavatara, Jyotir Lingas, and Shakti Peetams.”",
      fullReview:
        "Thirtha Yatra stands out as a genuine source book created out of personal visits rather than desk research. The systematic category-wise chronicling—encompassing Dasavatara kshetras, the 12 Jyotir Lingas, and venerable Shakti Peetams—brings structured clarity to India's vast sacred heritage. It serves as an essential guide for anyone wishing to understand the enduring importance of our sacred places.",
    },
    {
      id: "dr-s-paradhasaradhi",
      name: "Dr. S. Paradhasaradhi",
      designation: "Professor (Retd.)",
      organization: "Osmania University, Hyderabad",
      shortQuote:
        "“A comprehensive presentation of Thirthas, their sanctity and significance, inculcating noble values and inspiring pilgrimage.”",
      fullReview:
        "This book provides a comprehensive presentation of India's holy Thirthas, explaining their religious sanctity and civilizational significance. Through lucid narration of traditional beliefs and moral values, it fosters positive attitudes and inspires readers across generations to undertake pilgrimage with reverence and cultural awareness.",
    },
    {
      id: "chaganti-koteswara-rao",
      name: "Chaganti Koteswara Rao",
      designation: "Eminent Scholar & Pravachana Karta",
      organization: "Andhra Pradesh",
      shortQuote:
        "“The uniqueness of Thirtha Yatra lies in its short and striking introductions to various forms of God, written in simple language without unnecessary information.”",
      fullReview:
        "The uniqueness of Thirtha Yatra is that it addresses various forms of God worshipped across our kshetras with short, striking, and devout introductions. Written in simple, graceful language, it avoids unnecessary extraneous details, focusing directly on the spiritual essence that enriches a devotee's heart.",
    },
    {
      id: "dr-chetan-kumar-thota",
      name: "Dr. Chetan Kumar Thota",
      designation: "Physician & Cultural Enthusiast",
      organization: "Hyderabad",
      shortQuote:
        "“Documenting temple visits with simple and systematic presentation, making sacred exploration accessible and deeply satisfying.”",
      fullReview:
        "The meticulous documentation of temple visits in this book makes the vast world of Indian temples accessible to common readers. Its simple and systematic presentation covers temples across the country, making the reading experience deeply satisfying and practically usable for travel planning.",
    },
    {
      id: "s-v-m-sastry",
      name: "S. V. M. Sastry",
      designation: "Scholar & Chronicler",
      organization: "Secunderabad",
      shortQuote:
        "“Informative and insightful, capturing the spiritual meaning and the author's meticulous pilgrimage with his wife across nature, rivers, and sanctity.”",
      fullReview:
        "A truly informative and insightful work reflecting the author's pilgrimage with his wife over several years. What distinguishes this work is the author's meticulous planning and detailed collection, presenting both deity-wise and geographic-wise analyses. It highlights the importance of truly experiencing the place—its atmosphere, nature, holy rivers, and prevailing sanctity—rather than simply rushing through darshan.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
            Appreciation & Critical Reception
          </span>
          <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] font-normal leading-[1.1] mb-6">
            What Readers Say
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            Reflections from spiritual leaders, senior scholars, journalists, and
            cultural chroniclers who have engaged with the volume.
          </p>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reviews.map((rev) => {
            const isExpanded = expandedId === rev.id;
            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-10 bg-[#F8F6F0] border border-[#EAE5D9] flex flex-col justify-between"
              >
                <div>
                  {/* Subtle quote icon */}
                  <div className="text-[#8A5A24]/40 mb-6">
                    <Quote size={28} className="rotate-180" />
                  </div>

                  {/* Primary Excerpt */}
                  <blockquote className="font-serif text-xl md:text-2xl text-[#171717] font-normal leading-relaxed mb-6">
                    {rev.shortQuote}
                  </blockquote>

                  {/* Collapsible Full Review */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="pt-4 border-t border-[#EAE5D9] text-xs md:text-sm text-[#6B6B6B] leading-relaxed font-light space-y-3">
                          <p>{rev.fullReview}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Read full review toggle button */}
                  <button
                    onClick={() => toggleExpand(rev.id)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8A5A24] font-medium hover:text-[#171717] transition-colors mb-8"
                  >
                    <span>{isExpanded ? "Collapse review" : "Read full review"}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {/* Reviewer Attribution */}
                <div className="pt-6 border-t border-[#EAE5D9] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#171717] font-semibold">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-[#8A5A24] font-medium">
                      {rev.designation}
                    </p>
                    <p className="text-[11px] text-[#6B6B6B] font-light">
                      {rev.organization}
                    </p>
                  </div>

                  {rev.hasLaunchPhoto && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] bg-white px-2.5 py-1 border border-[#EAE5D9]">
                      Inaugural Blessing
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authentic Book Launch Ceremony Highlight */}
        <div className="mt-16 p-8 bg-white border border-[#EAE5D9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative aspect-[4/3] w-full overflow-hidden border border-[#EAE5D9]">
            <Image
              src="/images/swami-jnanananda-launch.jpg"
              alt="Swami Jnanananda releasing Thirtha Yatra book at Ramakrishna Math Hyderabad"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] block mb-2">
              Book Launch Archive
            </span>
            <h4 className="font-serif text-2xl text-[#171717] font-normal mb-3">
              Blessed & Released by Revered Swami Jnanananda
            </h4>
            <p className="text-xs md:text-sm text-[#6B6B6B] font-light leading-relaxed">
              The volume was formally released at a solemn gathering presided over by
              Swami Jnanananda, Adhyaksha of Ramakrishna Math, Hyderabad, acknowledging
              the author&apos;s devotion and dedicated years of field documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
