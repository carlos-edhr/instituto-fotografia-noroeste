import React from "react";
import type { LowImpactHeroBlockType } from "@/types/blocks";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const LowImpactHeroComponent: React.FC<LowImpactHeroBlockType> = (
  props,
) => {
  const { header, ctaButton, styling } = props;

  const backgroundClass =
    styling?.background === "solid"
      ? "bg-black"
      : "bg-gradient-to-br from-black via-red-950 to-black";

  const textAlignmentClass =
    styling?.textAlignment === "left" ? "text-left" : "text-center";

  return (
    <section
      className={`relative py-20 lg:py-32 overflow-hidden ${backgroundClass}`}
    >
      {/* Decorative elements - minimal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-600/5 blur-[60px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-red-800/5 blur-[70px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={textAlignmentClass}>
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-thin text-white uppercase tracking-tight mb-6"
          >
            {header?.title || "Cursos Especializados en Fotografía"}
          </motion.h1>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mb-8 ${
              textAlignmentClass === "text-center" ? "mx-auto" : ""
            }`}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {header?.description ||
              "Programas intensivos diseñados para desarrollar habilidades técnicas y creativas"}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg font-semibold"
            >
              <a href={ctaButton?.link || "#"}>
                {ctaButton?.text || "Ver Programas"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LowImpactHeroComponent;
