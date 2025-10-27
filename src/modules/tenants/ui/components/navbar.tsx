// navbar.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CheckoutButton = dynamic(
  () =>
    import("@/modules/checkout/ui/components/checkout-button").then(
      (mod) => mod.CheckoutButton,
    ),
  {
    ssr: false,
    loading: () => (
      <Button
        disabled
        className="bg-black/50 border border-red-900/30 text-white"
      >
        <ShoppingCartIcon className="text-red-500" />
      </Button>
    ),
  },
);

export const Navbar = () => {
  return (
    <nav className="h-20 border-b border-red-900/30 font-light bg-black">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Link href={`/`} className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={"/img/logo-1.png"}
              width={160}
              height={40}
              className="object-contain"
              alt="Instituto de Fotografía del Noroeste"
            />
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light tracking-wide border border-red-500/20"
          >
            <Link href="/home">Continuar Comprando</Link>
          </Button>
        </motion.div>
        <CheckoutButton hideIfEmpty />
      </div>
    </nav>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b border-red-900/30 font-light bg-black">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <div className="w-40 h-10 bg-gray-800 rounded animate-pulse" />
        <Button
          disabled
          className="bg-black/50 border border-red-900/30 text-white"
        >
          <ShoppingCartIcon className="text-red-500" />
        </Button>
      </div>
    </nav>
  );
};
