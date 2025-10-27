// components/product-card.tsx
import Link from "next/link";
import Image from "next/image";
import { StarIcon, Camera, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  username?: string | null;
  userImg?: string | null;
  reviewRating: number;
  reviewCount: number;
  price: number;
}

export const ProductCard = ({
  id,
  name,
  imageUrl,
  username,
  userImg,
  reviewRating,
  reviewCount,
  price,
}: ProductCardProps) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
    });

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleUserClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push("/");
  };

  return (
    <div ref={cardRef} className="relative group">
      <Link href={`products/${id}`}>
        <div className="border border-red-900/30 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm transition-all duration-300 h-full flex flex-col hover:border-red-500/50">
          {/* Image Section */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {imageUrl ? (
              <Image
                alt={name}
                fill
                src={imageUrl}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="bg-gradient-to-br from-black to-red-900/20 w-full h-full flex items-center justify-center">
                <Camera className="w-12 h-12 text-red-500/50" />
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Price Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg backdrop-blur-sm border border-red-500/20">
                <p className="text-sm font-light tracking-wide text-white">
                  {formatCurrency(price)}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Course Title */}
            <h2 className="font-light text-xl text-white line-clamp-2 tracking-wide leading-relaxed group-hover:text-red-100 transition-colors">
              {name}
            </h2>

            {/* Instructor Info */}
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity mt-2"
              onClick={handleUserClick}
            >
              <div className="relative">
                {userImg ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500/30">
                    <Image
                      src={userImg}
                      alt="Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-red-900/30 rounded-full w-10 h-10 flex items-center justify-center border border-red-500/20">
                    <User className="w-5 h-5 text-red-400" />
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-300">Instructor</p>
                <p className="text-red-400 text-sm font-light tracking-wide">
                  {username || "Profesional"}
                </p>
              </div>
            </div>

            {/* Reviews */}
            {reviewCount > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={cn(
                        "size-4 transition-colors",
                        i < Math.floor(reviewRating)
                          ? "fill-red-400 text-red-400"
                          : "fill-gray-800 text-gray-800",
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm font-light text-gray-400">
                  ({reviewCount})
                </p>
              </div>
            )}

            {/* CTA Button */}
            <div className="mt-4 pt-4 border-t border-red-900/30">
              <div className="w-full py-3 text-center bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-500/20 rounded-lg group-hover:from-red-600/20 group-hover:to-red-800/20 transition-all duration-300">
                <p className="text-red-400 text-sm font-light tracking-wide">
                  Ver detalles del curso
                </p>
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 border-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </Link>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border border-red-900/30 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm animate-pulse"
    >
      <div className="bg-gradient-to-br from-black to-red-900/20 aspect-[4/3] w-full" />

      <div className="p-6 space-y-4">
        <div className="h-6 bg-red-900/30 rounded w-4/5" />
        <div className="flex items-center gap-3">
          <div className="bg-red-900/30 rounded-full w-10 h-10" />
          <div className="space-y-2">
            <div className="h-3 bg-red-900/30 rounded w-16" />
            <div className="h-4 bg-red-900/30 rounded w-20" />
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-red-900/30 rounded" />
          ))}
        </div>
        <div className="pt-4 border-t border-red-900/30">
          <div className="w-full h-10 bg-red-900/30 rounded-lg" />
        </div>
      </div>
    </motion.div>
  );
};
