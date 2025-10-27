// components/navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";

const navLinks = [
  { name: "Cursos", href: "/home" },
  { name: "Iluminación", href: "#iluminacion" },
  { name: "Lightroom", href: "#lightroom" },
  { name: "Retrato", href: "#retrato" },
  { name: "Galería", href: "#galeria" },
  { name: "Asesorías", href: "#asesorias" },
  { name: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    name: "instagram",
    icon: Instagram,
    link: "https://www.instagram.com/ifntijuana",
  },
  {
    name: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/ifntijuana",
  },
];

const Navbar = () => {
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
            href="#inicio"
            className="flex items-center gap-2 z-10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-48 h-12">
              <Image
                src={scrolled ? "/img/logo-1.png" : "/img/logo-1.png"}
                alt="Instituto de Fotografía del Noroeste"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    scrolled ? "text-white" : "text-stone-300"
                  } hover:text-red-500 transition-all duration-300 text-sm font-medium uppercase tracking-wider relative group`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-red-500" : "bg-red-600"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Social Links Divider */}
            <div className="w-px h-6 bg-red-900/30 mx-4"></div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      scrolled ? "text-white" : "text-red-500"
                    } hover:text-red-500 transition-all duration-300 p-2`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/sign-up"
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-500/20 border border-red-500/20"
              >
                Registrarse
              </Link>
              <Link
                href="/sign-in"
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-500/20 border border-red-500/20"
              >
                Login
              </Link>
            </div>
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
          {/* Header del menú móvil con botón de cierre */}
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 border-b border-red-900/30">
            {/* Logo en menú móvil */}
            <Link
              href="#inicio"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-40 h-10">
                <Image
                  src="/img/logo-1.png"
                  alt="Instituto de Fotografía del Noroeste"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Botón de cierre en esquina superior derecha */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-lg bg-red-900/30 hover:bg-red-800/50 border border-red-700/30 text-white hover:text-red-300 transition-all duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="container mx-auto px-4 pb-8 h-full overflow-y-auto">
            <div className="flex flex-col justify-between h-full pt-8">
              {/* Navigation Links */}
              <div className="w-full space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-5 text-white hover:text-white hover:bg-gradient-to-r from-red-900/50 to-red-800/30 rounded-xl transition-all duration-300 text-center text-xl font-medium border border-red-900/30 hover:border-red-500/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="#contacto"
                  className="block px-6 py-5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white text-center text-xl font-bold shadow-lg border border-red-500/30 mt-6 hover:from-red-700 hover:to-red-900 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </Link>
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-8 py-8 border-t border-red-900/30">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-500 transition-all duration-300 p-4 bg-red-900/20 rounded-lg border border-red-800/30 hover:border-red-500/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-7 h-7" />
                    </a>
                  );
                })}
                <a
                  href="mailto:curso@leyvafotografia.com"
                  className="text-white hover:text-red-500 transition-all duration-300 p-4 bg-red-900/20 rounded-lg border border-red-800/30 hover:border-red-500/50"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>

              {/* Mobile Footer */}
              <div className="text-center pb-8">
                <div className="text-white text-base font-light tracking-wide mb-2">
                  Instituto de Fotografía del Noroeste
                </div>
                <div className="text-red-400 text-sm">
                  Educación fotográfica de élite
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
