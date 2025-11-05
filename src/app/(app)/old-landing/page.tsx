import { CursoNivel2Section } from "../(landing)/(home)/_components/curso-nivel-2";
import { CursosPrivadosSection } from "../(landing)/(home)/_components/cursos-privados";
import Footer from "../(landing)/(home)/_components/footer";
import GallerySection from "../(landing)/(home)/_components/gallery-section";
import Hero from "../(landing)/(home)/_components/hero";
import { TallerLightroomSection } from "../(landing)/(home)/_components/taller-light-room";

const Page = () => {
  return (
    <>
      <Hero />
      <div className="bg-black w-screen h-48 sm:h-80" />
      <CursoNivel2Section />
      <TallerLightroomSection />
      <GallerySection />
      <CursosPrivadosSection />
      <Footer />
    </>
  );
};

export default Page;
