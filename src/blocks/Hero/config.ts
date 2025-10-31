import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  labels: {
    singular: "Hero Personalizado",
    plural: "Heroes Personalizados",
  },
  fields: [
    // Configuración general
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Título Principal",
          admin: {
            width: "50%",
          },
        },
        {
          name: "highlightedText",
          type: "text",
          label: "Texto Destacado",
          admin: {
            width: "50%",
            description: "Texto que aparece en rojo (ej: 'Fotografía')",
          },
        },
      ],
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtítulo",
    },
    // Imágenes de fondo
    {
      name: "backgroundImages",
      type: "array",
      label: "Imágenes de Fondo",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Imagen",
        },
        {
          name: "altText",
          type: "text",
          label: "Texto Alternativo",
        },
      ],
    },
    // Video
    {
      name: "videoSection",
      type: "group",
      label: "Sección de Video",
      fields: [
        {
          name: "enableVideo",
          type: "checkbox",
          label: "Mostrar Sección de Video",
        },
        {
          name: "videoFile",
          type: "upload",
          relationTo: "media",
          label: "Archivo de Video",
          admin: {
            condition: (data, siblingData) => siblingData?.enableVideo,
          },
        },
        {
          name: "videoUrl",
          type: "text",
          label: "URL del Video",
          admin: {
            condition: (data, siblingData) => siblingData?.enableVideo,
            description: "URL externa del video (opcional si se sube archivo)",
          },
        },
      ],
    },
    // Botón CTA
    {
      name: "ctaButton",
      type: "group",
      label: "Botón de Acción",
      fields: [
        {
          name: "enableCta",
          type: "checkbox",
          label: "Mostrar Botón",
        },
        {
          name: "text",
          type: "text",
          label: "Texto del Botón",
          admin: {
            condition: (data, siblingData) => siblingData?.enableCta,
          },
        },
        {
          name: "link",
          type: "text",
          label: "Enlace del Botón",
          admin: {
            condition: (data, siblingData) => siblingData?.enableCta,
          },
        },
      ],
    },
    // Logos
    {
      name: "logoCarousel",
      type: "group",
      label: "Carrusel de Logos",
      fields: [
        {
          name: "enableLogos",
          type: "checkbox",
          label: "Mostrar Carrusel de Logos",
        },
        {
          name: "logos",
          type: "array",
          label: "Logos",
          minRows: 2,
          maxRows: 10,
          admin: {
            condition: (data, siblingData) => siblingData?.enableLogos,
          },
          fields: [
            {
              name: "logo",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Logo",
            },
            {
              name: "altText",
              type: "text",
              label: "Texto Alternativo",
            },
            {
              name: "link",
              type: "text",
              label: "Enlace (opcional)",
            },
          ],
        },
      ],
    },
    // Configuración de estilo
    {
      name: "styling",
      type: "group",
      label: "Configuración de Estilo",
      fields: [
        {
          name: "textColor",
          type: "select",
          label: "Color del Texto",
          options: [
            { label: "Blanco", value: "white" },
            { label: "Negro", value: "black" },
            { label: "Gris", value: "gray" },
          ],
          defaultValue: "white",
        },
        {
          name: "overlayOpacity",
          type: "number",
          label: "Opacidad del Overlay",
          min: 0,
          max: 100,
          defaultValue: 40,
          admin: {
            description: "Porcentaje de opacidad (0-100)",
          },
        },
        {
          name: "minHeight",
          type: "select",
          label: "Altura Mínima",
          options: [
            { label: "Pantalla Completa", value: "screen" },
            { label: "75% de Pantalla", value: "75" },
            { label: "50% de Pantalla", value: "50" },
          ],
          defaultValue: "screen",
        },
      ],
    },
  ],
};
