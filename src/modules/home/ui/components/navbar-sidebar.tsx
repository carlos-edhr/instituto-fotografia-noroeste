// components/navbar-sidebar.tsx
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, X } from "lucide-react";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isAuthenticated: boolean;
}

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
  isAuthenticated,
}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 bg-black/95 backdrop-blur-md border-r border-red-900/30 w-80"
      >
        {/* Header */}
        <SheetHeader className="p-6 border-b border-red-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logos/logo-light.png"
                  alt="Instituto de Fotografía del Noroeste"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-light text-white text-sm tracking-wide">
                  Instituto de Fotografía
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded mt-1" />
              </div>
            </div>
            <Button
              variant="ghost"
              className="p-2 text-white hover:text-red-400 hover:bg-red-900/20"
              onClick={() => onOpenChange(false)}
            >
              <X className="size-5" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex flex-col h-full pb-20">
          {/* Navigation Items */}
          <div className="p-6 space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full text-left p-4 text-white hover:bg-red-900/20 rounded-lg font-light text-lg uppercase tracking-widest border border-transparent hover:border-red-900/50 transition-all duration-300"
                onClick={() => onOpenChange(false)}
              >
                {item.children}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="border-t border-red-900/30 p-6 space-y-3">
            {isAuthenticated ? (
              <Button
                asChild
                className="w-full py-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light uppercase text-sm tracking-widest border border-red-500/20"
              >
                <Link href="/admin" onClick={() => onOpenChange(false)}>
                  Panel de Control
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="w-full py-6 border-red-900/50 text-white hover:bg-red-900/20 hover:border-red-500/50 font-light uppercase text-sm tracking-widest"
                >
                  <Link href="/sign-in" onClick={() => onOpenChange(false)}>
                    Ingresar
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full py-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-light uppercase text-sm tracking-widest border border-red-500/20"
                >
                  <Link href="/sign-up" onClick={() => onOpenChange(false)}>
                    Registrarse
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-red-900/30">
            <div className="flex items-center gap-2 text-red-500 mb-3">
              <Camera className="size-4" />
              <p className="font-light text-sm tracking-wide">
                Fotografía Profesional
              </p>
            </div>
            <p className="text-gray-400 text-xs font-light">
              Educación fotográfica de élite desde 2008
            </p>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
