"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface FloatingArrowProps {
  nextSectionId: string;
}

const FloatingArrow = ({ nextSectionId }: FloatingArrowProps) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  // Efecto de animación flotante con GSAP
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: -10, // Distancia que "flota" hacia arriba
      repeat: -1, // Repetición infinita
      yoyo: true, // Regresa a la posición original
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  // Función para hacer scroll suave hacia la siguiente sección
  const scrollToNextSection = () => {
    // Suponiendo que la siguiente sección tenga el id "nextSection"
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      ref={arrowRef}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={scrollToNextSection}
    >
      <Image
        width={25}
        height={25}
        src={"/brand/icons/Icon-Flecha.png"}
        alt="floating arrow that leads to the next section"
      />
    </div>
  );
};

export default FloatingArrow;
