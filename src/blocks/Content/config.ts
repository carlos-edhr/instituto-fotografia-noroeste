import type { Block } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const ContentBlock: Block = {
  slug: "content",
  labels: {
    singular: "Contenido",
    plural: "Bloques de Contenido",
  },
  fields: [
    {
      name: "richText", // Este nombre debe coincidir con el tipo
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      label: "Contenido",
    },
    {
      name: "width",
      type: "select",
      options: [
        {
          label: "Estrecho",
          value: "narrow",
        },
        {
          label: "Medio",
          value: "medium",
        },
        {
          label: "Ancho",
          value: "wide",
        },
        {
          label: "Completo",
          value: "full",
        },
      ],
      defaultValue: "medium",
    },
  ],
};
