// components/navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const navbarItems = [
  { href: "/", children: "INICIO" },
  { href: "/home", children: "CURSOS" },
  { href: "/about", children: "NOSOTROS" },
  { href: "/contact", children: "CONTACTO" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    gsap.fromTo(
      navbar,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    );
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={cn(
        "h-20 flex justify-between font-light fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-red-900/30 shadow-xl"
          : "bg-black/95 backdrop-blur-md",
      )}
    >
      {/* Noise texture overlay */}
      {/* <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      /> */}

      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <div className="relative w-40 h-16">
            <Image
              src={isScrolled ? "/img/logo-1.png" : "/img/logo-1.png"}
              alt="Instituto de Fotografía del Noroeste"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavbarSidebar
          items={navbarItems}
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
          isAuthenticated={!!session.data?.user}
        />

        <div className="items-center gap-1 hidden lg:flex">
          {navbarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "font-light text-sm uppercase tracking-widest px-6 py-6 rounded-none relative group",
                pathname === item.href
                  ? "text-stone-100 hover:text-red-500 bg-transparent hover:bg-transparent"
                  : "text-stone-100 hover:text-red-500 hover:bg-transparent",
              )}
            >
              <Link href={item.href}>
                {item.children}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8",
                    pathname === item.href && " w-22  left-1/8",
                  )}
                />
              </Link>
            </Button>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {session.data?.user ? (
            <Button
              asChild
              className="font-light text-sm uppercase tracking-widest bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-6 border border-red-500/20"
            >
              <Link href="/admin">Panel</Link>
            </Button>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                className="font-light text-sm uppercase tracking-widest text-white hover:text-red-400 px-4 py-6"
              >
                <Link prefetch href="/sign-in">
                  Ingresar
                </Link>
              </Button>
              <Button
                asChild
                className="font-light text-sm uppercase tracking-widest bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-6 border border-red-500/20"
              >
                <Link prefetch href="/sign-up">
                  Registrarse
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center z-10">
          <Button
            variant="ghost"
            className={cn(
              "p-2 transition-all duration-300",
              isScrolled
                ? "text-white hover:text-red-400"
                : "text-black hover:text-red-600",
            )}
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon className="size-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
