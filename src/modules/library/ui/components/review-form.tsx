// review-form.tsx
import { StarPicker } from "@/components/star-picker";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ReviewsGetOneOutput } from "@/modules/reviews/types";
import { useTRPC } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

interface Props {
  productId: string;
  initialData?: ReviewsGetOneOutput;
}

const formSchema = z.object({
  rating: z.number().min(1, { message: "La calificación es requerida" }).max(5),
  description: z.string().min(1, { message: "La descripción es requerida" }),
});

export const ReviewForm = ({ productId, initialData }: Props) => {
  const [isPreview, setIsPreview] = useState(!!initialData);
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const createReview = useMutation(
    trpc.reviews.create.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(
          trpc.reviews.getOne.queryOptions({
            productId,
          }),
        );
        setIsPreview(true);
        toast.success("Reseña publicada exitosamente");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const updateReview = useMutation(
    trpc.reviews.update.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(
          trpc.reviews.getOne.queryOptions({
            productId,
          }),
        );
        setIsPreview(true);
        toast.success("Reseña actualizada exitosamente");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: initialData?.rating ?? 0,
      description: initialData?.description ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (initialData) {
      updateReview.mutate({
        reviewId: initialData.id,
        rating: values.rating,
        description: values.description,
      });
    } else {
      createReview.mutate({
        productId,
        rating: values.rating,
        description: values.description,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-light text-white text-lg tracking-wide"
        >
          {isPreview ? "Tu calificación:" : "¿Te gustó? Califica este curso"}
        </motion.p>

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StarPicker
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isPreview}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="¿Quieres dejar una reseña escrita?"
                  disabled={isPreview}
                  className="bg-black/50 border-red-900/50 text-white font-light tracking-wide placeholder:text-gray-500 focus:border-red-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {!isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              disabled={createReview.isPending || updateReview.isPending}
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light tracking-wide border border-red-500/20"
            >
              {initialData ? "Actualizar Reseña" : "Publicar Reseña"}
            </Button>
          </motion.div>
        )}
      </form>

      {isPreview && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <Button
            onClick={() => setIsPreview(false)}
            size="lg"
            type="button"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-light tracking-wide"
          >
            Editar Reseña
          </Button>
        </motion.div>
      )}
    </Form>
  );
};

export const ReviewFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="font-light text-white text-lg tracking-wide">
        ¿Te gustó? Califica este curso
      </p>

      <StarPicker disabled />

      <Textarea
        placeholder="¿Quieres dejar una reseña escrita?"
        disabled
        className="bg-black/50 border-red-900/50 text-white font-light tracking-wide"
      />

      <Button
        disabled
        type="button"
        size="lg"
        className="bg-gradient-to-r from-red-600 to-red-800 text-white font-light tracking-wide border border-red-500/20 opacity-50"
      >
        Publicar Reseña
      </Button>
    </div>
  );
};
