import React from "react";
import RichText from "@/components/RichText";
import type { ContentBlock as ContentBlockProps } from "@/types/blocks";

export const ContentBlockComponent: React.FC<ContentBlockProps> = (props) => {
  const { richText, width = "medium" } = props;

  // Validar que tenemos contenido
  if (!richText) {
    console.warn("Content block missing richText");
    return null;
  }

  const widthClasses = {
    narrow: "max-w-2xl",
    medium: "max-w-4xl",
    wide: "max-w-6xl",
    full: "max-w-full",
  };

  const widthClass = widthClasses[width || "medium"];

  return (
    <div className={`my-12 mx-auto px-6 ${widthClass}`}>
      <RichText data={richText} enableGutter={false} />
    </div>
  );
};
