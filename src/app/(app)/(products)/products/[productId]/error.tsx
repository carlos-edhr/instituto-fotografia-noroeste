"use client";

import { TriangleAlertIcon } from "lucide-react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="px-4 lg:px-12 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-2 border-red-900/50 flex items-center justify-center p-12 flex-col gap-y-6 bg-black/70 backdrop-blur-sm w-full rounded-xl"
      >
        <div className="relative">
          <TriangleAlertIcon className="w-16 h-16 text-red-500" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-light text-white uppercase tracking-wider mb-2">
            Algo salió mal
          </h2>
          <p className="text-gray-400 font-light max-w-md">
            Estamos trabajando para solucionar el problema. Por favor, intenta
            nuevamente.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg font-light tracking-wide transition-all duration-300 border border-red-500/20"
        >
          Reintentar
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
