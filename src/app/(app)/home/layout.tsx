import { getQueryClient, trpc } from "@/trpc/server";
import { Footer } from "@/modules/home/ui/components/footer";
import { Navbar } from "@/modules/home/ui/components/navbar";
import {
  SearchFilters,
  SearchFiltersLoading,
} from "../../../modules/home/ui/components/search-filters";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());
  return (
    <div className="flex flex-col min-h-screen bg-blackBackgroundNew">
      <Navbar />
      {/* Add padding-top to account for fixed navbar height */}
      <div className="pt-20">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<SearchFiltersLoading />}>
            <SearchFilters />
          </Suspense>
        </HydrationBoundary>
        <div className="flex-1 bg-blackBackgroundNew">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
