"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="h-20 border-b border-red-900/30 font-light bg-black">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-light text-white uppercase tracking-wider"
        >
          Checkout
        </motion.p>
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
      </div>
    </nav>
  );
};
