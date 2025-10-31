import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import type { Footer as FooterType } from "@/payload-types";

interface Props {
  data: FooterType;
}

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
};

export const Footer: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <footer className="bg-black text-white py-12 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        {data.logo && typeof data.logo === "object" && data.logo.url && (
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-12">
              <Image
                src={data.logo.url}
                alt={data.logo.alt || "Footer Logo"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {data.columns?.map((column, columnIndex) => (
            <div key={columnIndex} className="text-center md:text-left">
              {column.title && (
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                  {column.title}
                </h3>
              )}
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.link}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        {data.socialLinks && data.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-6 mb-8">
            {data.socialLinks.map((social, index) => {
              const IconComponent = socialIcons[social.platform];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-2"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        )}

        {/* Copyright */}
        {data.copyright && (
          <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
            {data.copyright}
          </div>
        )}
      </div>
    </footer>
  );
};
