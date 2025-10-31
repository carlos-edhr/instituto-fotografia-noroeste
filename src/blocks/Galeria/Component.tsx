"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import {
  FiX,
  FiMaximize2,
  FiMinimize2,
  FiZoomIn,
  FiZoomOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import type { GaleriaBlock as GaleriaBlockType } from "@/types/blocks";
import type { Media as MediaType } from "@/payload-types";

// Define el tipo basado en la estructura real de galleryItems
type GalleryItemType = NonNullable<GaleriaBlockType["galleryItems"]>[number];

export const GaleriaBlockComponent: React.FC<GaleriaBlockType> = (props) => {
  const { header, galleryItems = [], pagination, footerText } = props;

  const [selectedImage, setSelectedImage] = useState<GalleryItemType | null>(
    null,
  );
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    pagination?.itemsPerPageDesktop || 10,
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil y ajustar items por página
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsPerPage(
        mobile
          ? pagination?.itemsPerPageMobile || 6
          : pagination?.itemsPerPageDesktop || 10,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [pagination]);

  // Calcular imágenes para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (scale > 1) setPosition({ x, y });
    },
    onPinch: ({ offset: [d] }) => {
      setScale(Math.min(Math.max(1, scale + d / 100), 3));
    },
  });

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
    if (!isImageFullscreen) resetZoom();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") {
          setSelectedImage(null);
          resetZoom();
        }
        if (e.key === "+") setScale((s) => Math.min(s + 0.25, 3));
        if (e.key === "-") setScale((s) => Math.max(s - 0.25, 1));
        if (e.key === "0") resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Helper function to get image URL
  const getImageUrl = (image: string | MediaType): string => {
    if (typeof image === "string") return image;
    return image.url || "/placeholder-image.jpg";
  };

  return (
    <div
      id="gallery"
      className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-800/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-700/10 blur-[80px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-6">
            {header?.badge || "PORTAFOLIO DE NUESTROS ESTUDIANTES"}
          </div>
          <h2 className="text-4xl md:text-6xl font-thin text-white uppercase tracking-tight mb-4">
            {header?.title || "GALERÍA"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-extralight text-red-500 uppercase tracking-wider">
            {header?.subtitle || "EVIDENCIAS DE APRENDIZAJE"}
          </h3>
          <p className="text-gray-400 font-light max-w-2xl mx-auto mt-4 text-lg">
            {header?.description ||
              "Una colección de obras que representan la dedicación por parte de nuestros estudiantes. Cada imagen es un testimonio del aprendizaje y la pasión por la fotografía."}
          </p>
        </motion.div>
      </div>

      {/* Image Grid */}
      {galleryItems.length > 0 ? (
        <>
          <div className="sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 relative z-10">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id || `gallery-item-${index}`}
                className="relative break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(item)}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-red-900/30 bg-black/20 backdrop-blur-sm">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                    <div className="text-left">
                      <h4 className="text-white font-light text-lg mb-2 tracking-wide">
                        {item.title}
                      </h4>
                      <div className="w-8 h-0.5 bg-red-500 mb-3"></div>
                      <p className="text-gray-300 font-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-red-400 font-light text-xs mt-3 tracking-wide">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center items-center mt-12 space-x-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="bg-transparent border-red-700 text-white hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft className="w-4 h-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    size="sm"
                    onClick={() => paginate(number)}
                    className={`${
                      currentPage === number
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-transparent border-red-700 text-white hover:bg-red-800"
                    } min-w-[40px]`}
                  >
                    {number}
                  </Button>
                ),
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="bg-transparent border-red-700 text-white hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}

          {/* Información de paginación */}
          <motion.div
            className="text-center mt-4 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 font-light text-sm">
              Mostrando {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, galleryItems.length)} de{" "}
              {galleryItems.length} imágenes
              {isMobile && " (vista móvil)"}
            </p>
          </motion.div>
        </>
      ) : (
        <div className="text-center py-12 relative z-10">
          <p className="text-gray-400 text-lg">No hay imágenes en la galería</p>
        </div>
      )}

      {/* Full Screen Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              setSelectedImage(null);
              resetZoom();
              setIsImageFullscreen(false);
            }}
          >
            <div
              className={`relative ${isImageFullscreen ? "w-screen h-screen" : "w-full max-w-6xl max-h-screen"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-3 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.min(s + 0.25, 3));
                  }}
                  className="bg-black/50 backdrop-blur-sm border border-red-900/30 text-white hover:bg-red-600 hover:text-white transition-all"
                >
                  <FiZoomIn className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.max(s - 0.25, 1));
                  }}
                  className="bg-black/50 backdrop-blur-sm border border-red-900/30 text-white hover:bg-red-600 hover:text-white transition-all"
                >
                  <FiZoomOut className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleImageFullscreen();
                  }}
                  className="bg-black/50 backdrop-blur-sm border border-red-900/30 text-white hover:bg-red-600 hover:text-white transition-all"
                >
                  {isImageFullscreen ? (
                    <FiMinimize2 className="w-5 h-5" />
                  ) : (
                    <FiMaximize2 className="w-5 h-5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                    resetZoom();
                  }}
                  className="bg-black/50 backdrop-blur-sm border border-red-900/30 text-white hover:bg-red-600 hover:text-white transition-all"
                >
                  <FiX className="w-5 h-5" />
                </Button>
              </div>

              {/* Image Container */}
              <motion.div
                className={`relative ${isImageFullscreen ? "h-full w-full" : "aspect-[4/3] md:aspect-video"}`}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  touchAction: "none",
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(bind() as any)}
              >
                <Image
                  src={getImageUrl(selectedImage.image)}
                  alt={selectedImage.title}
                  fill
                  quality={100}
                  className="object-contain cursor-grab active:cursor-grabbing"
                  priority
                  sizes="100vw"
                />
              </motion.div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-6 border border-red-900/30 max-w-2xl">
                <h3 className="text-white font-light text-xl mb-2 tracking-wide">
                  {selectedImage.title}
                </h3>
                <div className="w-56 h-0.5 bg-red-500 mb-3"></div>
                <p className="text-gray-300 font-light text-sm leading-relaxed mb-2">
                  {selectedImage.description}
                </p>
                <p className="text-red-400 font-light text-sm tracking-wide">
                  {selectedImage.year} • {selectedImage.courseName}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16 pt-8 border-t border-red-900/30 relative z-10"
      >
        <p className="text-gray-400 font-light text-sm tracking-wide">
          {footerText ||
            "Impulsando la creatividad a través de la fotografía • Educación visual de élite"}
        </p>
      </motion.div>
    </div>
  );
};
