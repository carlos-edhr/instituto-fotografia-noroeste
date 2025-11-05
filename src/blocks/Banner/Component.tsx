import React from "react";
import { BannerBlockType } from "../../types/blocks";
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const BannerBlockComponent: React.FC<BannerBlockType> = (props) => {
  const { style = "info", content, enableCTA, ctaText, ctaLink } = props;

  const styleConfig = {
    info: {
      icon: Info,
      bg: "bg-blue-900/20",
      border: "border-blue-700/30",
      text: "text-blue-300",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-yellow-900/20",
      border: "border-yellow-700/30",
      text: "text-yellow-300",
      button: "bg-yellow-600 hover:bg-yellow-700",
    },
    success: {
      icon: CheckCircle,
      bg: "bg-green-900/20",
      border: "border-green-700/30",
      text: "text-green-300",
      button: "bg-green-600 hover:bg-green-700",
    },
    error: {
      icon: AlertCircle,
      bg: "bg-red-900/20",
      border: "border-red-700/30",
      text: "text-red-300",
      button: "bg-red-600 hover:bg-red-700",
    },
  };

  const { icon: Icon, bg, border, text, button } = styleConfig[style];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl border ${border} ${bg} p-6 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-full ${bg} border ${border}`}>
          <Icon className={`w-5 h-5 ${text}`} />
        </div>

        <div className="flex-1">
          <div className={text}>
            <RichText data={content} enableGutter={false} />
          </div>

          {enableCTA && ctaText && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <Button asChild className={`${button} text-white`} size="sm">
                <a href={ctaLink || "#"}>
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BannerBlockComponent;
