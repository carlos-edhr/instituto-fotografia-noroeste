import React from "react";
import type { MediaBlock } from "@/types/blocks";
import Image from "next/image";
import { motion } from "framer-motion";

export const MediaBlockComponent: React.FC<MediaBlock> = (props) => {
  const { media, caption, alignment = "center", size = "medium" } = props;

  // Validar que tenemos media
  if (!media) {
    console.warn("Media block missing media");
    return null;
  }

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    full: "max-w-full",
  };

  const alignmentClasses = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  const sizeClass = sizeClasses[size || "medium"];
  const alignmentClass = alignmentClasses[alignment || "center"];

  // Si media es un string (ID), no podemos renderizarlo directamente
  if (typeof media === "string") {
    console.warn("Media block received string ID instead of media object");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-12 ${sizeClass} ${alignmentClass}`}
    >
      <div className="relative bg-black/50 backdrop-blur-sm border-2 border-red-900/30 rounded-xl p-4">
        {media.mimeType?.includes("image") ? (
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={media.url || "/default-image.jpg"}
              alt={media.alt || caption || "Media content"}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="bg-black/30 rounded-lg p-8 text-center border border-red-900/20">
            <p className="text-gray-400">
              Tipo de archivo no soportado para preview
            </p>
          </div>
        )}

        {caption && (
          <figcaption className="text-center text-gray-300 mt-3 text-sm border-t border-red-900/30 pt-3">
            {caption}
          </figcaption>
        )}
      </div>
    </motion.div>
  );
};
