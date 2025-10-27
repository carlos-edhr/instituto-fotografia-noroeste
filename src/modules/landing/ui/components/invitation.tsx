"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export const Invitation = ({}) => {
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

  return (
    <div
      id="2025"
      ref={cardRef}
      className="
      font-robotoCondensed
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
        p-6
        md:p-10
        shadow-lg
        mt-8
        bg-[#191919]
        rounded-lg
      "
    >
      {/* Main Title */}
      <div>
        <Image
          src="/brand/CIAF8-Logo8.png"
          alt="Congress Logo"
          width={298}
          height={250}
          className="object-contain "
        />
      </div>

      {/* <h1
        className="
        text-center
        text-4xl
        md:text-5xl
        lg:text-6xl
        font-bold
        font-bebas
        uppercase
        leading-tight
        tracking-wide
        mb-4
      "
      >
        VIII CONGRESO INTERNACIONAL DE
        <br />
        <span className="text-azulAstro">ASTROFOTOGRAFÍA</span>
      </h1> */}

      {/* Dates */}
      {/* <h2
        className="
        text-center
        text-xl
        md:text-2xl
        font-bold
        font-bebas
        uppercase
        tracking-widest
        mb-8
        text-azulAstro
      "
      >
        26.-27.-28 MÉXICO 2025
      </h2> */}

      {/* Description */}
      <div
        className="
        w-full
        max-w-3xl
        text-center
        my-8
        font-robotoCondensed
        font-light
        text-base
        md:text-lg
        leading-relaxed
      "
      >
        <p className="mb-4  font-robotoCondensed">
          Congreso Internacional de Astrofotografía pionero en México fundado en
          2018 con el objetivo de reunir a amateurs y profesionales de la
          Astrofotografía y Astronomía en un solo foro. Este evento anual reúne
          a talentos de distintos países para impartir conferencias magistrales,
          talleres y campamentos diseñados exclusivamente para amantes de la
          Astrofotografía y Astronomía.
        </p>

        <p className="mb-4">
          Baja California es la sede de este congreso, un estado de México que
          ofrece uno de los mejores cielos del mundo en la Sierra de Juárez y
          San Pedro Mártir (Borte 2 y 1 sucesivamente).
        </p>
        <p
          className="
          text-xl
          md:text-xl
        
          font-robotoCondensed
          mt-6
          
        "
        >
          &quot;Bienvenidos al Congreso Internacional de Astrofotografía&quot;
        </p>
      </div>

      {/* Registration Button */}
      <div className="mt-4 w-full max-w-3xl">
        <Link
          // href={`${process.env.NEXTAUTH_URL}/auth/register`}
          href="http://wa.me/526647200826"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="azulAstro"
            size="lg"
            className="text-blackBackgroundNew w-full font-robotoCondensed py-6 text-2xl md:text-3xl"
          >
            REGÍSTRATE
          </Button>
        </Link>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex space-x-6">
        {[
          {
            icon: <Facebook size={20} />,
            href: "https://www.facebook.com/ifnastro",
          },
          {
            icon: <Youtube size={20} />,
            href: "https://www.youtube.com/@ifnastro/videos",
          },
          {
            icon: <Instagram size={20} />,
            href: "https://www.instagram.com/ifnastro/",
          },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="
            text-black
            bg-azulAstro
              backdrop-blur-sm
              p-3 
              rounded-full 
              transition-all 
              hover:bg-white 
              hover:scale-110
            "
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
