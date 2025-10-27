// footer.tsx
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "instagram",
    icon: Instagram,
    link: "https://www.instagram.com/ifntijuana",
  },
  {
    name: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/ifntijuana",
  },
  {
    name: "youtube",
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCvcdpDtY4I7mNMM6RKxf-jA",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Developer Credit */}
          <div className="text-center lg:text-right">
            <p className="text-gray-300 text-sm font-light tracking-wide">
              Desarrollado por{" "}
              <Link
                href="https://www.carlos-ehr.com/"
                target="_blank"
                className="text-red-500 hover:text-red-400 transition-colors duration-300"
              >
                carlos-ehr.com
              </Link>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Brand Signature */}
        <div className="mt-8 pt-6 border-t border-red-900/30 text-center">
          <p className="text-white text-xs font-light tracking-wide uppercase">
            INSTITUTO DE FOTOGRAFÍA DEL NOROESTE
          </p>
        </div>
      </div>
    </footer>
  );
};
