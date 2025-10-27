"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  country: string;
  image: string;
  alt: string;
}

export const Participants = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Animaciones para los elementos individuales
    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.1 * index,
        ease: "power2.out",
      });
    });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: "OSVALDO CASTILLO",
      country: "CHILE",
      image: "/landing/conferencistas/1-osvaldo-castillo.jpg",
      alt: "Osvaldo Castillo",
    },
    {
      id: 2,
      name: "TONI GUTIÉRREZ",
      country: "ESPAÑA",
      image: "/landing/conferencistas/2-toni-gutierrez.jpg ",
      alt: "Toni Gutiérrez",
    },
    {
      id: 3,
      name: "RAFAEL POINS",
      country: "ESPAÑA",
      image: "/landing/conferencistas/3-rafael-pons.jpg",
      alt: "Rafael Poins",
    },
    {
      id: 4,
      name: "LALO JUÁREZ",
      country: "MÉXICO",
      image: "/landing/conferencistas/4-lalo-juarez.jpg",
      alt: "Lalo Juárez",
    },
    {
      id: 5,
      name: "ITZAREL HERMÁNDEZ",
      country: "MÉXICO",
      image: "/landing/conferencistas/5-itzarel-hernandez.jpg",
      alt: "Itzarel Hernández",
    },
    {
      id: 6,
      name: "GUILLERMO CERVANTES",
      country: "MÉXICO",
      image: "/landing/conferencistas/6-guillermo-cervantes.jpg",
      alt: "Guillermo Cervantes",
    },
  ];

  return (
    <div
      id="conferencistas"
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
        font-bebas
        text-3xl
        
        md:text-4xl
        font-bold
        text-center
        mb-1
        uppercase
        tracking-wider
      "
      >
        CONFERENCISTAS
      </h2>
      <div className=" w-32 h-1 bg-azulAstro rounded mb-4" />
      {/* <p
        className="
        text-center
        text-gray-300
        max-w-2xl
        mb-12
        text-lg
      "
      >
        Acompáñanos a conocer a los expertos que compartirán su conocimiento en
        el VIII Congreso Internacional de Astrofotografía.
      </p> */}

      <div
        className="
        w-full
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-8
        md:gap-12
      "
      >
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="
              flex
              flex-col
              items-center
              group
              hover:cursor-default
            "
          >
            {/* Imagen circular del conferencista */}
            <div
              className="
              relative
              w-64
              h-64
              rounded-full
              overflow-hidden
              hover:border-4
              
              mb-6
              group-hover:border-azulAstro
              transition-all
              duration-300
            "
            >
              <Image
                src={speaker.image}
                alt={speaker.alt}
                fill
                className="object-cover"
              />
              {/* Para usar la imagen real:
              <Image
                src={speaker.image}
                alt={speaker.alt}
                fill
                className="object-cover"
              />
              */}
            </div>

            {/* Nombre del conferencista */}
            <h3
              className="
              text-xl
              md:text-2xl
              font-bold
              text-center
              uppercase
              tracking-tight
              mb-2
              group-hover:text-azulAstro
              transition-colors
              duration-300
            "
            >
              {speaker.name}
            </h3>

            {/* País de origen */}
            <p
              className="
              text-lg
              text-whtie
              font-medium
              uppercase
              tracking-wider
              p-1
              border-2
              border-white
              group-hover:text-azulAstro
              group-hover:border-azulAstro
            "
            >
              {speaker.country}
            </p>
          </div>
        ))}
      </div>

      {/* Información adicional */}
      {/* <div
        className="
        mt-16
        pt-8
        border-t
        border-gray-800
        w-full
        max-w-3xl
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
      "
      >
        <div
          className="
          text-center
          md:text-left
        "
        >
          <h4
            className="
            text-xl
            font-bold
            uppercase
            mb-4
            text-azulAstro
          "
          >
            Más sobre nuestros conferencistas
          </h4>
          <p className="text-gray-300">
            Cada uno de nuestros expertos trae una perspectiva única y valiosa
            sobre la astrofotografía, compartiendo técnicas innovadoras y
            experiencias enriquecedoras.
          </p>
        </div>

        <div
          className="
          text-center
          md:text-right
        "
        >
          <ul
            className="
            text-gray-300
            space-y-2
          "
          >
            <li>Serán 8 conferencistas internacionales</li>
            <li>El orden de presentación se anunciará próximamente</li>
            <li>Sesiones interactivas con los asistentes</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
