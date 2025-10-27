import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8 ">
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
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

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

        {/* Brand Signature */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-white text-xs font-light tracking-wide uppercase">
            INSTITUO DE FOTOGRAFÍA DEL NOROESTE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";

// import { Heart } from "lucide-react";
// import Link from "next/link";
// import { Instagram, Youtube, Facebook } from "lucide-react";

// const Footer = () => {
//   return (
//     <div className="z-40 w-full h-full bg-slate-800 text-gray-100 shadow-lg p-[15px] ">
//       <div className="w-full flex  flex-col  items-center justify-center m-auto">
//         <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Community</div>
//             <Link
//               target="_blank"
//               href="https://www.youtube.com/@ifnastro/videos"
//             >
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <Youtube />

//                 <span className="text-[15px] ml-[6px]">Youtube</span>
//               </p>
//             </Link>
//             <Link target="_blank" href="https://www.instagram.com/ifntijuana/">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <Instagram />
//                 <span className="text-[15px] ml-[6px]">Instagram</span>
//               </p>
//             </Link>

//             <Link target="_blank" href="https://www.facebook.com/ifntijuana/">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <Facebook />
//                 <span className="text-[15px] ml-[6px]">Facebook</span>
//               </p>
//             </Link>
//           </div>

//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Acerca de nosotros</div>
//             <Link href="/sign-up">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <span className="text-[15px] ml-[6px]">Regístrate</span>
//               </p>
//             </Link>
//             {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">Nuestra misión</span>
//             </p> */}
//             <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">IFN@IFN.com</span>
//             </p>
//           </div>
//         </div>

//         <div className="z-40 mb-[20px] text-[15px] text-center">
//           &copy; Instituto de Fotografía del Noroeste 2025.
//         </div>
//         <div className="flex z-40 mb-[20px] text-[15px] text-center justify-center align-center">
//           <p className="flex align-middle justify-center">
//             Developed with &nbsp;{" "}
//             <Heart className="text-videoBackgroundColor" /> &nbsp; by &nbsp;
//             <Link target="_blank" href="https://github.com/carlos-edhr">
//               <span className="text-primaryLanding">carlos-ehr</span>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
