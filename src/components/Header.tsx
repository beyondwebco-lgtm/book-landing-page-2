"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Book", href: "#book" },
    { name: "Temples & Kshetras", href: "#sacred-places" },
    { name: "Gallery", href: "#gallery" },
    { name: "The Journey", href: "#journey" },
    { name: "Inside the Pages", href: "#preview" },
    { name: "About the Author", href: "#author" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#EAE5D9]/80 py-4 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]"
          : "bg-white/80 backdrop-blur-xs border-b border-[#EAE5D9]/50 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 tracking-[0.25em] text-sm md:text-base font-medium text-[#171717]"
        >
          <span className="w-2 h-2 rounded-full bg-[#8A5A24] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-serif text-lg md:text-xl tracking-[0.2em] font-semibold text-[#171717]">
            THIRTHA YATRA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9 text-[13px] tracking-[0.12em] uppercase text-[#6B6B6B] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#171717] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8A5A24] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="#purchase"
            className="px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] font-medium text-[#8A5A24] border border-[#8A5A24]/40 hover:border-[#8A5A24] hover:bg-[#8A5A24] hover:text-white transition-all duration-300"
          >
            Buy the Book
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#171717] hover:text-[#8A5A24] transition-colors"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5D9] px-6 py-8"
          >
            <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.15em] text-[#6B6B6B]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#171717] py-2 border-b border-[#EAE5D9]/40"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#purchase"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center py-3 text-xs uppercase tracking-[0.2em] font-medium text-white bg-[#8A5A24] hover:bg-[#72481A] transition-colors"
              >
                Buy the Book
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
