import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  admin: {
    group: "Navegación",
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      maxRows: 10,
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
        {
          name: "type",
          type: "select",
          label: "Tipo de Enlace",
          options: [
            { label: "Página Interna", value: "internal" },
            { label: "Enlace Externo", value: "external" },
            { label: "Sección", value: "section" },
          ],
          defaultValue: "internal",
        },
      ],
    },
    {
      name: "ctaButton",
      type: "group",
      label: "Botón de Acción",
      fields: [
        {
          name: "enable",
          type: "checkbox",
          label: "Mostrar Botón",
        },
        {
          name: "text",
          type: "text",
          label: "Texto del Botón",
          admin: {
            condition: (data, siblingData) => siblingData?.enable,
          },
        },
        {
          name: "link",
          type: "text",
          label: "Enlace del Botón",
          admin: {
            condition: (data, siblingData) => siblingData?.enable,
          },
        },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
      required: true,
    },
  ],
};
