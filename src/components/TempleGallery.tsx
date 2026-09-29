"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ZoomIn } from "lucide-react";

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

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#F8F6F0] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Visual Heritage & Archival Gallery
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal">
              Photographic Chronicle & Heritage
            </h2>
          </div>
          <p className="text-[#6B6B6B] text-sm md:text-base font-light max-w-md">
            Documenting timeless temple heritage alongside authentic archival
            moments from the book release blessed by Swami Jnanananda.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#EAE5D9]">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            All Archives ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab("release")}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "release"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            Book Release & Ceremony ({galleryItems.filter((i) => i.category === "release").length})
          </button>
          <button
            onClick={() => setActiveTab("heritage")}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === "heritage"
                ? "bg-[#171717] text-white"
                : "bg-white text-[#6B6B6B] border border-[#EAE5D9] hover:border-[#8A5A24]/60 hover:text-[#171717]"
            }`}
          >
            Sacred Temple Heritage ({galleryItems.filter((i) => i.category === "heritage").length})
          </button>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer bg-white p-3 border border-[#EAE5D9] hover:border-[#8A5A24]/60 transition-all duration-300 shadow-2xs flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-[#FAF8F5]`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 bg-white/90 text-[#171717] rounded-full shadow-sm">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                </div>

                {/* Metadata & Caption */}
                <div className="pt-3 pb-1">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8A5A24] mb-1">
                    <span>{item.category === "release" ? "Launch Archive" : "Temple Plate"}</span>
                    <span>Plate {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#171717] font-normal leading-snug group-hover:text-[#8A5A24] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#6B6B6B] font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#171717] rounded-full shadow-sm"
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
