
"use client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { ReviewSidebar } from "../components/review-sidebar";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Suspense } from "react";
import { ReviewFormSkeleton } from "../components/review-form";
import { motion } from "framer-motion";

interface Props {
  productId: string;
}

export const ProductView = ({ productId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.library.getOne.queryOptions({
      productId,
    }),
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="p-6 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            prefetch
            href="/library"
            className="flex items-center gap-3 group text-white font-light tracking-wide hover:text-red-400 transition-colors"
          >
            <ArrowLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la Biblioteca</span>
          </Link>
        </motion.div>
      </nav>

      {/* Header */}
      <header className="bg-black/70 backdrop-blur-sm py-12 border-b border-red-900/30">
        <div className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-white uppercase tracking-wider"
          >
            {data.name}
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded mt-4" />
        </div>
      </header>

      {/* Content */}
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12">
          {/* Review Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 bg-black/70 backdrop-blur-sm rounded-xl border-2 border-red-900/50 gap-4">
              <Suspense fallback={<ReviewFormSkeleton />}>
                <ReviewSidebar productId={productId} />
              </Suspense>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="p-8 bg-black/70 backdrop-blur-sm rounded-xl border-2 border-red-900/50">
              {data.content ? (
                <div className="prose prose-invert max-w-none font-light text-white leading-relaxed">
                  <RichText data={data.content} />
                </div>
              ) : (
                <p className="font-light text-gray-400 italic tracking-wide text-center py-8">
                  Contenido especial no disponible
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export const ProductViewSkeleton = () => {
  return (
    <div className="min-h-screen bg-black">
      <nav className="p-6 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex items-center gap-3 text-white font-light tracking-wide">
          <ArrowLeftIcon className="size-5" />
          <span>Volver a la Biblioteca</span>
        </div>
      </nav>
    </div>
  );
};
