"use client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { ProductList, ProductListSkeleton } from "../components/product-list";
import { Suspense } from "react";
import { motion } from "framer-motion";

export const LibraryView = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="p-6 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        > */}
        <Link
          href="/"
          className="flex items-center gap-3 group text-white font-light tracking-wide hover:text-red-400 transition-colors"
        >
          <ArrowLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span>Seguir Explorando</span>
        </Link>
        {/* </motion.div> */}
      </nav>

      {/* Header */}
      <header className="bg-black/70 backdrop-blur-sm py-12 border-b border-red-900/30">
        <div className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 flex flex-col gap-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-white uppercase tracking-wider"
          >
            Mi Biblioteca
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-light text-gray-400 tracking-wide"
          >
            Tus cursos adquiridos y reseñas
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded mt-2" />
        </div>
      </header>

      {/* Content */}
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-12">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </section>
    </div>
  );
};
