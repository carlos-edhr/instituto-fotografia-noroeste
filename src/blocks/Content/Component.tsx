import React from "react";
import RichText from "@/components/RichText";
import type { ContentBlock as ContentBlockProps } from "@/types/blocks";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-black/90 pt-28 mx-auto px-6 ${widthClass}`}
    >
      <div className="bg-black/90 backdrop-blur-sm border-2 border-red-900/30 rounded-xl p-8">
        <div className="text-white ">
          <RichText data={richText} enableGutter={false} />
        </div>
      </div>
    </motion.div>
  );
};
