import { Block } from "payload";

export const HighImpactHeroBlock: Block = {
  slug: "HighImpactHero",
  fields: [
    {
      name: "header",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          defaultValue: "INSTITUTO DE FOTOGRAFÍA DEL NOROESTE",
        },
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "EDUCACIÓN FOTOGRÁFICA DE ÉLITE",
        },
        {
          name: "subtitle",
          type: "text",
          defaultValue: "TRANSFORMANDO VISIÓN EN REALIDAD",
        },
        {
          name: "description",
          type: "text",
          defaultValue:
            "Más de 15 años formando a la próxima generación de fotógrafos profesionales con metodologías innovadoras y enfoque práctico",
        },
      ],
    },
    {
      name: "backgroundMedia",
      type: "group",
      fields: [
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "backgroundVideo",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "overlayOpacity",
          type: "number",
          defaultValue: 60,
          min: 0,
          max: 100,
        },
      ],
    },
    {
      name: "ctaButtons",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
        {
          name: "type",
          type: "select",
          defaultValue: "primary",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
        {
          name: "icon",
          type: "select",
          defaultValue: "arrow",
          options: [
            { label: "Arrow Right", value: "arrow" },
            { label: "Calendar", value: "calendar" },
            { label: "Phone", value: "phone" },
          ],
        },
      ],
      defaultValue: [
        {
          text: "Explorar Cursos",
          link: "#cursos",
          type: "primary",
          icon: "arrow",
        },
        {
          text: "Contactar Asesor",
          link: "#contacto",
          type: "secondary",
          icon: "phone",
        },
      ],
    },
    {
      name: "stats",
      type: "array",
      fields: [
        {
          name: "number",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "suffix",
          type: "text",
        },
      ],
      defaultValue: [
        { number: "15", label: "Años de Experiencia", suffix: "+" },
        { number: "500", label: "Estudiantes", suffix: "+" },
        { number: "98", label: "Tasa de Satisfacción", suffix: "%" },
      ],
    },
    {
      name: "styling",
      type: "group",
      fields: [
        {
          name: "minHeight",
          type: "select",
          defaultValue: "screen",
          options: [
            { label: "Pantalla Completa", value: "screen" },
            { label: "75% Pantalla", value: "75" },
            { label: "50% Pantalla", value: "50" },
          ],
        },
        {
          name: "textAlignment",
          type: "select",
          defaultValue: "center",
          options: [
            { label: "Centro", value: "center" },
            { label: "Izquierda", value: "left" },
          ],
        },
      ],
    },
  ],
};
