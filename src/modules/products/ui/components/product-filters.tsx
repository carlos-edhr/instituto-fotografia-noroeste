"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { PriceFilter } from "./price-filter";
import { useProductFilters } from "../../hooks/use-product-filters";
import { TagsFilter } from "./tags-filter";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const ProductFilter = ({ title, className, children }: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const Icon = isOpen ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div
      className={cn(
        "py-4 border-b border-red-900/30 flex flex-col gap-4",
        className,
      )}
    >
      <div
        onClick={() => setIsOpen((current) => !current)}
        className="flex items-center justify-between cursor-pointer"
      >
        <p className="font-light text-lg uppercase text-white tracking-wider">
          {title}
        </p>
        <Icon className="size-5 text-red-500" />
      </div>
      {isOpen && children}
    </div>
  );
};

export const ProductFilters = () => {
  const [filters, setFilters] = useProductFilters();

  const hasAnyFilters = Object.entries(filters).some(([key, value]) => {
    if (key === "sort") return false;

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === "string") {
      return value !== "";
    }

    return value !== null;
  });

  const onClear = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      tags: [],
    });
  };

  const onChange = (key: keyof typeof filters, value: unknown) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="border border-red-900/30 rounded-lg bg-black/50 backdrop-blur-sm">
      <div className="p-4 border-b border-red-900/30 flex items-center justify-between">
        <p className="font-light text-xl uppercase tracking-wider text-white">
          Filtros
        </p>
        {hasAnyFilters && (
          <Button
            variant="ghost"
            className="font-light text-red-400 hover:text-red-300 underline p-0 transition-colors duration-300"
            onClick={() => onClear()}
            type="button"
          >
            Limpiar
          </Button>
        )}
      </div>
      <ProductFilter title="Precio">
        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onMinPriceChange={(value) => onChange("minPrice", value)}
          onMaxPriceChange={(value) => onChange("maxPrice", value)}
        />
      </ProductFilter>
      <ProductFilter title="Etiquetas" className="border-b-0">
        <TagsFilter
          value={filters.tags}
          onChange={(value) => onChange("tags", value)}
        />
      </ProductFilter>
    </div>
  );
};
