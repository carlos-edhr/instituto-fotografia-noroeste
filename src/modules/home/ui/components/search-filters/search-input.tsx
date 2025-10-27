// components/search-filters/search-input.tsx
import { Input } from "@/components/ui/input";
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";
import { CategoriesSidebar } from "./categories-sidebar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  disabled?: boolean;
  defaultValue?: string | undefined;
  onChange?: (value: string) => void;
}

export const SearchInput = ({ disabled, defaultValue, onChange }: Props) => {
  const [searchValue, setSearchValue] = useState(defaultValue || "");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange?.(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, onChange]);

  return (
    <div className="flex items-center gap-3 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="relative w-full">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-red-500" />
        <Input
          className={cn(
            "pl-12 pr-4 py-6 bg-black/50 backdrop-blur-sm border-red-900/50 text-white",
            "placeholder:text-gray-500 font-light rounded-lg focus-visible:ring-2",
            "focus-visible:ring-red-500 focus:border-red-500 transition-all duration-300",
          )}
          placeholder="Buscar cursos, talleres..."
          disabled={disabled}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Button
        variant="outline"
        className={cn(
          "size-14 shrink-0 flex lg:hidden bg-black/50 backdrop-blur-sm",
          "border-red-900/50 hover:bg-red-900/20 hover:border-red-500/50",
          "transition-all duration-300",
        )}
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon className="size-5 text-red-400" />
      </Button>

      {session.data?.user && (
        <Button
          asChild
          className={cn(
            "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900",
            "text-white px-4 py-6 font-light uppercase hidden lg:flex",
            "border border-red-500/20 transition-all duration-300",
          )}
        >
          <Link prefetch href="/library">
            <BookmarkCheckIcon className="mr-2 size-5" />
            Biblioteca
          </Link>
        </Button>
      )}
    </div>
  );
};
