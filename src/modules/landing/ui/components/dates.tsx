"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export const Dates = ({}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out",
    });

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Event data structure
  const events = [
    {
      location: "CETYS UNIVERSIDAD, TIJUANA",
      days: [
        { date: "Miércoles 23", title: "CONFERENCIAS DÍA 1" },
        { date: "Jueves 24", title: "CONFERENCIAS DÍA 2" },
      ],
    },
    {
      location: "SIERRA DE JUÁREZ, ENSENADA",
      days: [
        { date: "Viernes 25", title: "CAMPAMENTO DÍA 1" },
        { date: "Sábado 26", title: "CAMPAMENTO DÍA 2" },
        { date: "Domingo 27", title: "REGRESO A TIJUANA" },
      ],
    },
  ];

  return (
    <div
      id="fechas"
      ref={cardRef}
      className="
        relative
        w-full
        max-w-[980px]
        mx-auto
        flex
        flex-col
        items-center
        overflow-hidden
        text-white
        p-6
        md:p-10
        shadow-lg
        mt-8
        bg-[#191919]
        rounded-lg
        font-robotoCondensed
      "
    >
      {/* Top Image - July Dates */}
      <div className="w-full max-w-[600px] mb-8">
        <Image
          src="/landing/fechas1.png" // Update with actual image path
          alt="Fechas del evento: Julio 23, 24, 25, 26"
          width={600}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Event List - Single Centered Column */}
      <div className="w-full max-w-xl mx-auto flex flex-col gap-10">
        {events.map((eventGroup, groupIndex) => (
          <div key={groupIndex} className="flex flex-col items-center">
            {/* Location Header */}
            <h3
              className="
            text-xl
            md:text-2xl
            font-bold
            uppercase
            tracking-wide
            mb-4
            text-azulAstro
            text-center
          "
            >
              {eventGroup.location}
            </h3>
            {/* horizontal line */}
            <div className="w-60 h-1 bg-azulAstro rounded mb-4" />
            {/* Event Days */}
            <div className="w-full space-y-6">
              {eventGroup.days.map((day, dayIndex) => (
                <div key={dayIndex} className="flex flex-col items-center">
                  <span
                    className="
                text-lg
                font-bold
                text-white
                mb-1
              "
                  >
                    {day.date}
                  </span>
                  <span
                    className="
                text-xl
                 font-bold
                text-wite
                tracking-wide
                font-robotoCondensed
              "
                  >
                    {day.title}
                  </span>

                  {/* Divider except last item */}
                  {/* {dayIndex < eventGroup.days.length - 1 && (
                    <div
                      className="
                mt-4
                w-full
                h-px
                bg-gray-800
                "
                    />
                  )} */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Image - Camping Illustration */}
      {/* <div className="w-full max-w-[400px] mt-10">
        <Image
          src="/path/to/camping-illustration.png" // Update with actual image path
          alt="Ilustración de campamento"
          width={400}
          height={150}
          className="w-full h-auto"
        />
      </div> */}
    </div>
  );
};
