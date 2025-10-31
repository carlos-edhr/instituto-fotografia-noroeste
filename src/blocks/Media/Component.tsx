import React from "react";
import type { MediaBlock } from "@/types/blocks";
import Image from "next/image";

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
    <div className={`my-8 ${sizeClass} ${alignmentClass}`}>
      <div className="relative">
        {media.mimeType?.includes("image") ? (
          <Image
            src={media.url || "/default-image.jpg"}
            alt={media.alt || caption || "Media content"}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">
              Tipo de archivo no soportado para preview
            </p>
          </div>
        )}

        {caption && (
          <figcaption className="text-center text-gray-600 mt-2 text-sm">
            {caption}
          </figcaption>
        )}
      </div>
    </div>
  );
};
