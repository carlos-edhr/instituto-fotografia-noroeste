import React from "react";

import { HeartIcon } from "lucide-react";
import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="z-40 w-full h-full bg-slate-800 text-gray-100 shadow-lg p-[15px] ">
      <div className="w-full flex  flex-col  items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link
              target="_blank"
              href="https://www.youtube.com/@ifnastro/videos"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <Youtube />

                <span className="text-[15px] ml-[6px]">Youtube</span>
              </p>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/ifnastro/">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <Instagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </Link>

            <Link target="_blank" href="https://www.facebook.com/ifnastro">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <Facebook />
                <span className="text-[15px] ml-[6px]">Facebook</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Acerca de nosotros</div>
            <Link
              href="http://wa.me/526647200826"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Regístrate</span>
              </p>
            </Link>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Nuestra misión</span>
            </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                congreso@leyvafotografia.com
              </span>
            </p>
          </div>
        </div>

        <div className="z-40 mb-[20px] text-[15px] text-center">
          &copy; Congreso Internacional de Astrofotografía 2025.
        </div>
        <div className="flex z-40 mb-[20px] text-[15px] text-center justify-center align-center">
          <p className="flex align-middle justify-center">
            Developed with &nbsp; <HeartIcon className="text-azulAstro" />{" "}
            &nbsp; by &nbsp;
            <Link target="_blank" href="https://www.carlos-ehr.com/">
              <span className="text-primaryLanding">carlos-ehr.com</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
