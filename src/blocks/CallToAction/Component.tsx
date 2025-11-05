import React from "react";
import { CallToActionBlockType } from "../../types/blocks";
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

export const CallToActionBlockComponent: React.FC<CallToActionBlockType> = (
  props,
) => {
  const { richText, buttons = [], style = {} } = props;
  const { background = "gradient", alignment = "center" } = style;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "arrowRight":
        return <ArrowRight className="w-4 h-4" />;
      case "calendar":
        return <Calendar className="w-4 h-4" />;
      case "phone":
        return <Phone className="w-4 h-4" />;
      case "mail":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getButtonVariant = (type: string) => {
    switch (type) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      case "outline":
        return "outline";
      default:
        return "default";
    }
  };

  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-black via-red-950 to-black",
    solid: "bg-black",
    image: "bg-black relative overflow-hidden",
  };

  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
  };

  return (
    <section
      className={`py-32  px-4 sm:px-6 lg:px-8 relative ${backgroundClasses[background]}`}
    >
      {/* Decorative elements for gradient/solid backgrounds */}
      {(background === "gradient" || background === "solid") && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-800/8 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-700/10 blur-[80px] rounded-full" />
        </div>
      )}

      {/* Background image overlay */}
      {background === "image" && (
        <>
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/5 blur-[100px] rounded-full" />
          </div>
        </>
      )}

      <div
        className={`max-w-4xl mx-auto relative z-10 ${alignmentClasses[alignment]}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-8"
          >
            {/* <Star className="w-4 h-4" /> */}
            Instituto de Fotografía del Noroeste
          </motion.div>

          {/* Rich Text Content */}
          <div className="mb-8">
            <RichText
              data={richText}
              enableGutter={false}
              className="text-white"
            />
          </div>

          {/* Buttons */}
          {buttons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`flex flex-wrap gap-4 ${alignment === "center" ? "justify-center" : "justify-start"}`}
            >
              {buttons.map((button, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    asChild
                    variant={getButtonVariant(button.type)}
                    size="lg"
                    className={`
                      ${
                        button.type === "primary"
                          ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white"
                          : ""
                      }
                      ${
                        button.type === "outline"
                          ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          : ""
                      }
                      px-8 py-6 text-lg font-semibold transition-all
                    `}
                  >
                    <a href={button.link}>
                      {button.icon &&
                        button.icon !== "none" &&
                        getIcon(button.icon)}
                      {button.label}
                      {button.icon === "none" && button.type === "primary" && (
                        <ArrowRight className="w-4 h-4 ml-2" />
                      )}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Additional decorative element */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-8 ${
              alignment === "center" ? "mx-auto" : ""
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionBlockComponent;
