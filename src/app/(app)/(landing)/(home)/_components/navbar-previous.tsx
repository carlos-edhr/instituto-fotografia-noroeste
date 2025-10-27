"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { name: "The Work", link: "#work" },
  { name: "The Gallery", link: "#gallery" },
  { name: "The Artist", link: "#artist" },
  { name: "The Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Noise effect para textura sutil */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 z-10"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-40 h-12">
              <Image
                src={scrolled ? "/logos/logo.png" : "/logos/logo2.png"}
                alt="Photography Portfolio"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className={`${
                    scrolled ? "text-gray-900" : "text-white"
                  } hover:text-gray-600 transition-colors text-md font-medium relative group`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Iconos de redes sociales */}
            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  scrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-600 transition-colors`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  scrolled ? "text-gray-900" : "text-white"
                } hover:text-gray-600 transition-colors`}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <Link
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-gray-800 to-black text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-10 rounded-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-gray-900" : "text-gray-900"
              } hover:text-gray-600 focus:outline-none`}
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
        <div className="lg:hidden  inset-0 w-full h-full bg-white z-99 pt-20">
          <div className="container mx-auto px-4 pb-12 h-full overflow-y-auto">
            <div className="flex flex-col items-center justify-between h-full">
              <div className="w-full max-w-md space-y-4 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.link}
                    className="block px-6 py-4 text-gray-900 hover:text-white hover:bg-gradient-to-r from-gray-800 to-black rounded-xl transition-all duration-300 text-center text-lg font-medium border border-gray-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  className="block px-6 py-4 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white text-center text-lg font-bold shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </div>

              {/* Iconos de redes sociales en móvil */}
              <div className="flex justify-center gap-6 pt-4 pb-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>

              {/* Footer del menú móvil */}
              <div className="text-gray-500 text-sm pb-8">
                © {new Date().getFullYear()} Photography Portfolio
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
