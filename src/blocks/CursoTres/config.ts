import type { Block } from "payload";

export const CursoTresBlock: Block = {
  slug: "curso-tres",
  labels: {
    singular: "Diseño de Curso Tres",
    plural: "Diseño de Cursos Tres",
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
          defaultValue: "TALLER ESPECIALIZADO",
        },
        {
          name: "title",
          type: "text",
          label: "Título Principal",
          required: true,
          defaultValue: "RETRATO",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtítulo",
          defaultValue: "FOTOGRAFÍA PROFESIONAL",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción",
          defaultValue:
            "Domina las técnicas avanzadas de iluminación y producción para crear retratos impactantes en estudio y exterior.",
        },
      ],
    },
    // Información del instructor
    {
      name: "instructor",
      type: "group",
      label: "Instructor",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nombre",
          defaultValue: "Mtro. Caneck Leyva",
        },
        {
          name: "link",
          type: "text",
          label: "Enlace",
          defaultValue: "https://www.caneckleyva.com",
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
          name: "price",
          type: "text",
          label: "Precio",
          defaultValue: "$7,000.00 MXN",
        },
        {
          name: "paymentDescription",
          type: "text",
          label: "Descripción del Pago",
          defaultValue:
            "Inscríbete con $3,000.00 El resto a pagar a lo largo del curso",
        },
        {
          name: "startDate",
          type: "text",
          label: "Fecha de Inicio",
          defaultValue: "18 DE OCTUBRE 2025",
        },
        {
          name: "schedule",
          type: "text",
          label: "Horario",
          defaultValue: "SÁBADOS | 10:00 AM - 2:00 PM",
        },
        {
          name: "duration",
          type: "text",
          label: "Duración",
          defaultValue: "3 semanas",
        },
        {
          name: "endDate",
          type: "text",
          label: "Fecha de Cierre",
          defaultValue: "1 de Noviembre",
        },
      ],
    },
    // Temario
    {
      name: "syllabus",
      type: "array",
      label: "Temario",
      minRows: 6,
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
    // Puntos de aprendizaje
    {
      name: "learningPoints",
      type: "array",
      label: "Lo que Aprenderás",
      minRows: 6,
      maxRows: 12,
      fields: [
        {
          name: "point",
          type: "text",
          label: "Punto de Aprendizaje",
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
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8632238895534!2d-117.04283130321045!3d32.52979980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94995f2c5f93d%3A0x672b777eab390451!2sEspacio%20Observatorio!5e0!3m2!1ses-419!2smx!4v1760061778512!5m2!1ses-419!2smx" width="100%" height="100%" style="border: 0;" allowfullscreen loading="lazy"></iframe>',
        },
        {
          name: "venue",
          type: "text",
          label: "Lugar",
          defaultValue: "Observatorio",
        },
        {
          name: "address",
          type: "text",
          label: "Dirección",
          defaultValue:
            "Antiguo Cine Bujazan, Av. Constitución 1337, Zona Centro, 22000 Tijuana, B.C.",
        },
      ],
    },
    // Enlace de inscripción
    {
      name: "enrollmentLink",
      type: "text",
      label: "Enlace de Inscripción",
      defaultValue: "https://goo.gl/t7v3kE",
    },
  ],
};
