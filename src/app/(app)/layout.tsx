import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Roboto, Bebas_Neue, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"], // or any weights you need
  variable: "--font-roboto", // optional custom CSS variable
  display: "swap", // controls how the font is displayed
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // or any weights you need
  variable: "--font-robotoCondensed", // optional custom CSS variable --font-roboto-condensed
  display: "swap", // controls how the font is displayed
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue typically comes in one weight
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Instituto de Fotografía del Noroeste",
    template: "%s | Mi Sitio",
  },
  description:
    "Escuela especializada en fotografía con sede en Tijuana, Baja California, México. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} ${bebasNeue.variable}`}
      >
        <NuqsAdapter>
          <TRPCReactProvider>
            {children}

            <Toaster />
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
