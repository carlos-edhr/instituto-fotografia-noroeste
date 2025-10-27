"use client";
import React from "react";
import Hero from "./_components/hero";
import { CursoNivel2Section } from "./_components/curso-nivel-2";
import { TallerLightroomSection } from "./_components/taller-light-room";
import { TallerRetratoSection } from "./_components/taller-retrato";
import { CursosPrivadosSection } from "./_components/cursos-privados";
import Footer from "./_components/footer";
import GallerySection from "./_components/gallery-section";
// import LogoCarousel from "./_components/logo-carousel";
// import Nosotros from "./_components/nosotros";
// import Habilidades from "./_components/habilidades";
// import { ReelsSection } from "./_components/mensaje";
// import { BentoBox } from "./_components/bento-box";
// import { Invitacion } from "./_components/invitacion";
// import Testimonies from "./_components/testimonies";
// import PersonalMessage from "./_components/mensaje-personal";
// import PreguntasFrecuentes from "./_components/preguntas-frecuentes";
// import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <div className="bg-black w-screen h-48 sm:h-80" />
      <CursoNivel2Section />
      <TallerLightroomSection />
      <TallerRetratoSection />
      <GallerySection />
      <CursosPrivadosSection />
      <Footer />
      {/* <div className="bg-videoBackgroundColor sm:mt-10  ">
        <Nosotros />
      </div>
      <Habilidades />
      <div className="bg-videoBackgroundColor">
        <ReelsSection videoSrc="videos/hero-vid-1.mp4" />
        <LogoCarousel />
      </div>

      <div className="bg-videoBackgroundColor">
        <BentoBox
          videoTopLeft="videos/hero-vid-1.mp4"
          videoCenter="videos/hero-vid-2.mp4"
          videoBottomRight="videos/hero-vid-1.mp4"
        />
      </div> */}
      {/* <div className="bg-[#0A0E1E] ">
        <Invitacion />
        <LogoCarousel />
      </div> */}

      {/* <Invitacion />
      <Testimonies />
      <PersonalMessage />
      <PreguntasFrecuentes />
      <Footer /> */}
      {/* <div className="bg-videoBackgroundColor w-screen h-screen" /> */}
    </>
  );
};

export default LandingPage;
