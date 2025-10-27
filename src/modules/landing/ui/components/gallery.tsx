"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current.forEach((item) => {
      if (!item) return;

      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(item, {
        y: -8,
        scale: 1.03,
        duration: 0.3,
        ease: "power1.out",
      });

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const galleryItems: GalleryItem[] = [
    { id: 1, src: "/landing/galeria/10.jpeg", alt: "Imagen de galería 1" },
    { id: 2, src: "/landing/galeria/11.jpeg", alt: "Imagen de galería 2" },
    { id: 3, src: "/landing/galeria/12.jpeg", alt: "Imagen de galería 3" },
    { id: 4, src: "/landing/galeria/13.jpeg", alt: "Imagen de galería 4" },
    { id: 5, src: "/landing/galeria/14.jpeg", alt: "Imagen de galería 5" },
    { id: 6, src: "/landing/galeria/15.jpeg", alt: "Imagen de galería 6" },
    { id: 7, src: "/landing/galeria/16.jpeg", alt: "Imagen de galería 7" },
    { id: 8, src: "/landing/galeria/17.jpeg", alt: "Imagen de galería 8" },
    { id: 9, src: "/landing/galeria/18.jpeg", alt: "Imagen de galería 9" },
  ];

  return (
    <div
      id="galeria"
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
        Galería
      </h2>

      <div
        className="
        w-full
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6
      "
      >
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="
              relative
              aspect-square
              overflow-hidden
              rounded-lg
              border
              border-gray-700
              group
            "
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              flex
              items-end
              p-4
            "
            >
              {/* <span className="text-white font-light text-sm">{item.alt}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
