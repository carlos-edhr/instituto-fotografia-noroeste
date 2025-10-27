import { ProductView } from "@/modules/products/ui/views/product-view";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  params: Promise<{ productId: string; slug: string }>;
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Props) => {
  const { productId } = await params;

  const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.tenants.getOne.queryOptions({
  //     slug,
  //   }),
  // );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductView productId={productId} />
    </HydrationBoundary>
  );
};

export default Page;
