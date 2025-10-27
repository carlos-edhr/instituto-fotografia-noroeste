"use client";

import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CheckCheckIcon, LinkIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { motion } from "framer-motion";

const CartButton = dynamic(
  () => import("../components/cart-button").then((mod) => mod.CartButton),
  {
    ssr: false,
    loading: () => (
      <Button disabled className="flex-1 bg-red-600/80 text-white font-light">
        Agregar al carrito
      </Button>
    ),
  },
);

interface ProductViewProps {
  productId: string;
}

export const ProductView = ({ productId }: ProductViewProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({ id: productId }),
  );
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="px-4 lg:px-12 py-10 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-2 border-red-900/50 rounded-xl bg-black/70 backdrop-blur-sm overflow-hidden"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={data.image?.url || "/placeholder.png"}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0">
          {/* Left Column - Product Details */}
          <div className="col-span-4">
            <div className="p-8 border-b border-red-900/30">
              <h1 className="font-light text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
                {data.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded" />
            </div>

            {/* Desktop Info Bar */}
            <div className="border-b border-red-900/30 flex flex-col md:flex-row">
              <div className="px-8 py-6 flex items-center justify-center md:border-r border-red-900/30">
                <div className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg w-fit">
                  <p className="font-light text-white text-xl tracking-wide">
                    {formatCurrency(data.price)}
                  </p>
                </div>
              </div>

              <div className="px-8 py-6 flex items-center justify-center md:border-r border-red-900/30">
                <Link href="/" className="flex items-center gap-3 group">
                  {data.user.image?.url && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-500">
                      <Image
                        src={data.user.image.url}
                        alt={data.user.name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="font-light text-white group-hover:text-red-400 transition-colors tracking-wide">
                    {data.user.name}
                  </p>
                </Link>
              </div>

              <div className="hidden md:flex px-8 py-6 items-center justify-center">
                <div className="flex items-center gap-2">
                  <StarRating
                    rating={data.reviewRating}
                    iconClassName="size-5 text-red-500"
                  />
                  <p className="font-light text-gray-400 tracking-wide">
                    ({data.reviewCount} calificaciones)
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Info */}
            <div className="block md:hidden px-8 py-6 border-b border-red-900/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StarRating
                    rating={data.reviewRating}
                    iconClassName="size-5 text-red-500"
                  />
                  <p className="font-light text-gray-400 tracking-wide">
                    ({data.reviewCount})
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {data.user.image?.url && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-500">
                      <Image
                        src={data.user.image.url}
                        alt={data.user.name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="font-light text-white tracking-wide">
                    {data.user.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 border-b border-red-900/30">
              {data.description ? (
                <div className="prose prose-invert max-w-none font-light text-white leading-relaxed">
                  <RichText data={data.description} />
                </div>
              ) : (
                <p className="font-light text-gray-400 italic tracking-wide">
                  No se proporcionó descripción
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Actions and Ratings */}
          <div className="col-span-2">
            <div className="border-t border-red-900/30 lg:border-t-0 lg:border-l border-red-900/30 h-full">
              {/* Action Buttons */}
              <div className="flex flex-col gap-6 p-8 border-b border-red-900/30">
                <div className="flex flex-row items-center gap-4">
                  <CartButton
                    isPurchased={data.isPurchased}
                    productId={productId}
                  />

                  <Button
                    className="size-16 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border border-red-500/20"
                    onClick={() => {
                      setIsCopied(true);
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Enlace copiado al portapapeles");
                      setTimeout(() => {
                        setIsCopied(false);
                      }, 1000);
                    }}
                    disabled={isCopied}
                  >
                    {isCopied ? (
                      <CheckCheckIcon className="size-7" />
                    ) : (
                      <LinkIcon className="size-7" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Ratings Section */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-light text-2xl text-white uppercase tracking-wider">
                    Calificaciones
                  </h3>
                  <div className="flex items-center gap-x-2 font-light">
                    <StarIcon className="size-5 text-red-500 fill-red-500" />
                    <p className="text-white">({data.reviewRating})</p>
                    <p className="text-gray-400 tracking-wide">
                      {data.reviewCount} calificaciones
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <Fragment key={stars}>
                      <div className="font-light text-white flex items-center tracking-wide">
                        {stars}{" "}
                        <StarIcon className="size-5 text-red-500 fill-red-500 ml-2" />
                      </div>
                      <Progress
                        value={data.ratingDistribution[stars]}
                        className="h-3 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-red-600 [&>div]:to-red-800"
                      />
                      <div className="font-light text-gray-400 tracking-wide">
                        {data.ratingDistribution[stars]}%
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
