import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  admin: {
    group: "Navegación",
  },
  fields: [
    {
      name: "columns",
      type: "array",
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: "title",
          type: "text",
          label: "Título de Columna",
        },
        {
          name: "links",
          type: "array",
          fields: [
            {
              name: "label",
              type: "text",
              required: true,
              label: "Etiqueta",
            },
            {
              name: "link",
              type: "text",
              required: true,
              label: "Enlace",
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      label: "Enlaces Sociales",
      fields: [
        {
          name: "platform",
          type: "select",
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
            { label: "Twitter", value: "twitter" },
            { label: "YouTube", value: "youtube" },
            { label: "LinkedIn", value: "linkedin" },
          ],
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: "URL",
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
      label: "Texto de Copyright",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo del Footer",
    },
  ],
};
