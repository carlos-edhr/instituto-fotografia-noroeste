// product-list.tsx
"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { DEFAULT_LIMIT } from "@/constants";
import { Button } from "@/components/ui/button";
import { InboxIcon } from "lucide-react";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { motion } from "framer-motion";

export const ProductList = () => {
  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.library.getMany.infiniteQueryOptions(
        {
          limit: DEFAULT_LIMIT,
        },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        },
      ),
    );

  if (data.pages?.[0]?.docs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-red-900/50 flex items-center justify-center p-12 flex-col gap-y-6 bg-black/70 backdrop-blur-sm w-full rounded-xl"
      >
        <InboxIcon className="w-12 h-12 text-red-500" />
        <div className="text-center">
          <h2 className="text-2xl font-light text-white uppercase tracking-wider mb-2">
            Biblioteca Vacía
          </h2>
          <p className="text-gray-400 font-light max-w-md">
            Aún no has adquirido ningún curso
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {data?.pages
          .flatMap((page) => page.docs)
          .map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                imageUrl={product.image?.url}
                userName={product.user?.name ?? ""}
                userImageUrl={product.user?.image?.url}
                reviewRating={product.reviewRating}
                reviewCount={product.reviewCount}
              />
            </motion.div>
          ))}
      </div>

      <div className="flex justify-center pt-12">
        {hasNextPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              disabled={isFetchingNextPage}
              onClick={() => fetchNextPage()}
              className="font-light tracking-wide disabled:opacity-50 text-base bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border border-red-500/20 px-8 py-6"
            >
              {isFetchingNextPage ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Cargando...
                </div>
              ) : (
                "Cargar Más"
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {Array.from({ length: DEFAULT_LIMIT }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
};
