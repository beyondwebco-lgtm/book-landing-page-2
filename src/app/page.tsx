import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { SacredPlaces } from "@/components/SacredPlaces";
import { TempleGallery } from "@/components/TempleGallery";
import { Journey } from "@/components/Journey";
import { BookInsights } from "@/components/BookInsights";
import { Chapters } from "@/components/Chapters";
import { TempleStories } from "@/components/TempleStories";
import { Yatri } from "@/components/Yatri";
import { Author } from "@/components/Author";
import { PersonalJourney } from "@/components/PersonalJourney";
import { FeaturedQuote } from "@/components/FeaturedQuote";
import { BookPreview } from "@/components/BookPreview";
import { Purchase } from "@/components/Purchase";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFFFF] selection:bg-[#8A5A24]/20 selection:text-[#171717]">
      <Header />
      <Hero />
      <Introduction />
      <SacredPlaces />
      <TempleGallery />
      <Journey />
      <BookInsights />
      <Chapters />
      <TempleStories />
      <Yatri />
      <Author />
      <PersonalJourney />
      <FeaturedQuote />
      <BookPreview />
      <Purchase />
      <FinalCTA />
      <Footer />
    </main>
  );
}
