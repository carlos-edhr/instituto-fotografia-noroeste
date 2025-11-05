import type { CollectionConfig } from "payload";
import { HeroBlock } from "../blocks/Hero/config";
import { ContentBlock } from "../blocks/Content/config";
import { MediaBlock } from "../blocks/Media/config";
import { CursoUnoBlock } from "../blocks/CursoUno/config";
import { CursoDosBlock } from "../blocks/CursoDos/config";
import { CursoTresBlock } from "../blocks/CursoTres/config";
import { GaleriaBlock } from "@/blocks/Galeria/config";
import { CursosPrivadosBlock } from "@/blocks/CursosPrivados/config";
import { BannerBlock } from "@/blocks/Banner/config";
import { CallToActionBlock } from "@/blocks/CallToAction/config";
import { HighImpactHeroBlock } from "../blocks/HighImpactHero/config";
import { MediumImpactHeroBlock } from "../blocks/MediumImpactHero/config";
import { LowImpactHeroBlock } from "../blocks/LowImpactHero/config";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status"],
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        // Solo para páginas publicadas
        if (doc.status === "published") {
          try {
            // Revalidar la página específica y la home
            await fetch(
              `${process.env.NEXT_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&path=/${doc.slug}`,
            );

            // También revalidar la home page si es necesario
            if (doc.slug === "landing-page") {
              await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&path=/`,
              );
            }
          } catch (error) {
            console.error("Error revalidating page:", error);
          }
        }
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        try {
          // Invalidar cache cuando se elimina una página
          await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&path=/${doc.slug}`,
          );
        } catch (error) {
          console.error("Error revalidating after delete:", error);
        }
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título de la Página",
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
      label: "Slug (URL)",
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Publicado",
          value: "published",
        },
        {
          label: "Borrador",
          value: "draft",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    // 👇 LAYOUT BUILDER
    {
      name: "layout",
      type: "blocks",
      label: "Constructor de Layout",
      minRows: 1,
      maxRows: 20,
      blocks: [
        HeroBlock,
        ContentBlock,
        MediaBlock,
        CursoUnoBlock,
        CursoDosBlock,
        CursoTresBlock,
        GaleriaBlock,
        CursosPrivadosBlock,
        BannerBlock,
        CallToActionBlock,
        HighImpactHeroBlock,
        MediumImpactHeroBlock,
        LowImpactHeroBlock,
      ],
    },
    {
      name: "meta",
      type: "group",
      label: "Metadatos SEO",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Título SEO",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción SEO",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagen SEO",
        },
      ],
    },
  ],
};
