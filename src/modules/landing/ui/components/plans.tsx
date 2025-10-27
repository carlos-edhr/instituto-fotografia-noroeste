"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PlanProps {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  color: "gray" | "blue" | "yellow";
  number: string;
}

export const Plans: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
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
    });
  }, []);

  const plans: PlanProps[] = [
    {
      id: "MAIN_STAGE", // Should match  DB stream IDs
      title: "MAIN STAGE ",

      subtitle:
        "Acceso a dos días de conferencias en modalidad híbrida. Aprende de expertos en distintos temas del mundo de la Astrofotografía.",
      features: [
        "Acceso completo a conferencias",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF VIII",
      ],

      buttonText: "$1,200.00 MXN",
      color: "gray",
      number: "01",
    },
    {
      id: "STARGAZER",
      title: "STARGAZER ",

      subtitle:
        "Dos noches de campamento en la Sierra de Juárez en un Bortle 2. Astrofotografía y conversaciones con expertos en la materia.",
      features: [
        "Transporte redondo desde Tijuana",
        "Alimentación dentro del campamento",
        "Acceso al rancho",
        "Charla especial de Astrofotografía",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF VIII",
      ],

      buttonText: "$6,000.00 MXN",
      color: "blue",
      number: "02",
    },
    {
      id: "FULL_ACCESS",
      title: "FULL-ACCESS ",
      subtitle:
        "La experiencia completa del Congreso. Accede a dos días de conferencias y dos noches de campamento astrofotográfico en un Bortle 2.",
      features: [
        "Acceso a todas las conferencias",
        "Campamento con transporte y comida",
        "Charla de Astrofotografía",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF VIII",
      ],
      buttonText: "$6,800.00 MXN",
      color: "yellow",
      number: "03",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "gray":
        return {
          passColor: "text-stone-400",
          border: "border-white",
          numberBg: "bg-blue-500",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-stone-400",
          buttonHover: "hover:bg-blue-400",
          underline: "border-stone-400",
        };
      case "yellow":
        return {
          passColor: "text-yellow-500",
          border: "border-white",
          numberBg: "bg-yellow-500",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-yellow-600",
          buttonHover: "hover:bg-sky-700",
          underline: "border-yellow-600",
        };
      case "blue":
        return {
          passColor: "text-sky-500",
          border: "border-white",
          numberBg: "bg-green-500",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-sky-500",
          buttonHover: "hover:bg-sky-400",
          underline: "border-blue-500",
        };
      default:
        return {
          border: "border-white",
          numberBg: "bg-blue-500",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-blue-500",
          buttonHover: "hover:bg-blue-400",
          underline: "border-blue-500",
        };
    }
  };

  return (
    <div
      id="planes"
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
        bg-blackBackgroundNew
        rounded-lg
        font-robotoCondensed
      "
    >
      <h2
        className="
        text-3xl
        md:text-4xl
        font-bold
        text-center
        mb-12
        uppercase
        tracking-wider
        text-white
        font-robotoCondensed
      "
      >
        INSCRIPCIONES
      </h2>

      <div
        className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        mt-4
      "
      >
        {plans.map((plan, index) => {
          const colorClasses = getColorClasses(plan.color);
          //   const isDarkCard = plan.color === "yellow";

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`
                relative
                flex
                flex-col
                rounded-lg
                p-6
                border-2
                ${colorClasses.border}
                bg-blackBackgroundNew
                transition-all
                overflow-hidden
                min-h-[450px]
              `}
            >
              {/* Number Badge */}
              {/* <div
                className={`
                  absolute
                  top-0
                  left-6
                  -translate-y-1/2
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-lg
                  ${colorClasses.numberBg}
                `}
              >
                {plan.number}
              </div> */}

              {/* Plan Title */}
              <h3
                className={`
                  text-xl
                  md:text-2xl
                  font-bold
                  uppercase
                  tracking-wide
                  mb-4
                  ${colorClasses.title}
                  border-b-2
                  ${colorClasses.underline}
                  pb-1
                `}
              >
                {plan.title}
                <span className={`${colorClasses.passColor}`}>PASS</span>
              </h3>

              {/* Plan Subtitle */}
              <p
                className={`
                  text-sm
                  mb-6
                  leading-relaxed
                   text-white
                   text-center
                    justify-center
                `}
              >
                {plan.subtitle}
              </p>

              {/* Features */}
              <ul
                className="
                  space-y-3
                  mb-8
                "
              >
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="
                      text-sm
                      md:text-base
                      flex
                      items-start
                    "
                  >
                    {/* <span className={`mr-2 ${colorClasses.feature}`}>✓</span> */}
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* If you want to display the buttonText as price, use plan.buttonText */}
              {/* <div
                className={`
                  text-2xl
                  font-bold
                  text-center
                  my-6
                  tracking-tighter
                  ${isDarkCard ? "text-black" : "text-white"}
                `}
              >
                {plan.buttonText}
              </div> */}
              {/* Discount Note for Stargazer */}
              {plan.number === "02" && (
                <p className="text-xs text-center text-gray-400 mb-4">
                  Descuento proporcional si vas en transporte propio.
                </p>
              )}

              {/* Button */}
              <Link
                // href={`${process.env.NEXTAUTH_URL}/auth/register`}
                href="http://wa.me/526647200826"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full"
              >
                <Button
                  onClick={() => setShowForm(!showForm)}
                  className={`
          w-full
          py-4
          text-lg
          font-bold
          uppercase
          tracking-wider
          ${colorClasses.buttonBg}
          ${colorClasses.buttonHover}
          text-white
          border-none
          rounded-lg
          mt-4
        `}
                >
                  {plan.buttonText}
                </Button>
              </Link>
              {/* {showForm && <GuestRegistrationForm plan={plan} />} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
