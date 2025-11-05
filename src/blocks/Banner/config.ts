import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const BannerBlock: Block = {
  slug: "Banner",
  fields: [
    {
      name: "style",
      type: "select",
      defaultValue: "info",
      options: [
        { label: "Info", value: "info" },
        { label: "Warning", value: "warning" },
        { label: "Success", value: "success" },
        { label: "Error", value: "error" },
      ],
    },
    {
      name: "content",
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
      label: "Detalles del Curso",
    },
    {
      name: "enableCTA",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "ctaText",
      type: "text",
      admin: {
        condition: (_, data) => data.enableCTA,
      },
    },
    {
      name: "ctaLink",
      type: "text",
      admin: {
        condition: (_, data) => data.enableCTA,
      },
    },
  ],
};
