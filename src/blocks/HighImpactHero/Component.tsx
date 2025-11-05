import React from "react";
import type { HighImpactHeroBlockType } from "@/types/blocks";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Star } from "lucide-react";

export const HighImpactHeroComponent: React.FC<HighImpactHeroBlockType> = (
  props,
) => {
  const { header, backgroundMedia, ctaButtons, stats, styling } = props;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "arrow":
        return <ArrowRight className="w-5 h-5" />;
      case "calendar":
        return <Calendar className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      default:
        return <ArrowRight className="w-5 h-5" />;
    }
  };

  const minHeightClass = {
    screen: "min-h-screen",
    "75": "min-h-[75vh]",
    "50": "min-h-[50vh]",
  }[styling?.minHeight || "screen"];

  const textAlignmentClass = {
    center: "text-center",
    left: "text-left",
  }[styling?.textAlignment || "center"];

  return (
    <section className={`relative ${minHeightClass} bg-black overflow-hidden`}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {backgroundMedia?.backgroundVideo ? (
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src={
                typeof backgroundMedia.backgroundVideo === "object"
                  ? (backgroundMedia.backgroundVideo.url ?? "")
                  : ""
              }
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${typeof backgroundMedia?.backgroundImage === "object" ? backgroundMedia.backgroundImage.url : ""})`,
            }}
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${(backgroundMedia?.overlayOpacity || 60) / 100})`,
          }}
        />

        {/* Decorative elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-800/8 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-red-700/12 blur-[80px] rounded-full" />
        </div> */}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center ${minHeightClass}`}
      >
        <div className={`py-20 lg:py-32 ${textAlignmentClass}`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-8"
          >
            <Star className="w-4 h-4" />
            {header?.badge || "INSTITUTO DE FOTOGRAFÍA DEL NOROESTE"}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-thin text-white uppercase tracking-tight mb-6"
          >
            {header?.title || "EDUCACIÓN FOTOGRÁFICA DE ÉLITE"}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mb-4 mx-auto" />
            <h2 className="text-xl md:text-3xl font-extralight text-red-500 uppercase">
              {header?.subtitle || "TRANSFORMANDO VISIÓN EN REALIDAD"}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 mx-auto leading-relaxed"
          >
            {header?.description ||
              "Más de 15 años formando a la próxima generación de fotógrafos profesionales con metodologías innovadoras y enfoque práctico"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {ctaButtons?.map((button, index) => (
              <Button
                key={index}
                asChild
                className={`
                  ${
                    button.type === "primary"
                      ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-6 text-lg"
                      : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg"
                  }
                  font-semibold transition-all
                `}
              >
                <a href={button.link}>
                  {getIcon(button.icon || "arrow")}
                  {button.text}
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">
                    {stat.number}
                    {stat.suffix && (
                      <span className="text-red-400">{stat.suffix}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HighImpactHeroComponent;
