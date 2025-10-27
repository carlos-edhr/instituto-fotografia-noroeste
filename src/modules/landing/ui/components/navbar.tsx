"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface NavItem {
  label: string;
  href: string;
}

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems: NavItem[] = [
    { label: "2025", href: "#2025" },
    { label: "FECHAS", href: "#fechas" },
    { label: "PLANES", href: "#planes" },
  ];

  const rightNavItems: NavItem[] = [
    { label: "INVITADOS", href: "#invitados" },
    { label: "GALERIA", href: "#galeria" },
    { label: "SEDE", href: "#sede" },
  ];

  return (
    <nav className="font-robotoCondensed fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center w-full mt-5">
            {/* Left items */}
            <div className="flex items-center gap-6 lg:gap-4 px-6">
              {leftNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-robotoCondensed font-[400] relative text-white text-sm hover:text-white/60 transition-colors
                             after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                             hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center px-6">
              <Image
                src="/brand/CIAF8-Estrella1.png"
                alt="Congress Logo"
                width={80}
                height={80}
                className="w-10 h-8 md:w-16 md:h-16"
              />
            </div>
            {/* Right items */}
            <div className="flex items-center gap-6 lg:gap-8 px-6">
              {rightNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-robotoCondensed font-[400] relative text-sm transition-colors cursor-pointer
                              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                              hover:after:w-full after:transition-all after:duration-300
                              ${
                                item.label === "INVITADOS"
                                  ? "text-white hover:text-white/60"
                                  : "text-azulAstro hover:text-azulAstro/80"
                              }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <Image
              src="/brand/CIAF8-Estrella1.png"
              alt="Congress Logo"
              width={40}
              height={40}
              className="w-10 h-8"
            />
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-[#181818] py-4 px-6">
              <div className="flex flex-col gap-4">
                {leftNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative text-plata text-sm font-medium hover:text-white transition-colors
                               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                               hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <Separator className="my-1" />
                {rightNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors cursor-pointer
                                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                                hover:after:w-full after:transition-all after:duration-300
                                ${
                                  item.label === "INVITADOS"
                                    ? "text-plata hover:text-white"
                                    : "text-azulAstro hover:text-azulAstro/80"
                                }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
