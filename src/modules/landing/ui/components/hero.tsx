import React from "react";
import StarsCanvas from "./star-background";
import Image from "next/image";
import FloatingArrow from "./floating-arrow";

const Hero = () => {
  return (
    <header className=" z-10 relative min-h-screen overflow-hidden">
      <StarsCanvas />
      {/* Navigation */}

      {/* Main Content */}
      <div className="container mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-4 md:pt-32 text-center">
        {/* Top Logo */}

        <div className="relative mx-auto w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]">
          <Image
            src="/brand/CIAF8-Logo8.png"
            alt="Congress Logo"
            fill
            className="object-contain z-50"
            priority
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
      </div>
      {/* Flecha flotante para hacer scroll a la siguiente sección */}

      <FloatingArrow nextSectionId="invitacion" />
    </header>
  );
};

export default Hero;
