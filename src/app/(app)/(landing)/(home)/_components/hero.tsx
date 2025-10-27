// hero.tsx
"use client";
import React from "react";
import HeroTitle from "./hero-title";
import HeroImageBackground from "./hero-image-background";
import VideoSection from "./video-section";
import Navbar from "./navbar";
import LogoCarousel from "./logo-carousel";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col w-full min-h-screen items-center justify-center pt-20 lg:pt-32">
      <HeroImageBackground />
      <Navbar />

      {/* Contenido principal */}
      <div className="relative max-w-6xl mx-auto text-center flex flex-col justify-center flex-1 px-4 lg:px-8">
        <HeroTitle />

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light tracking-wider rounded-lg border border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            Explorar nuestros cursos
          </button>
        </motion.div>
      </div>

      {/* Sección de video (opcional - puedes mantenerla o removerla) */}
      <div className="relative w-full mt-8 lg:mt-16">
        <VideoSection videoSrc="videos/hero-vid-2.mp4" />
      </div>

      {/* Carrusel de logos */}
      <div className="relative w-full bg-black/80 backdrop-blur-sm border-t border-red-900/30 py-6">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
