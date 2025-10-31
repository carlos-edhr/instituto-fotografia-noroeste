import type { Block } from "payload";

export const MediaBlock: Block = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media Blocks",
  },
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Archivo Multimedia",
    },
    {
      name: "caption",
      type: "text",
      label: "Leyenda",
    },
    {
      name: "alignment",
      type: "select",
      label: "Alineación",
      options: [
        { label: "Izquierda", value: "left" },
        { label: "Centro", value: "center" },
        { label: "Derecha", value: "right" },
      ],
      defaultValue: "center",
    },
    {
      name: "size",
      type: "select",
      label: "Tamaño",
      options: [
        { label: "Pequeño", value: "small" },
        { label: "Mediano", value: "medium" },
        { label: "Grande", value: "large" },
        { label: "Completo", value: "full" },
      ],
      defaultValue: "medium",
    },
  ],
};
