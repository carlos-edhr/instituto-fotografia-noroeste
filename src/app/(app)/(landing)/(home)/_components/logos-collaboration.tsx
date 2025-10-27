import Image from "next/image";
import Link from "next/link";

const LogosCollaborations = () => {
  // Array of logo data with URLs and image sources
  const logos = [
    {
      id: 1,
      src: "/logos/LogoCanon-04.png",
      alt: "Canon",
      href: "https://canon-creators.com/perfil-usuario/Caneck",
    },
    {
      id: 2,
      src: "/logos/LogoNatGeo.png",
      alt: "National Geographic",
      href: "/docs/Astrofotografia_2-1.pdf",
    },
    {
      id: 3,
      src: "/logos/tedx.png",
      alt: "TEDx",
      href: "https://www.ted.com/tedx/events/38529",
    },
    // {
    //   id: 4,
    //   src: "/logos/LogoCanon-04.png",
    //   alt: "Company 4",
    //   href: "https://company4.com",
    // },
  ];

  return (
    <div className=" flex items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <Link
            key={logo.id}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={80}
              className="w-24 h-16 md:w-32 md:h-20 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogosCollaborations;
