"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Send, X, Shield } from "lucide-react";

export const Author: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactOpen(false);
    }, 2500);
  };

  return (
    <section id="author" className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Author Portrait in Sacred Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full bg-[#F8F6F0] p-3 border border-[#EAE5D9] shadow-sm">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/author-journey.jpg"
                  alt="Ramesh Gangashetty documenting ancient temples during field visits"
                  fill
                  className="object-cover grayscale contrast-105"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="font-serif text-lg text-[#171717] block">
                Ramesh Gangashetty
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A5A24] font-medium">
                Retired Officer, State Bank • Author & Chronicler
              </span>
            </div>
          </motion.div>

          {/* Right Column: Author Biography & Firsthand Research Emphasis */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A5A24]">
                Author & Chronicler
              </span>
              <span className="h-[1px] w-12 bg-[#8A5A24]/30" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal leading-[1.1] mb-2">
              Ramesh Gangashetty
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A5A24] font-semibold mb-6">
              Retired Officer, State Bank
            </p>

            {/* Prominent Callout: Firsthand Visits Requirement */}
            <div className="p-6 bg-[#F8F6F0] border-l-2 border-[#8A5A24] mb-8 shadow-xs">
              <div className="flex items-start gap-3">
                <p className="font-serif italic text-lg md:text-xl text-[#171717] leading-relaxed">
                  &ldquo;The information in this book was collated after personal
                  visits to these places by the author.&rdquo;
                </p>
              </div>
            </div>

            <p className="text-[#6B6B6B] text-base leading-relaxed font-light mb-6">
              Following a distinguished career as an officer with the State Bank,
              <strong> Ramesh Gangashetty</strong> channeled his deep devotional
              reverence and disciplined organizational acumen into documenting the
              sacred geography of India.
            </p>

            <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light mb-8">
              Over a sustained period of 8–9 years, he travelled independently
              across every region of India alongside his wife—personally visiting
              each temple and kshetra, observing local customs, and carefully
              chronicling his notes into an authoritative source reference.
            </p>

            {/* Verification highlights & Contact Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EAE5D9] mb-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
                <CheckCircle2 size={16} className="text-[#8A5A24]" /> Firsthand Field Notes
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171717]">
                <CheckCircle2 size={16} className="text-[#8A5A24]" /> Authentic Sthala Puranas
              </div>
            </div>

            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#8A5A24]/40 bg-white text-xs uppercase tracking-[0.2em] font-medium text-[#171717] hover:border-[#8A5A24] hover:bg-[#8A5A24] hover:text-white transition-all duration-300"
            >
              <Mail size={14} />
              <span>Contact the Author</span>
            </button>
          </div>
        </div>
      </div>

      {/* Respectful Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-lg w-full p-8 md:p-10 border border-[#EAE5D9] shadow-2xl relative"
            >
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-6 right-6 text-[#6B6B6B] hover:text-[#171717]"
              >
                <X size={20} />
              </button>

              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A5A24] block mb-2">
                Inquiries & Literary Correspondence
              </span>
              <h3 className="font-serif text-3xl text-[#171717] font-normal mb-2">
                Contact the Author
              </h3>
              <p className="text-xs text-[#6B6B6B] font-light mb-6">
                Send a message regarding <em>Thirtha Yatra</em>, library queries, or research discussions.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F8F6F0] text-[#8A5A24] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-serif text-2xl text-[#171717] mb-2">
                    Message Received
                  </h4>
                  <p className="text-xs text-[#6B6B6B] font-light">
                    Thank you. Your inquiry has been forwarded for review.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#171717] font-medium block mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-4 py-2.5 text-xs border border-[#EAE5D9] bg-[#F8F6F0]/40 focus:outline-hidden focus:border-[#8A5A24]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#171717] font-medium block mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 text-xs border border-[#EAE5D9] bg-[#F8F6F0]/40 focus:outline-hidden focus:border-[#8A5A24]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#171717] font-medium block mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Your inquiry or appreciation regarding the pilgrimage guide..."
                      className="w-full px-4 py-2.5 text-xs border border-[#EAE5D9] bg-[#F8F6F0]/40 focus:outline-hidden focus:border-[#8A5A24] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-[#6B6B6B] font-light pb-2">
                    <Shield size={12} className="text-[#8A5A24]" />
                    <span>Privacy protected. Direct correspondence with the author&apos;s desk.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#171717] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A5A24] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
