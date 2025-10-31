"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { Header as HeaderType } from "@/payload-types";

interface Props {
  data: HeaderType;
}

export const Header: React.FC<Props> = ({ data }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!data) return null;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-red-900/30 shadow-xl"
          : "bg-transparent"
      }`}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {data.logo && typeof data.logo === "object" && (
              <div className="relative w-48 h-12">
                <Image
                  src={data.logo.url || "/img/logo-1.png"}
                  alt={data.logo.alt || "Logo"}
                  fill
                  className="object-contain transition-all duration-300"
                  priority
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {data.navItems?.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${
                    scrolled ? "text-white" : "text-stone-300"
                  } hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-wider relative group`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-red-500" : "bg-red-600"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            {data.ctaButton?.enable && (
              <div>
                <Link
                  href={data.ctaButton.link || "#"}
                  className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-500/20 border border-red-500/20"
                >
                  {data.ctaButton.text}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                scrolled ? "text-white" : "text-red-500"
              } hover:text-red-500 focus:outline-none`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-md z-40">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 border-b border-red-900/30">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              {data.logo && typeof data.logo === "object" && (
                <div className="relative w-40 h-10">
                  <Image
                    src={data.logo.url || "/img/logo-1.png"}
                    alt={data.logo.alt || "Logo"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-lg bg-red-900/30 hover:bg-red-800/50 border border-red-700/30 text-white hover:text-red-300 transition-all duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="container mx-auto px-4 pb-8 h-full overflow-y-auto">
            <div className="flex flex-col justify-between h-full pt-8">
              <div className="w-full space-y-4">
                {data.navItems?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block px-6 py-5 text-white hover:text-white hover:bg-gradient-to-r from-red-900/50 to-red-800/30 rounded-xl transition-all duration-300 text-center text-xl font-medium border border-red-900/30 hover:border-red-500/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {data.ctaButton?.enable && (
                  <Link
                    href={data.ctaButton.link || "#"}
                    className="block px-6 py-5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white text-center text-xl font-bold shadow-lg border border-red-500/30 mt-6 hover:from-red-700 hover:to-red-900 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {data.ctaButton.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
