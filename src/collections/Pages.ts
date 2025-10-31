import type { CollectionConfig } from "payload";
import { HeroBlock } from "../blocks/Hero/config";
import { ContentBlock } from "../blocks/Content/config";
import { MediaBlock } from "../blocks/Media/config";
import { CursoUnoBlock } from "../blocks/CursoUno/config";
import { CursoDosBlock } from "../blocks/CursoDos/config";
import { CursoTresBlock } from "../blocks/CursoTres/config";
import { GaleriaBlock } from "@/blocks/Galeria/config";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status"],
  },
  versions: {
    drafts: true,
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
