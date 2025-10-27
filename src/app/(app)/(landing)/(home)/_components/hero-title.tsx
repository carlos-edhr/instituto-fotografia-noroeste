"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroTitle: React.FC = () => {
  const realityRef = useRef<HTMLSpanElement | null>(null);

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

  return (
    <h1 className="font-light relative z-10 text-5xl md:text-7xl  text-white text-center px-4 mt-12 md:mt-80">
      Instituto de{" "}
      <span ref={realityRef} className="inline-block text-red-500">
        Fotografía
        <br />
      </span>
      <br />
      del Noroeste
    </h1>
  );
};

export default HeroTitle;
