import { RenderBlocks } from "@/blocks/RenderBlocks";
import { getPayload } from "payload";
import config from "@/payload.config";
import Hero from "./_components/hero";
import { CursoNivel2Section } from "./_components/curso-nivel-2";
import { TallerLightroomSection } from "./_components/taller-light-room";
import GallerySection from "./_components/gallery-section";
import { CursosPrivadosSection } from "./_components/cursos-privados";
import Footer from "./_components/footer";

async function getHomePage() {
  try {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "pages",
      where: {
        and: [
          {
            slug: {
              equals: "landing-page",
            },
          },
          {
            status: {
              equals: "published",
            },
          },
        ],
      },
      depth: 3,
    });

    if (!pages.docs || pages.docs.length === 0) {
      return null;
    }

    return pages.docs[0];
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

export default async function HomePage() {
  const page = await getHomePage();

  if (!page) {
    // Mostrar landing page por defecto si no existe página home en el CMS
    return (
      <>
        {/* <Navbar /> */}
        <Hero />
        <div className="bg-black w-screen h-48 sm:h-80" />
        <CursoNivel2Section />
        <TallerLightroomSection />
        {/* <TallerRetratoSection /> */}
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
      // <main className="min-h-screen">
      //   {/* Home puede tener un diseño especial sin header tradicional */}
      //   {page.layout && page.layout.length > 0 ? (
      //     <RenderBlocks blocks={page.layout} />
      //   ) : (
      //     <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      //       <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      //       {page.meta?.description && (
      //         <p className="text-lg text-gray-600 mb-8">
      //           {page.meta.description}
      //         </p>
      //       )}
      //       <p className="text-gray-500">
      //         Agrega bloques para construir tu página de inicio.
      //       </p>
      //     </div>
      //   )}
      // </main>
      // <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      //   <div className="text-center max-w-2xl mx-auto px-6">
      //     <h1 className="text-5xl font-bold text-gray-900 mb-6">
      //       Bienvenido a tu Sitio
      //     </h1>
      //     <p className="text-xl text-gray-600 mb-8">
      //       Crea la página de inicio desde el panel de administración de Payload
      //       CMS.
      //     </p>
      //     <div className="space-y-4">
      //       <p className="text-gray-500">
      //         Ve a <code className="bg-gray-100 px-2 py-1 rounded">/admin</code>{" "}
      //         y crea una página con slug landing-page para comenzar.
      //       </p>
      //     </div>
      //   </div>
      // </main>
    );
  }

  // Si existe la página home en el CMS, usar el Layout Builder
  return (
    <main className="min-h-screen">
      {/* Home puede tener un diseño especial sin header tradicional */}
      {page.layout && page.layout.length > 0 ? (
        <RenderBlocks blocks={page.layout} />
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
          {page.meta?.description && (
            <p className="text-lg text-gray-600 mb-8">
              {page.meta.description}
            </p>
          )}
          <p className="text-gray-500">
            Agrega bloques para construir tu página de inicio.
          </p>
        </div>
      )}
    </main>
  );
}
