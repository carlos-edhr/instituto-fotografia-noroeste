// hero-image-background.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroImageBackgroundProps {
  imageSources?: string[];
}

const defaultImageSources = [
  "/img/landing/hero-2.JPG",
  "/img/landing/hero-1.JPG",
  "/img/landing/hero-3.JPG",
  "/img/landing/hero-4.JPG",
  "/img/landing/hero-5.JPG",
  "/img/landing/hero-6.JPG",
  "/img/landing/hero-7.JPG",
];

const HeroImageBackground: React.FC<HeroImageBackgroundProps> = ({
  imageSources = defaultImageSources,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSources.length,
      );
    }, 8000); // Cambiar cada 8 segundos

    return () => clearInterval(interval);
  }, [imageSources.length]);

  // Precargar imágenes
  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageSources]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0, ease: "linear" }}
        >
          {/* Imagen de fondo */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageSources[currentImageIndex]})`,
            }}
          />

          {/* Overlay con identidad de marca */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Elementos decorativos rojos sutiles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-800/8 blur-[90px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700/5 blur-[100px] rounded-full" />
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imageSources.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="focus:outline-none"
          >
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentImageIndex
                    ? "border-red-500 bg-red-500"
                    : "border-white/50 bg-transparent"
                }`}
              />
              {index === currentImageIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-500"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5 }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroImageBackground;
