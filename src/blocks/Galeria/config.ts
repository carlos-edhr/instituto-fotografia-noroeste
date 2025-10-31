import type { Block } from "payload";

export const GaleriaBlock: Block = {
  slug: "galeria",
  labels: {
    singular: "Galería",
    plural: "Galerías",
  },
  fields: [
    // Header Section
    {
      name: "header",
      type: "group",
      label: "Encabezado",
      fields: [
        {
          name: "badge",
          type: "text",
          label: "Badge",
          defaultValue: "PORTAFOLIO DE NUESTROS ESTUDIANTES",
        },
        {
          name: "title",
          type: "text",
          label: "Título Principal",
          required: true,
          defaultValue: "GALERÍA",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtítulo",
          defaultValue: "EVIDENCIAS DE APRENDIZAJE",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción",
          defaultValue:
            "Una colección de obras que representan la dedicación por parte de nuestros estudiantes. Cada imagen es un testimonio del aprendizaje y la pasión por la fotografía.",
        },
      ],
    },
    // Gallery Items
    {
      name: "galleryItems",
      type: "array",
      label: "Items de la Galería",
      minRows: 1,
      maxRows: 50,
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Imagen",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
          label: "Título",
          required: true,
          defaultValue: "Galeria de Resultados",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción",
          defaultValue: "Resultados de nuestros estudiantes",
        },
        {
          name: "year",
          type: "number",
          label: "Año",
          defaultValue: 2024,
        },
        {
          name: "courseName",
          type: "text",
          label: "Nombre del Taller/Estudiante",
          defaultValue: "Nombre del Taller/Estudiante",
        },
      ],
    },
    // Pagination Settings
    {
      name: "pagination",
      type: "group",
      label: "Configuración de Paginación",
      fields: [
        {
          name: "itemsPerPageDesktop",
          type: "number",
          label: "Items por página (Desktop)",
          defaultValue: 10,
        },
        {
          name: "itemsPerPageMobile",
          type: "number",
          label: "Items por página (Mobile)",
          defaultValue: 6,
        },
      ],
    },
    // Footer Text
    {
      name: "footerText",
      type: "text",
      label: "Texto del Footer",
      defaultValue:
        "Impulsando la creatividad a través de la fotografía • Educación visual de élite",
    },
  ],
};
