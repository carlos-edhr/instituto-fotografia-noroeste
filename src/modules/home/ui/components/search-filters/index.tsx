// components/search-filters/index.tsx
"use client";
import { useTRPC } from "@/trpc/client";
import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { BreadcrumbNavigation } from "./breadcrumb-navigation";
import { useProductFilters } from "@/modules/products/hooks/use-product-filters";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const [filters, setFilters] = useProductFilters();

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find(
    (category) => category.slug === activeCategory,
  );
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory,
    )?.name || null;

  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col gap-6 w-full bg-black border-b border-red-900/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-800/5 blur-[60px] rounded-full" />
      </div>

      <div className="relative z-10">
        <SearchInput
          defaultValue={filters.search}
          onChange={(value) =>
            setFilters({
              search: value,
            })
          }
        />

        <div className="hidden lg:block mt-6">
          <Categories data={data} />
        </div>

        <BreadcrumbNavigation
          activeCategoryName={activeCategoryName}
          activeCategory={activeCategory}
          activeSubcategoryName={activeSubcategoryName}
        />
      </div>
    </div>
  );
};

export const SearchFiltersLoading = () => {
  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col gap-6 w-full bg-black border-b border-red-900/30">
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
