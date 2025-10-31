import type { Block } from "payload";

export const CursoUnoBlock: Block = {
  slug: "curso-uno",
  labels: {
    singular: "Diseño de Curso Uno ",
    plural: "Diseño de Cursos Uno ",
  },
  fields: [
    // Encabezado
    {
      name: "header",
      type: "group",
      label: "Encabezado",
      fields: [
        {
          name: "badge",
          type: "text",
          label: "Badge",
          defaultValue: "CURSO PROFESIONAL",
        },
        {
          name: "title",
          type: "text",
          label: "Título Principal",
          required: true,
          defaultValue: "ILUMINACIÓN",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtítulo",
          defaultValue: "NIVEL 2",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción",
          defaultValue:
            "Domina las técnicas avanzadas de iluminación fotográfica y lleva tus habilidades al siguiente nivel con nuestro curso especializado",
        },
      ],
    },
    // Información del curso
    {
      name: "courseInfo",
      type: "group",
      label: "Información del Curso",
      fields: [
        {
          name: "startDate",
          type: "text",
          label: "Fecha de Inicio",
          defaultValue: "29 DE OCTUBRE 2025",
        },
        {
          name: "schedule",
          type: "text",
          label: "Horario",
          defaultValue: "MIÉRCOLES | 6:00 PM - 9:00 PM",
        },
        {
          name: "instructor",
          type: "group",
          label: "Instructor",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Nombre del Instructor",
              defaultValue: "CANECK LEVVA",
            },
            {
              name: "link",
              type: "text",
              label: "Enlace del Instructor",
              defaultValue: "https://www.caneckleyva.com",
            },
          ],
        },
        {
          name: "price",
          type: "text",
          label: "Precio",
          defaultValue: "$6,000.00 MXN",
        },
        {
          name: "paymentDescription",
          type: "text",
          label: "Descripción del Pago",
          defaultValue:
            "Inscríbete con $3,000.00 El resto a pagar a lo largo del curso",
        },
      ],
    },
    // Temario
    {
      name: "syllabus",
      type: "array",
      label: "Temario",
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: "item",
          type: "text",
          label: "Item del Temario",
          required: true,
        },
      ],
    },
    // Requisitos
    {
      name: "requirements",
      type: "array",
      label: "Requisitos",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: "requirement",
          type: "text",
          label: "Requisito",
          required: true,
        },
      ],
    },
    // Métodos de pago
    {
      name: "paymentMethods",
      type: "group",
      label: "Métodos de Pago",
      fields: [
        {
          name: "bankTransfer",
          type: "group",
          label: "Transferencia Bancaria",
          fields: [
            {
              name: "bankName",
              type: "text",
              label: "Nombre del Banco",
              defaultValue: "Santander",
            },
            {
              name: "accountHolder",
              type: "text",
              label: "Titular",
              defaultValue: "Caneck Leyva López",
            },
            {
              name: "accountNumber",
              type: "text",
              label: "Número de Cuenta",
              defaultValue: "20-00636037-5",
            },
            {
              name: "clabe",
              type: "text",
              label: "CLABE",
              defaultValue: "014028200063603759",
            },
          ],
        },
        {
          name: "oxxo",
          type: "group",
          label: "Depósitos en Oxxo",
          fields: [
            {
              name: "cardNumber",
              type: "text",
              label: "Número de Tarjeta",
              defaultValue: "5579 0990 1896 2458",
            },
          ],
        },
        {
          name: "paypal",
          type: "group",
          label: "PayPal",
          fields: [
            {
              name: "link",
              type: "text",
              label: "Enlace de PayPal",
              defaultValue: "https://www.paypal.me/ifntijuana",
            },
          ],
        },
        {
          name: "zelle",
          type: "group",
          label: "Zelle",
          fields: [
            {
              name: "email",
              type: "text",
              label: "Correo",
              defaultValue: "valeystudio@gmail.com",
            },
            {
              name: "name",
              type: "text",
              label: "Nombre",
              defaultValue: "Leyva Lopez Services",
            },
          ],
        },
      ],
    },
    // Ubicación
    {
      name: "location",
      type: "group",
      label: "Ubicación",
      fields: [
        {
          name: "mapEmbed",
          type: "textarea",
          label: "Iframe del Mapa",
          defaultValue:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.366977773557!2d-116.9304915!3d32.489619399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d939fdebea43a9%3A0x7a575067983e700e!2sAurora%20Offices%20%2B%20Coworking!5e0!3m2!1ses-419!2smx!4v1760048976848!5m2!1ses-419!2smx" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>',
        },
        {
          name: "address",
          type: "text",
          label: "Dirección",
          defaultValue:
            "Ave, Paseo del Río, Cto. Río Tijuana #6672, Tercera Etapa, 22226 Tijuana, B.C.",
        },
      ],
    },
    // Información adicional
    {
      name: "additionalInfo",
      type: "group",
      label: "Información Adicional",
      fields: [
        {
          name: "duration",
          type: "text",
          label: "Duración Total",
          defaultValue: "6 semanas",
        },
        {
          name: "sessions",
          type: "text",
          label: "Sesiones",
          defaultValue: "6 sesiones",
        },
        {
          name: "includes",
          type: "text",
          label: "Incluye",
          defaultValue: "Material didáctico",
        },
      ],
    },
    // Enlace de inscripción
    {
      name: "enrollmentLink",
      type: "text",
      label: "Enlace de Inscripción",
      defaultValue:
        "https://docs.google.com/forms/d/e/1FAIpQLSdUTHwozSYrhiSyvZEMlwGHnOPACZDLzW18Eu9TrvXII2Fa5w/viewform",
    },
  ],
};
