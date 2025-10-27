// review-sidebar.tsx
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReviewForm } from "./review-form";
import { motion } from "framer-motion";

interface Props {
  productId: string;
}

export const ReviewSidebar = ({ productId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.reviews.getOne.queryOptions({
      productId,
    }),
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <ReviewForm productId={productId} initialData={data} />
    </motion.div>
  );
};
