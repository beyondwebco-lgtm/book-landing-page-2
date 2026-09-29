"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ZoomIn, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "release" | "heritage";
  caption: string;
  aspect: string;
}

export const TempleGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "release" | "heritage">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const galleryItems: GalleryPhoto[] = [
    {
      id: "heritage-1",
      src: "/images/temple-heritage.jpg",
      title: "Sacred Kshetra Corridor",
      category: "heritage",
      caption: "Plate I — Thousand-pillared Dravidian corridor and gopuram architecture at dusk.",
      aspect: "aspect-[16/10]",
    },
    {
      id: "release-1",
      src: "/images/gallery/01-book-release.jpg",
      title: "Formal Book Release Ceremony",
      category: "release",
      caption: "Swami Jnanananda, Adhyaksha of Ramakrishna Math, releasing Thirtha Yatra with author Ramesh Gangashetty.",
      aspect: "aspect-[4/3]",
    },
    {
      id: "release-4",
      src: "/images/gallery/04-lighting-lamp.jpg",
      title: "Inaugural Deepa Prajvalana",
      category: "release",
      caption: "Lighting the auspicious ceremonial lamp before Sri Ramakrishna Paramahamsa.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "heritage-2",
      src: "/images/temple-ghat.jpg",
      title: "Holy River Ghats at Dawn",
      category: "heritage",
      caption: "Plate II — Meditative silence and glowing lamps along ancient stone steps.",
      aspect: "aspect-[4/3]",
    },
    {
      id: "release-6",
      src: "/images/gallery/06-swami-blessing.jpg",
      title: "Blessings from Swami Jnanananda",
      category: "release",
      caption: "Author receiving blessings from the revered Adhyaksha for the literary pilgrimage offering.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "release-3",
      src: "/images/gallery/03-author-prayer.jpg",
      title: "Address & Prayer of Gratitude",
      category: "release",
      caption: "Author Ramesh Gangashetty addressing the gathered devotees and scholars in reverent submission.",
      aspect: "aspect-[4/3]",
    },
    {
      id: "release-7",
      src: "/images/gallery/07-book-signing.jpg",
      title: "Inaugural Book Inscription",
      category: "release",
      caption: "Signing and presenting initial volumes to esteemed scholars and cultural patrons.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "release-8",
      src: "/images/gallery/08-author-wife-family.jpg",
      title: "A Shared Family Pilgrimage",
      category: "release",
      caption: "The author with his wife and family, celebrating the culmination of 8–9 years of field research.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "release-2",
      src: "/images/gallery/02-book-unveiling.jpg",
      title: "Presentation of Thirtha Yatra",
      category: "release",
      caption: "Dignitaries holding aloft the newly released English guide to sacred Bharat.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "release-5",
      src: "/images/gallery/05-sacred-altar.jpg",
      title: "Consecrated Temple Altar",
      category: "release",
      caption: "The sacred altar sanctum at Ramakrishna Math where the manuscript was sanctified.",
      aspect: "aspect-[3/4]",
    },
    {
      id: "release-9",
      src: "/images/gallery/09-group-commemoration.jpg",
      title: "Commemorative Gathering",
      category: "release",
      caption: "Attendees, scholars, and well-wishers assembled for the solemn inauguration.",
      aspect: "aspect-[3/4]",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), filteredItems.length - 1));
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [filteredItems, viewMode]);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 360;
    const scrollAmount = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
    <section id="gallery" className="py-20 md:py-28 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Visual Heritage & Archival Gallery
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.12]">
              Photographic Chronicle
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
            {/* View Full Gallery Toggle Button */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === "carousel" ? "grid" : "carousel")}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider font-medium border border-[#EAE5D9] bg-white text-[#171717] hover:border-[#8A5A24] transition-colors"
            >
              {viewMode === "carousel" ? (
                <>
                  <LayoutGrid size={14} className="text-[#8A5A24]" />
                  <span>View Full Gallery ({filteredItems.length})</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal size={14} className="text-[#8A5A24]" />
                  <span>View Carousel</span>
                </>
              )}
            </button>

            {/* Carousel Navigation Arrows */}
            {viewMode === "carousel" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollTo("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous gallery image"
                  className={`p-2.5 rounded-full border transition-all duration-200 ${
                    canScrollLeft
                      ? "border-[#EAE5D9] text-[#171717] hover:border-[#8A5A24] hover:text-[#8A5A24] bg-white cursor-pointer"
                      : "border-[#EAE5D9]/40 text-[#6B6B6B]/30 bg-white/50 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("right")}
                  disabled={!canScrollRight}
                  aria-label="Next gallery image"
                  className={`p-2.5 rounded-full border transition-all duration-200 ${
                    canScrollRight
                      ? "border-[#EAE5D9] text-[#171717] hover:border-[#8A5A24] hover:text-[#8A5A24] bg-white cursor-pointer"
                      : "border-[#EAE5D9]/40 text-[#6B6B6B]/30 bg-white/50 cursor-not-allowed"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#EAE5D9]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            All ({galleryItems.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("release")}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "release"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            Book Release & Ceremony ({galleryItems.filter((i) => i.category === "release").length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("heritage")}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "heritage"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            Sacred Temple Heritage ({galleryItems.filter((i) => i.category === "heritage").length})
          </button>
        </div>

        {/* View Mode: Carousel or Full Grid */}
        {viewMode === "carousel" ? (
          <div>
            <div
              ref={scrollContainerRef}
              onScroll={updateScrollState}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 -mx-6 px-6 md:-mx-12 md:px-12 select-none scroll-smooth cursor-grab active:cursor-grabbing snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="w-[84vw] sm:w-[350px] md:w-[370px] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white p-3 border border-[#EAE5D9] hover:border-[#8A5A24]/60 transition-all duration-300 shadow-2xs flex flex-col justify-between cursor-pointer group"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2.5 bg-white/90 text-[#171717] rounded-full shadow-sm">
                        <ZoomIn size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 pb-1">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] mb-1">
                      <span>{item.category === "release" ? "Launch Archive" : "Temple Plate"}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#171717] font-normal leading-snug group-hover:text-[#8A5A24] transition-colors mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#6B6B6B] font-light leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {filteredItems.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-7 bg-[#8A5A24]"
                      : "w-1.5 bg-[#EAE5D9]"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Full Grid Mode */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="bg-white p-3 border border-[#EAE5D9] hover:border-[#8A5A24]/60 transition-all duration-300 shadow-2xs flex flex-col justify-between cursor-pointer group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 bg-white/90 text-[#171717] rounded-full shadow-sm">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                </div>

                <div className="pt-3 pb-1">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] mb-1">
                    <span>{item.category === "release" ? "Launch Archive" : "Temple Plate"}</span>
                    <span>Plate {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#171717] font-normal leading-snug group-hover:text-[#8A5A24] transition-colors mb-1 truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#6B6B6B] font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-4xl w-full p-4 md:p-6 border border-[#EAE5D9] shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#171717] rounded-full shadow-sm cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-black/5 mb-4">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="pt-2 border-t border-[#EAE5D9] flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] block mb-1">
                    {selectedPhoto.category === "release" ? "Book Release Archive" : "Sacred Heritage Plate"}
                  </span>
                  <h4 className="font-serif text-2xl text-[#171717]">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] font-light mt-1 max-w-2xl">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#8A5A24] uppercase tracking-wider shrink-0">
                  Thirtha Yatra Archive
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
