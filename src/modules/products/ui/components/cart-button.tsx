import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";
import Link from "next/link";

interface Props {
  productId: string;
  isPurchased?: boolean;
}

export const CartButton = ({ productId, isPurchased }: Props) => {
  const cart = useCart();

  if (isPurchased) {
    return (
      <Button
        variant="outline"
        asChild
        className="flex-1 font-light border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        <Link href={`/library/${productId}`}>Ver en biblioteca</Link>
      </Button>
    );
  }

  const isInCart = cart.isProductInCart(productId);

  return (
    <Button
      className={cn(
        "flex-1 font-light transition-all duration-300",
        isInCart
          ? "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          : "bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900",
      )}
      onClick={() => cart.toggleProduct(productId)}
    >
      {isInCart ? "Quitar del carrito" : "Añadir al carrito"}
    </Button>
  );
};
