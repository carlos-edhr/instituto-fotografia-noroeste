// components/product-list.tsx
"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useProductFilters } from "../../hooks/use-product-filters";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { DEFAULT_LIMIT } from "@/constants";
import { Button } from "@/components/ui/button";
import { Camera, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  category?: string;
  narrowView?: boolean;
}

export const ProductList = ({ category, narrowView }: Props) => {
  const [filters] = useProductFilters();

  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
        {
          ...filters,
          category,
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
        className="border border-red-900/30 flex flex-col items-center justify-center p-12 bg-black/50 rounded-xl backdrop-blur-sm"
      >
        <div className="relative mb-6">
          <Camera className="text-red-500 w-16 h-16" />
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-red-400 animate-pulse" />
        </div>
        <p className="text-xl font-light tracking-wide text-white">
          No se encontraron cursos
        </p>
        <p className="text-gray-400 mt-2 text-sm font-light">
          Intenta con otros filtros
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          narrowView && "lg:grid-cols-3",
        )}
      >
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
                username={product.user?.name || "Instructor"}
                userImg={product.user?.image?.url || null}
                imageUrl={product.image?.url}
                reviewRating={product.reviewRating}
                reviewCount={product.reviewCount}
                price={product.price}
              />
            </motion.div>
          ))}
      </motion.div>

      <div className="flex justify-center pt-4">
        {hasNextPage && (
          <Button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            className={cn(
              "font-light tracking-wider text-lg py-6 px-10 rounded-lg",
              "bg-gradient-to-r from-red-600 to-red-800 text-white",
              "hover:from-red-700 hover:to-red-900 transition-all duration-300",
              "border border-red-500/20 shadow-lg hover:shadow-red-500/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            {isFetchingNextPage ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Cargando...
              </div>
            ) : (
              "Ver más cursos"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export const ProductListSkeleton = ({ narrowView }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        narrowView && "lg:grid-cols-3",
      )}
    >
      {Array.from({ length: DEFAULT_LIMIT }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
