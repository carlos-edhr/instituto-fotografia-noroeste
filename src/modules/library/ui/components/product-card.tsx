// product-card.tsx
import Link from "next/link";
import Image from "next/image";
import { StarIcon, User } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  userName: string;
  userImageUrl?: string | null;
  reviewRating: number;
  reviewCount: number;
}

export const ProductCard = ({
  id,
  name,
  imageUrl,
  userName,
  userImageUrl,
  reviewRating,
  reviewCount,
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link prefetch href={`/library/${id}`}>
        <div className="hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)] transition-all border-2 border-red-900/30 rounded-xl bg-black/70 backdrop-blur-sm overflow-hidden h-full flex flex-col group">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              alt={name}
              fill
              src={imageUrl || "/placeholder.jpg"}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            <h2 className="text-xl font-light text-white line-clamp-3 tracking-wide group-hover:text-red-400 transition-colors">
              {name}
            </h2>

            {/* Instructor */}
            <div className="flex items-center gap-3 pt-2 border-t border-red-900/30">
              {userImageUrl ? (
                <Image
                  src={userImageUrl}
                  alt={userName}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-red-500 shrink-0"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <User className="w-4 h-4 text-red-500" />
                </div>
              )}
              <p className="text-sm font-light text-gray-300 tracking-wide">
                {userName}
              </p>
            </div>

            {/* Ratings */}
            {reviewCount > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="size-4 text-red-500 fill-red-500" />
                  <span className="font-light text-white text-sm">
                    {reviewRating}
                  </span>
                </div>
                <span className="text-gray-400 text-sm font-light">
                  ({reviewCount} {reviewCount === 1 ? "reseña" : "reseñas"})
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="border-2 border-red-900/30 rounded-xl bg-black/70 backdrop-blur-sm overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[4/3] bg-gray-800 animate-pulse" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="h-6 bg-gray-800 rounded animate-pulse" />
        <div className="h-4 bg-gray-800 rounded animate-pulse" />
        <div className="flex items-center gap-3 pt-2 border-t border-red-900/30">
          <div className="w-8 h-8 bg-gray-800 rounded-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded flex-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
