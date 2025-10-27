"use client";

import * as React from "react";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Founders() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Create an animation timeline that lifts and scales the card slightly
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out",
    });

    // Play the animation on mouse enter, reverse it on mouse leave
    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners on unmount
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const founders = [
    {
      name: "Caneck Leyva",
      imageUrl: "/retratos/Caneck Bubble1.png",
      description:
        "Fotógrafo mexicano de segunda generación, Ingeniero en Mecatrónica y Maestro en Gestión de la Fotografía. Fundador del Instituto de Fotografía del Noroeste en 2015; su pasión por la astronomía y la fotografía lo llevó a fusionar ambas ramas y emprender el programa de Astrofotografía en el Instituto de Fotografía del Noroeste en 2018 junto con Brandon Echeverrys. Es inspirador de la marca Canon y ha impartido conferencias en plataformas como TEDx y la Academia de San Carlos. Su trabajo ha sido publicado en la revista de National Geographic en Español y diversos libros. ",
      socialLinks: {
        facebook: "https://www.facebook.com/kane.leyva",
        instagram: "https://www.instagram.com/kaneleyva/",
        website: "https://www.caneckleyva.com/",
      },
    },
    {
      name: "Brandon Echeverrys",
      imageUrl: "/retratos/Brandon Bubble1.png",
      description:
        "Astrofotógrafo colombiano, apasionado por la Astronomía y docente en esta área. Miembro de la Sociedad Astronómica de Baja California, colaborador de la revista National geographic en español y guía de astroturismo internacional en el continente americano. ",
      socialLinks: {
        facebook: "https://www.instagram.com/brandonecheverrys/",
        instagram: "https://www.facebook.com/brandonecheverrys/",
        website: "/",
      },
    },
  ];

  return (
    <section
      id="fundadores"
      ref={cardRef}
      className="relative w-full max-w-[1380px] mt-16  py-16  overflow-hidden bg-blackBackgroundNew mx-auto"
    >
      <div className="container mx-auto px-4 md:px-8 z-30  md:pb-32">
        <h1 className="font-bebas text-4xl font-bold text-center mb-12 uppercase text-white">
          FUNDADORES
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="w-full md:w-1/2 flex flex-col items-center"
            >
              {/* Founder Image */}
              <div className="w-full max-w-[300px] flex-shrink-0 mb-8">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  width={140}
                  height={140}
                  className="w-auto h-auto  object-cover"
                />
              </div>

              {/* Founder Content */}
              <div className="w-full flex flex-col items-center text-center">
                <h2 className="font-bebas text-plata text-3xl font-bold uppercase mb-4">
                  {founder.name}
                </h2>

                <div className="text-white leading-relaxed text-justify mb-6 px-4 md:px-0 max-w-[500px]">
                  <div className="h-0.5 w-full bg-azulAstro mt-4 mb-6" />
                  <p>{founder.description}</p>
                </div>

                {Object.keys(founder.socialLinks).length > 0 && (
                  <div className="flex gap-4 justify-center">
                    {founder.socialLinks.facebook && (
                      <a
                        href={founder.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={25}
                          height={25}
                          src={"/brand/icons/Icon-FB2.png"}
                          alt="Facebook"
                        />
                      </a>
                    )}
                    {founder.socialLinks.instagram && (
                      <a
                        href={founder.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={25}
                          height={25}
                          src={"/brand/icons/Icon-IG2.png"}
                          alt="Instagram"
                        />
                      </a>
                    )}
                    {founder.socialLinks.website && (
                      <a
                        href={founder.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={25}
                          height={25}
                          src={"/brand/icons/Icon-WEB2.png"}
                          alt="Website"
                        />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Flecha flotante para hacer scroll a la siguiente sección */}

      {/* <FloatingArrow nextSectionId="invitacion2" /> */}
    </section>
  );
}
