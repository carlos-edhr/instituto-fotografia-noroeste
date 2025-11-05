import React from "react";
import type { MediumImpactHeroBlockType } from "@/types/blocks";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar, User, Award, Zap } from "lucide-react";

export const MediumImpactHeroComponent: React.FC<MediumImpactHeroBlockType> = (
  props,
) => {
  const { header, features, ctaButton, backgroundImage } = props;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "clock":
        return <Clock className="w-5 h-5" />;
      case "calendar":
        return <Calendar className="w-5 h-5" />;
      case "user":
        return <User className="w-5 h-5" />;
      case "award":
        return <Award className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${typeof backgroundImage === "object" ? backgroundImage.url : ""})`,
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-black via-red-950 to-black" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-red-600/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-800/8 blur-[100px] rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full">
              <Zap className="w-4 h-4" />
              {header?.badge || "TALLER ESPECIALIZADO"}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white uppercase tracking-tight">
              {header?.title || "DOMINA LA ILUMINACIÓN PROFESIONAL"}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              {header?.description ||
                "Aprende técnicas avanzadas de iluminación en estudio y exterior con instructores certificados"}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-gray-300 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-6 text-lg font-semibold"
              >
                <a href={ctaButton?.link || "#"}>
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {ctaButton?.text || "Inscribirse al Curso"}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-8 max-w-md w-full">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-red-500" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Inversión del Curso
                  </h3>
                  <p className="text-3xl font-bold text-red-500 mb-2">
                    $6,000.00 MXN
                  </p>
                  <p className="text-gray-300 text-sm">
                    Inscríbete con $3,000.00 y el resto a pagar a lo largo del
                    curso
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                    <span className="text-gray-300 text-sm">Duración</span>
                    <span className="text-white font-semibold">6 semanas</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                    <span className="text-gray-300 text-sm">Sesiones</span>
                    <span className="text-white font-semibold">12 horas</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm">Nivel</span>
                    <span className="text-white font-semibold">Intermedio</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediumImpactHeroComponent;
