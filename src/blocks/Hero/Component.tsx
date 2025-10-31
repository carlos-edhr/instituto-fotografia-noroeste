"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import type { HeroBlock } from "@/types/blocks";

export const HeroBlockComponent: React.FC<HeroBlock> = (props) => {
  const {
    title,
    highlightedText,
    subtitle,
    backgroundImages = [],
    videoSection,
    ctaButton,
    logoCarousel,
    styling,
  } = props;

  const realityRef = useRef<HTMLSpanElement | null>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Animación GSAP para el texto destacado
  useEffect(() => {
    if (realityRef.current) {
      gsap.fromTo(
        realityRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
      );
    }
  }, []);

  // Carrusel automático de imágenes de fondo
  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) =>
          prev === backgroundImages.length - 1 ? 0 : prev + 1,
        );
      }, 5000); // Cambia cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [backgroundImages.length]);

  // Configuración de estilos
  const textColorClass = {
    white: "text-white",
    black: "text-gray-900",
    gray: "text-gray-600",
  }[styling?.textColor || "white"];

  const minHeightClass = {
    screen: "min-h-screen",
    "75": "min-h-[75vh]",
    "50": "min-h-[50vh]",
  }[styling?.minHeight || "screen"];

  const overlayOpacity = styling?.overlayOpacity || 40;

  return (
    <section
      className={`relative flex flex-col w-full ${minHeightClass} items-center justify-center pt-20 lg:pt-32`}
    >
      {/* Imágenes de fondo con carrusel */}
      {backgroundImages.length > 0 && (
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((bg, index) => {
            const image = bg.image;
            if (typeof image !== "object") return null;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentBgIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.url || "/default-image.jpg"}
                  alt={bg.altText || "Hero background"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div
                  className="absolute inset-0 z-1"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative max-w-6xl mx-auto text-center flex flex-col justify-center flex-1 px-4 lg:px-8">
        <h1
          className={`font-light relative z-10 text-5xl md:text-7xl ${textColorClass} text-center px-4 mt-12 md:mt-40`}
        >
          {title}
          {highlightedText && (
            <>
              {" "}
              <span ref={realityRef} className="inline-block text-red-500">
                {highlightedText}
              </span>
            </>
          )}
          {subtitle && (
            <>
              <br />
              <br />
              <span className="text-2xl md:text-4xl font-light">
                {subtitle}
              </span>
            </>
          )}
        </h1>

        {/* Botón CTA */}
        {ctaButton?.enableCta && ctaButton.text && ctaButton.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <a
              href={ctaButton.link}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light tracking-wider rounded-lg border border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              {ctaButton.text}
            </a>
          </motion.div>
        )}
      </div>

      {/* Sección de Video */}
      {videoSection?.enableVideo && (
        <div className="relative w-full mt-8 lg:mt-16">
          <VideoSection
            videoSrc={
              (typeof videoSection.videoFile === "object"
                ? videoSection.videoFile?.url
                : videoSection.videoUrl) ?? undefined
            }
          />
        </div>
      )}

      {/* Carrusel de Logos */}
      {logoCarousel?.enableLogos &&
        logoCarousel.logos &&
        logoCarousel.logos.length > 0 && (
          <div className="relative w-full bg-black/80 backdrop-blur-sm border-t border-red-900/30 py-6 mt-8 lg:mt-16">
            <LogoCarousel logos={logoCarousel.logos} />
          </div>
        )}
    </section>
  );
};

// Componente VideoSection (adaptado)
interface VideoSectionProps {
  videoSrc?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const gradientContainerEl = videoContainerRef.current;

    if (containerEl && gradientContainerEl) {
      gsap.fromTo(
        gradientContainerEl,
        { scale: 1 },
        {
          scale: 1.3,
          scrollTrigger: {
            trigger: containerEl,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    }
  }, []);

  const handleVideoClick = () => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.paused) {
      videoEl.muted = false;
      videoEl.play().catch(console.error);
    }
  };

  if (!videoSrc) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 flex flex-col items-center"
    >
      <div className="w-full md:w-2/3 lg:w-1/2 px-4">
        <div className="relative">
          <div
            ref={videoContainerRef}
            className="relative rounded-lg p-1 bg-gradient-to-r from-red-500/10 to-red-600/50 w-full h-full"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-auto cursor-pointer rounded-lg bg-white"
              loop
              muted
              playsInline
              autoPlay
              onClick={handleVideoClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente LogoCarousel (adaptado)
interface LogoCarouselProps {
  logos: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: string | any;
    altText?: string | null;
    link?: string | null;
    id?: string | null;
  }[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  return (
    <div className="bg-transparent relative w-full h-[150px]">
      <div className="flex flex-wrap w-full h-full overflow-hidden justify-center">
        <div className="absolute w-[50%] h-full left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6">
          {logos.map((logoItem, index) => {
            const logo = logoItem.logo;
            if (typeof logo !== "object") return null;

            return (
              <div key={index} className="flex items-center justify-center">
                {logoItem.link ? (
                  <a
                    href={logoItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.url}
                      alt={logoItem.altText || "Logo"}
                      width={160}
                      height={160}
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                  </a>
                ) : (
                  <Image
                    src={logo.url}
                    alt={logoItem.altText || "Logo"}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroBlockComponent;
