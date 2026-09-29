"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#EAE5D9] py-16 md:py-24 text-[#6B6B6B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#EAE5D9]">
          {/* Brand & Subtitle */}
          <div className="md:col-span-6">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.16em] text-[#171717] font-semibold block mb-3"
            >
              THIRTHA YATRA
            </Link>
            <p className="text-sm font-serif italic text-[#8A5A24] max-w-sm mb-4">
              A Guide to Holy Temples and Thirtha Kshetras in India
            </p>
            <p className="text-xs text-[#6B6B6B] max-w-md font-light leading-relaxed">
              An archival reference and dedicated field documentation of Bharat&apos;s
              sacred geography, temples, rivers, and spiritual traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#171717] block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
              <li>
                <Link href="#book" className="hover:text-[#8A5A24] transition-colors">
                  The Book
                </Link>
              </li>
              <li>
                <Link href="#sacred-places" className="hover:text-[#8A5A24] transition-colors">
                  Temples & Kshetras
                </Link>
              </li>
              <li>
                <Link href="#journey" className="hover:text-[#8A5A24] transition-colors">
                  The Journey
                </Link>
              </li>
              <li>
                <Link href="#preview" className="hover:text-[#8A5A24] transition-colors">
                  Inside the Pages
                </Link>
              </li>
              <li>
                <Link href="#author" className="hover:text-[#8A5A24] transition-colors">
                  About the Author
                </Link>
              </li>
            </ul>
          </div>

          {/* Acquisition & Contact */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#171717] block mb-4">
              Acquisition
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
              <li>
                <Link href="#purchase" className="hover:text-[#8A5A24] transition-colors">
                  Buy the Book
                </Link>
              </li>
              <li>
                <Link href="#purchase" className="hover:text-[#8A5A24] transition-colors">
                  Archival Editions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B6B6B] font-light gap-4">
          <p>© {new Date().getFullYear()} Thirtha Yatra. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">
            Sacred Bharat • Editorial Publication
          </p>
        </div>
      </div>
    </footer>
  );
};
