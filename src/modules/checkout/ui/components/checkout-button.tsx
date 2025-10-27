import { Button } from "@/components/ui/button";
import { useCart } from "../../hooks/use-cart";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CheckoutButtonProps {
  className?: string;
  hideIfEmpty?: boolean;
}

export const CheckoutButton = ({
  className,
  hideIfEmpty,
}: CheckoutButtonProps) => {
  const { totalItems } = useCart();

  if (hideIfEmpty && totalItems === 0) return null;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild
        className={cn(
          "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border border-red-500/20 font-light tracking-wide",
          className,
        )}
      >
        <Link href="/checkout" className="flex items-center gap-2">
          <ShoppingCartIcon className="w-4 h-4" />
          <span className="text-sm">
            {totalItems > 0 ? `${totalItems}` : "Carrito"}
          </span>
        </Link>
      </Button>
    </motion.div>
  );
};
