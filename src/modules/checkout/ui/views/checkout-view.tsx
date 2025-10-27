"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCart } from "../../hooks/use-cart";
import { useEffect } from "react";
import { toast } from "sonner";
import { CheckoutItem } from "../components/checkout-item";
import { CheckoutSidebar } from "../components/checkout-sidebar";
import { InboxIcon, LoaderIcon } from "lucide-react";
import { useCheckoutStates } from "../../hooks/use-checkout-states";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const CheckoutView = () => {
  const router = useRouter();
  const [states, setStates] = useCheckoutStates();
  const { productIds, removeProduct, clearCart } = useCart();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(
    trpc.checkout.getProducts.queryOptions({
      ids: productIds,
    }),
  );

  const purchase = useMutation(
    trpc.checkout.purchase.mutationOptions({
      onMutate: () => {
        setStates({ success: false, cancel: false });
      },
      onSuccess: (data) => {
        window.location.href = data.url;
      },
      onError: (error) => {
        if (error.data?.code === "UNAUTHORIZED") {
          router.push("/sign-in");
        }
        toast.error(error.message);
      },
    }),
  );

  useEffect(() => {
    if (states.success) {
      setStates({ success: false, cancel: false });
      clearCart();
      queryClient.invalidateQueries(trpc.library.getMany.infiniteQueryFilter());
      router.push("/library");
    }
  }, [
    states.success,
    clearCart,
    router,
    setStates,
    queryClient,
    trpc.library.getMany,
  ]);

  useEffect(() => {
    if (error?.data?.code === "NOT_FOUND") {
      clearCart();
      toast.warning("Productos inválidos encontrados, carrito limpiado");
    }
  }, [error, clearCart]);

  if (isLoading) {
    return (
      <div className="lg:pt-16 pt-4 px-4 lg:px-12 bg-black min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-red-900/50 flex items-center justify-center p-12 flex-col gap-y-6 bg-black/70 backdrop-blur-sm w-full rounded-xl"
        >
          <LoaderIcon className="text-red-500 animate-spin w-8 h-8" />
          <p className="text-white font-light tracking-wide">
            Cargando productos...
          </p>
        </motion.div>
      </div>
    );
  }

  if (data?.totalDocs === 0)
    return (
      <div className="lg:pt-16 pt-4 px-4 lg:px-12 bg-black min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-red-900/50 flex items-center justify-center p-12 flex-col gap-y-6 bg-black/70 backdrop-blur-sm w-full rounded-xl"
        >
          <InboxIcon className="w-12 h-12 text-red-500" />
          <div className="text-center">
            <h2 className="text-2xl font-light text-white uppercase tracking-wider mb-2">
              Carrito Vacío
            </h2>
            <p className="text-gray-400 font-light max-w-md">
              No se encontraron productos en tu carrito
            </p>
          </div>
        </motion.div>
      </div>
    );

  return (
    <div className="lg:pt-16 pt-4 px-4 lg:px-12 bg-black min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12"
      >
        <div className="lg:col-span-4">
          <div className="border-2 border-red-900/50 rounded-xl overflow-hidden bg-black/70 backdrop-blur-sm">
            {data?.docs.map((product, index) => (
              <CheckoutItem
                key={product.id}
                id={product.id}
                isLast={index === data.docs.length - 1}
                imageUrl={product.image?.url}
                name={product.name}
                productUrl={`products/${product.id}`}
                price={product.price}
                onRemove={() => removeProduct(product.id)}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">
          <CheckoutSidebar
            total={data?.totalPrice || 0}
            onPurchase={() => purchase.mutate({ productIds })}
            isCanceled={states.cancel}
            disabled={purchase.isPending}
          />
        </div>
      </motion.div>
    </div>
  );
};
