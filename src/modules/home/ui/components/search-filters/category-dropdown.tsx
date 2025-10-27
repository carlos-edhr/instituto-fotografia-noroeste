// components/search-filters/category-dropdown.tsx
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  category: {
    id: string;
    name: string;
    slug: string;
    color?: string | null;
    subcategories?: Array<{
      id: string;
      name: string;
      slug: string;
      color?: string | null;
    }>;
  };
  isActive: boolean;
  isNavigationHovered: boolean;
}

export const CategoryDropdown = ({ category, isActive }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubcategories =
    category.subcategories && category.subcategories.length > 0;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "h-11 px-4 rounded-lg text-white font-light uppercase text-sm tracking-wider transition-all duration-300",
            "bg-black/50 backdrop-blur-sm border border-red-900/50 hover:bg-red-900/20 hover:border-red-500/50",
            isActive &&
              "bg-gradient-to-r from-red-600 to-red-800 text-white border-red-500/50 hover:from-red-700 hover:to-red-900",
          )}
        >
          {category.name}
          {hasSubcategories && (
            <ChevronDownIcon
              className={cn(
                "ml-2 size-4 transition-transform duration-300",
                isOpen && "rotate-180",
              )}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      {hasSubcategories && (
        <DropdownMenuContent
          className="min-w-[200px] bg-black/95 backdrop-blur-md border border-red-900/50 rounded-lg p-2"
          align="start"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {category.subcategories?.map((subcategory) => (
            <DropdownMenuItem key={subcategory.id} className="p-0" asChild>
              <Link
                href={`/${category.slug}/${subcategory.slug}`}
                className={cn(
                  "block px-4 py-3 rounded-md hover:bg-red-900/20 text-white font-light w-full text-left",
                  "border border-transparent hover:border-red-900/50 transition-all duration-300",
                )}
              >
                {subcategory.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
