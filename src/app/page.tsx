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
import { DistinctiveQualities } from "@/components/DistinctiveQualities";
import { DifferentWayOfPilgrimage } from "@/components/DifferentWayOfPilgrimage";
import { Journey } from "@/components/Journey";
import { BookInsights } from "@/components/BookInsights";
import { Chapters } from "@/components/Chapters";
import { TempleStories } from "@/components/TempleStories";
import { BookPreview } from "@/components/BookPreview";
import { WhatReadersSay } from "@/components/WhatReadersSay";
import { RecognitionSection } from "@/components/RecognitionSection";
import { Author } from "@/components/Author";
import { SharedJourney } from "@/components/SharedJourney";
import { BookForHome } from "@/components/BookForHome";
import { BookValue } from "@/components/BookValue";
import { Purchase } from "@/components/Purchase";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFFFF] selection:bg-[#8A5A24]/20 selection:text-[#171717]">
      {/* 01. Minimal Fixed Header */}
      <Header />

      {/* 02. Editorial Hero */}
      <Hero />

      {/* 03. Core Philosophy: India is more than a geography */}
      <Introduction />

      {/* 04. Purpose: Why Thirtha Yatra? */}
      <WhyThirthaYatra />

      {/* 05. Civilization: The Sacred Places of Bharat */}
      <SacredPlaces />

      {/* 06. Visual Heritage: Fine Art Plates */}
      <TempleGallery />

      {/* 07. Dedication: A Journey of 8–9 Years & Every Journey Was Personal */}
      <PersonalPilgrimage />

      {/* 08. Singular Focus: A Book Written on a Mobile Phone */}
      <MobilePhoneStory />

      {/* 09. Field Research: From Personal Visits to a Reference Book & Organized for the Yatri */}
      <ReferenceCompilation />

      {/* 10. Core Hallmarks: What Makes Thirtha Yatra Different */}
      <DistinctiveQualities />

      {/* 11. Pilgrimage Ethos: A Different Way of Experiencing Pilgrimage */}
      <DifferentWayOfPilgrimage />

      {/* 12. Sacred Meridian: A Journey Across Sacred Bharat */}
      <Journey />

      {/* 13. Practical Reference: Discover -> Understand -> Plan -> Experience */}
      <BookInsights />

      {/* 14. Structure: Inside Thirtha Yatra */}
      <Chapters />

      {/* 15. Living Lore: Every Temple Has a Story */}
      <TempleStories />

      {/* 16. Archival Quality: Inside the Pages */}
      <BookPreview />

      {/* 17. Testimonials & Launch Blessing: What Readers Say */}
      <WhatReadersSay />

      {/* 18. Factual Archival: Recognition (RRRLF Kolkata & Ministry of External Affairs) */}
      <RecognitionSection />

      {/* 19. Author Profile: Ramesh Gangashetty (Retired Officer, State Bank) */}
      <Author />

      {/* 20. Devotional Partnership: The Journey Was Shared */}
      <SharedJourney />

      {/* 21. Home Library & Family Keepsake: A Book to Keep */}
      <BookForHome />

      {/* 22. Synthesis: More Than a Guide (Experience + Information + Reflection + Pilgrimage) */}
      <BookValue />

      {/* 23. Official Acquisition: Begin Your Yatra */}
      <Purchase />

      {/* 24. Closing Contemplation */}
      <FinalCTA />

      {/* 25. Editorial Minimal Footer */}
      <Footer />
    </main>
  );
}
