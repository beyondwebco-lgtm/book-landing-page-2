import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { WhyThirthaYatra } from "@/components/WhyThirthaYatra";
import { SacredPlaces } from "@/components/SacredPlaces";
import { TempleGallery } from "@/components/TempleGallery";
import { PersonalPilgrimage } from "@/components/PersonalPilgrimage";
import { MobilePhoneStory } from "@/components/MobilePhoneStory";
import { ReferenceCompilation } from "@/components/ReferenceCompilation";
import { Chapters } from "@/components/Chapters";
import { TempleStories } from "@/components/TempleStories";
import { BookPreview } from "@/components/BookPreview";
import { WhatReadersSay } from "@/components/WhatReadersSay";
import { RecognitionSection } from "@/components/RecognitionSection";
import { Author } from "@/components/Author";
import { Purchase } from "@/components/Purchase";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFFFF] selection:bg-[#8A5A24]/20 selection:text-[#171717]">
      {/* 01. Minimal Fixed Header with Anchor Navigation */}
      <Header />

      {/* 02. Editorial Hero (Normal Section) */}
      <Hero />

      {/* 03. Core Philosophy: India is more than a geography (Normal Section) */}
      <Introduction />

      {/* 04. Purpose: Why Thirtha Yatra? (Horizontal Card Slider) */}
      <WhyThirthaYatra />

      {/* 05. The Sacred Places of Bharat (Normal Intro + Horizontal Slider) */}
      <SacredPlaces />

      {/* 06. Visual Heritage: Fine Art Plates (Horizontal Image Carousel + Lightbox) */}
      <TempleGallery />

      {/* 07. The Journey of 8–9 Years: Consolidated Field Research, Companion & 3-Stage Timeline */}
      <PersonalPilgrimage />

      {/* 08. Singular Focus: A Book Written on a Mobile Phone (Normal Section) */}
      <MobilePhoneStory />

      {/* 09. Organized for the Yatri: 3-Card Category Layout & Dedicated Reference Table */}
      <ReferenceCompilation />

      {/* 10. Structure: Inside Thirtha Yatra (Normal Section) */}
      <Chapters />

      {/* 11. Featured Quote: "Every temple in this holy land has a story to tell" (Normal Section) */}
      <TempleStories />

      {/* 12. Archival Quality: Inside the Pages (Normal Section) */}
      <BookPreview />

      {/* 13. Appreciation: What Readers Say (Horizontal Testimonial Slider featuring Chaganti Koteswara Rao) */}
      <WhatReadersSay />

      {/* 14. Official Recognition: RRRLF Kolkata & Ministry of External Affairs (Normal Section) */}
      <RecognitionSection />

      {/* 15. Author Profile: Ramesh Gangashetty (Retired Officer, State Bank) (Normal Section) */}
      <Author />

      {/* 16. Official Acquisition: Begin Your Yatra (Normal Section) */}
      <Purchase />

      {/* 17. Closing Contemplation */}
      <FinalCTA />

      {/* 18. Editorial Minimal Footer */}
      <Footer />
    </main>
  );
}
