"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

export const Camp = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animación para el botón al cargar

  const handleDownload = () => {
    // Ruta al archivo PDF - actualiza con tu ruta real
    const pdfUrl = "/landing/docs/campamento-sierra-juarez.pdf";

    // Abrir el PDF en una nueva pestaña
    window.open(pdfUrl, "_blank");
  };

  return (
    <div
      id="campamento"
      ref={containerRef}
      className="
        relative
        w-full
        max-w-[980px]
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        text-white
        p-12
        md:p-16
        mt-8
        bg-[#191919]
        rounded-lg
        font-robotoCondensed
        text-center
      "
    >
      <h2
        className="
        font-bebas
        text-3xl
        md:text-4xl
        lg:text-5xl
        font-bold
        uppercase
        mb-8
        tracking-wider
        text-azulAstro
      "
      >
        CAMPAMENTO DE ASTROFOTOGRAFÍA
      </h2>

      <p
        className="
        font-robotoCondensed
        text-xl
        md:text-2xl
        max-w-2xl
        mb-12
        text-gray-300
      "
      >
        Descarga nuestra guía completa con toda la información sobre el
        Campamento de Astrofotografía en la{" "}
        <span className="text-azulAstro">Sierra Juárez</span> 2025.
      </p>

      <Button
        onClick={handleDownload}
        variant="azulAstro"
        size="lg"
        className="text-blackBackgroundNew w-full font-robotoCondensedpy-7
            px-12 text-2xl md:text-3xl"
      >
        DESCARGAR GUÍA
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </Button>
      {/* <Button
          ref={buttonRef}
          className="
            relative
            bg-azulAstro
            z-10
            py-7
            px-12
            text-xl
            md:text-2xl
            font-bold
            uppercase
            tracking-wider
            bg-transparent
            border-2
            
            backdrop-blur-sm
           
            transition-all
            duration-300
          "
          onClick={handleDownload}
        >
          DESCARGAR GUÍA
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </Button> */}

      {/* <div className="mt-8 flex items-center justify-center">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-azulAstro opacity-50"
              style={{
                animation: `pulse 1.5s infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}</style>
      </div> */}
    </div>
  );
};
