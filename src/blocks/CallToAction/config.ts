import { Block } from "payload";

export const CallToActionBlock: Block = {
  slug: "CallToAction",
  fields: [
    {
      name: "richText",
      type: "richText",
      required: true,
    },
    {
      name: "buttons",
      type: "array",
      fields: [
        {
          name: "label",
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
            { label: "Outline", value: "outline" },
          ],
        },
        {
          name: "icon",
          type: "select",
          defaultValue: "none",
          options: [
            { label: "None", value: "none" },
            { label: "Arrow Right", value: "arrowRight" },
            { label: "Calendar", value: "calendar" },
            { label: "Phone", value: "phone" },
            { label: "Mail", value: "mail" },
          ],
        },
      ],
    },
    {
      name: "style",
      type: "group",
      fields: [
        {
          name: "background",
          type: "select",
          defaultValue: "gradient",
          options: [
            { label: "Gradient", value: "gradient" },
            { label: "Solid", value: "solid" },
            { label: "Image", value: "image" },
          ],
        },
        {
          name: "alignment",
          type: "select",
          defaultValue: "center",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
          ],
        },
      ],
    },
  ],
};
