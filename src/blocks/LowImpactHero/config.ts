import { Block } from "payload";

export const LowImpactHeroBlock: Block = {
  slug: "LowImpactHero",
  fields: [
    {
      name: "header",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Cursos Especializados en Fotografía",
        },
        {
          name: "description",
          type: "text",
          defaultValue:
            "Programas intensivos diseñados para desarrollar habilidades técnicas y creativas",
        },
      ],
    },
    {
      name: "ctaButton",
      type: "group",
      fields: [
        {
          name: "text",
          type: "text",
          defaultValue: "Ver Programas",
        },
        {
          name: "link",
          type: "text",
          defaultValue: "#cursos",
        },
      ],
    },
    {
      name: "styling",
      type: "group",
      fields: [
        {
          name: "background",
          type: "select",
          defaultValue: "gradient",
          options: [
            { label: "Gradiente", value: "gradient" },
            { label: "Sólido", value: "solid" },
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
