// checkout-sidebar.tsx
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { CircleXIcon, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

interface CheckoutSidebarProps {
  total: number;
  onPurchase: () => void;
  isCanceled?: boolean;
  disabled?: boolean;
}

export const CheckoutSidebar = ({
  total,
  onPurchase,
  isCanceled,
  disabled,
}: CheckoutSidebarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="border-2 border-red-900/50 rounded-xl overflow-hidden bg-black/70 backdrop-blur-sm flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-red-900/30">
        <h4 className="font-light text-white text-2xl uppercase tracking-wider text-center">
          Resumen de Compra
        </h4>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between p-6 border-b border-red-900/30">
        <h4 className="font-light text-white text-lg tracking-wide">Total</h4>
        <p className="font-light text-white text-2xl tracking-wide">
          {formatCurrency(total)}
        </p>
      </div>

      {/* Checkout Button */}
      <div className="p-6 flex items-center justify-center">
        <Button
          disabled={disabled}
          onClick={onPurchase}
          size="lg"
          className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light tracking-wide text-lg py-6 border border-red-500/20"
        >
          {disabled ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Procesando...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Proceder al Pago
            </div>
          )}
        </Button>
      </div>

      {/* Error Message */}
      {isCanceled && (
        <div className="p-6 border-t border-red-900/30">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center w-full">
            <div className="flex items-center">
              <CircleXIcon className="w-5 h-5 mr-3 text-red-500" />
              <span className="font-light text-red-400 text-sm tracking-wide">
                El pago fue cancelado. Por favor, intenta nuevamente.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="p-4 border-t border-red-900/30">
        <p className="text-gray-400 text-xs font-light tracking-wide text-center">
          Pago seguro • Certificado SSL • Protección de datos
        </p>
      </div>
    </motion.div>
  );
};
