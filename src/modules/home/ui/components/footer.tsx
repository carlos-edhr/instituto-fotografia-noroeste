// components/footer.tsx
import Image from "next/image";
import { Facebook, Youtube, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-800/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start mb-6">
              <div className="relative w-48 h-16 mb-4">
                <Link href="/" className="flex items-center z-10">
                  <Image
                    src="/img/logo-1.png"
                    alt="Instituto de Fotografía del Noroeste"
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="w-48 h-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded mb-4" />
              <p className="font-light text-gray-300 text-sm leading-relaxed max-w-md">
                Escuela profesional de fotografía dedicada a la formación de
                fotógrafos de élite con más de 15 años de experiencia en
                educación visual y técnica fotográfica.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500" />
                <a
                  href="mailto:curso@leyvafotografia.com"
                  className="font-light text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  curso@leyvafotografia.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-500" />
                <p className="font-light text-gray-300 text-sm">
                  Tijuana, Baja California, México
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-light text-white text-lg tracking-wide mb-4">
              Cursos
            </h3>
            <div className="space-y-2">
              {[
                { name: "Iluminación Nivel 1", href: "#cursos" },
                { name: "Iluminación Nivel 2", href: "#cursos" },
                { name: "Taller de Retrato", href: "#talleres" },
                { name: "Lightroom Classic", href: "#talleres" },
                { name: "Cursos Privados", href: "#privados" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-light text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-light text-white text-lg tracking-wide mb-4">
              Conéctate
            </h3>
            <div className="flex gap-3 mb-4">
              {[
                {
                  icon: <Instagram size={18} />,
                  href: "https://www.instagram.com/ifntijuana",
                },
                {
                  icon: <Facebook size={18} />,
                  href: "https://www.facebook.com/ifntijuana",
                },
                {
                  icon: <Youtube size={18} />,
                  href: "https://www.youtube.com/channel/UCvcdpDtY4I7mNMM6RKxf-jA",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-900/30 p-3 rounded-lg border border-red-900/50 text-gray-300 hover:text-white hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-red-900/30">
              <p className="font-light text-gray-400 text-sm">
                Educación fotográfica de élite
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-red-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-light text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Instituto de Fotografía del Noroeste.
            Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm">
            {/* Developer Credit */}
            <div className="text-center lg:text-right">
              <p className="text-stone-100 text-sm font-light tracking-wide">
                Developed by{" "}
                <Link
                  href="https://www.carlos-ehr.com/"
                  target="_blank"
                  className="text-sky-400 hover:text-gray-300 transition-colors duration-300"
                >
                  carlos-ehr.com
                </Link>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
