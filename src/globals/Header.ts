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
      name: "socialLinks",
      type: "array",
      label: "Redes Sociales",
      maxRows: 5,
      fields: [
        {
          name: "platform",
          type: "select",
          label: "Plataforma",
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
            { label: "Email", value: "email" },
            { label: "YouTube", value: "youtube" },
            { label: "Twitter", value: "twitter" },
            { label: "LinkedIn", value: "linkedin" },
          ],
          required: true,
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
        },
        {
          name: "enable",
          type: "checkbox",
          label: "Habilitado",
          defaultValue: true,
        },
      ],
    },
    {
      name: "ctaButtons",
      type: "array",
      label: "Botones de Acción",
      maxRows: 3,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Texto del Botón",
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
          label: "Tipo de Botón",
          options: [
            { label: "Primario", value: "primary" },
            { label: "Secundario", value: "secondary" },
          ],
          defaultValue: "primary",
        },
        {
          name: "enable",
          type: "checkbox",
          label: "Habilitado",
          defaultValue: true,
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
