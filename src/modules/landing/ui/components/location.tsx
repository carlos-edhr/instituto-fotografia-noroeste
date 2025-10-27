"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export const Location: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(container, {
      y: -8,
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out",
    });

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animación de entrada para los elementos de texto
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
      ease: "power2.out",
    });

    gsap.from(linkRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6,
      ease: "power2.out",
    });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="sede"
      ref={containerRef}
      className="
        relative
        w-full
        max-w-[1280px]
        mx-auto
        flex
        flex-col
        items-center
        overflow-hidden
        text-white
        p-6
        md:p-10
        mt-8
        bg-[#191919]
        rounded-lg
        font-robotoCondensed
      "
    >
      <h2
        className="
        text-3xl
        md:text-4xl
        font-bold
        text-center
        mb-12
        uppercase
        tracking-wider
      "
      >
        SEDE 2025
      </h2>

      <div
        className="
        w-full
        grid
        grid-cols-1
        
        gap-12
        items-center
      "
      >
        {/* Imagen del campus */}
        <div
          className="
          relative
          w-full
          h-[400px]

          overflow-hidden
          shadow-2xl
        "
        >
          <div
            className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            z-0
          "
          >
            {/* <div className="bg-gray-200  border-2 border-dashed rounded-xl w-full h-full" /> */}
            <Link href={"https://www.cetys.mx/campus-tijuana/"}>
              <Image
                src="/landing/sede1.png"
                alt="Campus CETYS Tijuana"
                width={300}
                height={300}
                className="object-cover cursor-pointer "
              />
            </Link>
          </div>
        </div>

        {/* Información de la sede */}
        <div
          className="
          flex
          flex-col
          items-center
          lg:items-start
          text-center
          lg:text-left
        "
        ></div>
      </div>
    </div>
  );
};
