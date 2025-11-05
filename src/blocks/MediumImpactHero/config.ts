import { Block } from "payload";

export const MediumImpactHeroBlock: Block = {
  slug: "MediumImpactHero",
  fields: [
    {
      name: "header",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          defaultValue: "TALLER ESPECIALIZADO",
        },
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "DOMINA LA ILUMINACIÓN PROFESIONAL",
        },
        {
          name: "description",
          type: "text",
          defaultValue:
            "Aprende técnicas avanzadas de iluminación en estudio y exterior con instructores certificados",
        },
      ],
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "icon",
          type: "select",
          defaultValue: "clock",
          options: [
            { label: "Clock", value: "clock" },
            { label: "Calendar", value: "calendar" },
            { label: "User", value: "user" },
            { label: "Award", value: "award" },
          ],
        },
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
      defaultValue: [
        { icon: "clock", text: "6 semanas de duración" },
        { icon: "calendar", text: "Inicio: 29 de Octubre" },
        { icon: "user", text: "Instructor certificado" },
        { icon: "award", text: "Certificado incluido" },
      ],
    },
    {
      name: "ctaButton",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          defaultValue: "Inscribirse al Curso",
        },
        {
          name: "link",
          type: "text",
          required: true,
          defaultValue: "#inscripcion",
        },
      ],
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
  ],
};
