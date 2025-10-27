// components/breadcrumb-navigation.tsx
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

interface Props {
  activeCategoryName?: string | null;
  activeCategory?: string | null;
  activeSubcategoryName?: string | null;
}

export const BreadcrumbNavigation = ({
  activeCategoryName,
  activeCategory,
  activeSubcategoryName,
}: Props) => {
  if (!activeCategoryName || activeCategory === "all") return null;

  return (
    <nav className="flex items-center gap-2 text-sm font-light tracking-wide">
      {/* Home Link */}
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 group"
      >
        <HomeIcon className="size-4 group-hover:scale-110 transition-transform" />
        <span>Inicio</span>
      </Link>

      {/* Category Section */}
      {activeCategoryName && (
        <>
          <ChevronRightIcon className="size-4 text-red-900/50" />

          {activeSubcategoryName ? (
            // Category as link when there's a subcategory
            <Link
              href={`/${activeCategory}`}
              className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:underline"
            >
              {activeCategoryName}
            </Link>
          ) : (
            // Category as current page when no subcategory
            <span className="text-red-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              {activeCategoryName}
            </span>
          )}
        </>
      )}

      {/* Subcategory Section */}
      {activeSubcategoryName && (
        <>
          <ChevronRightIcon className="size-4 text-red-900/50" />
          <span className="text-red-400 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            {activeSubcategoryName}
          </span>
        </>
      )}

      {/* Decorative line */}
      <div className="ml-4 flex-1 h-px bg-gradient-to-r from-red-900/30 to-transparent" />
    </nav>
  );
};
