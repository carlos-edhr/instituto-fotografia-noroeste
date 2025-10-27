// checkout-item.tsx
import { cn, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface CheckoutItemProps {
  isLast?: boolean;
  imageUrl?: string | null;
  name: string;
  productUrl: string;
  id: string;
  price: number;
  onRemove: () => void;
}

export const CheckoutItem = ({
  isLast,
  imageUrl,
  name,
  productUrl,
  price,
  onRemove,
}: CheckoutItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "grid grid-cols-[120px_1fr_auto] gap-6 p-6 border-b border-red-900/30",
        isLast && "border-b-0",
      )}
    >
      {/* Product Image */}
      <div className="overflow-hidden rounded-lg border-2 border-red-900/30">
        <div className="relative aspect-square">
          <Image
            src={imageUrl || "/placeholder.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="py-2 flex flex-col justify-between">
        <div>
          <Link href={productUrl}>
            <h4 className="font-light text-white text-lg tracking-wide hover:text-red-400 transition-colors">
              {name}
            </h4>
          </Link>
          <Link href="/">
            <p className="font-light text-gray-400 text-sm tracking-wide hover:text-red-400 transition-colors mt-1">
              Instituto de Fotografía del Noroeste
            </p>
          </Link>
        </div>
      </div>

      {/* Price and Actions */}
      <div className="py-2 flex flex-col justify-between items-end">
        <p className="font-light text-white text-lg tracking-wide">
          {formatCurrency(price)}
        </p>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-1 group"
          onClick={onRemove}
          type="button"
        >
          <X className="w-4 h-4" />
          <span className="font-light text-sm tracking-wide">Eliminar</span>
        </button>
      </div>
    </motion.div>
  );
};
