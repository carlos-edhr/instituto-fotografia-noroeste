// components/product-list-view.tsx
import { Suspense } from "react";
import { ProductFilters } from "../components/product-filters";
import { ProductList, ProductListSkeleton } from "../components/product-list";

interface Props {
  category?: string;
  tenantSlug?: string;
  narrowView?: boolean;
}

export const ProductListView = ({ category, narrowView }: Props) => {
  return (
    <div className="px-4 lg:px-8 py-8 flex flex-col gap-6 bg-black text-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-y-4 lg:gap-y-0 justify-between">
        <div className="relative">
          <h2 className="font-light text-3xl md:text-4xl uppercase tracking-widest text-white">
            NUESTROS CURSOS
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded mt-3" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-pulse" />
        </div>

        <div className="lg:text-right">
          <p className="text-gray-400 text-sm font-light tracking-wide">
            Educación fotográfica de élite
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="p-6 border border-red-900/30 rounded-xl bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <p className="font-light text-lg tracking-wide text-red-400">
                FILTROS
              </p>
            </div>
            <ProductFilters />
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-4">
          <Suspense fallback={<ProductListSkeleton narrowView={narrowView} />}>
            <ProductList category={category} narrowView={narrowView} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
