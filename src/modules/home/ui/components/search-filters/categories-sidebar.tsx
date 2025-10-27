// components/search-filters/categories-sidebar.tsx
"use client";
import { useTRPC } from "@/trpc/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CategoriesSidebar = ({ open, onOpenChange }: Props) => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.categories.getMany.queryOptions());

  const router = useRouter();

  const [parentCategories, setParentCategories] =
    useState<CategoriesGetManyOutput | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    CategoriesGetManyOutput[1] | null
  >(null);

  const currentCategories = parentCategories ?? data ?? [];

  const handleOpenChange = (open: boolean) => {
    setSelectedCategory(null);
    setParentCategories(null);
    onOpenChange(open);
  };

  const handleCategoryClick = (category: CategoriesGetManyOutput[1]) => {
    if (category.subcategories && category.subcategories.length > 0) {
      setParentCategories(
        category.subcategories as unknown as CategoriesGetManyOutput,
      );
      setSelectedCategory(category);
    } else {
      if (parentCategories && selectedCategory) {
        router.push(`/${selectedCategory.slug}/${category.slug}`);
      } else {
        if (category.slug === "all") {
          router.push("/");
        } else {
          router.push(`/${category.slug}`);
        }
      }
      handleOpenChange(false);
    }
  };

  const handleBackClick = () => {
    if (parentCategories) {
      setParentCategories(null);
      setSelectedCategory(null);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 bg-black/95 backdrop-blur-md border-r border-red-900/30 w-80"
      >
        <SheetHeader className="p-6 border-b border-red-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-500/20">
                <Camera className="size-5 text-red-500" />
              </div>
              <div>
                <p className="font-light text-white text-lg tracking-wide">
                  Categorías
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded mt-1" />
              </div>
            </div>
            <Button
              variant="ghost"
              className="p-2 text-white hover:text-red-400 hover:bg-red-900/20"
              onClick={() => handleOpenChange(false)}
            >
              <ChevronLeftIcon className="size-5" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex flex-col h-full pb-20">
          {parentCategories && (
            <button
              onClick={handleBackClick}
              className={cn(
                "w-full text-left p-4 hover:bg-red-900/20 flex items-center",
                "font-light cursor-pointer text-red-400 border-b border-red-900/30",
                "transition-all duration-300",
              )}
            >
              <ChevronLeftIcon className="size-5 mr-2" />
              Volver a categorías
            </button>
          )}

          {currentCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "w-full text-left p-4 hover:bg-red-900/20 flex justify-between items-center",
                "font-light cursor-pointer text-white border-b border-red-900/30",
                "transition-all duration-300 hover:text-red-400",
              )}
            >
              <span className="tracking-wide">{category.name}</span>
              {category.subcategories && category.subcategories.length > 0 && (
                <ChevronRightIcon className="size-5 text-red-500" />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
