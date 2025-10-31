import type { Block } from "payload";

export const CursoDosBlock: Block = {
  slug: "curso-dos",
  labels: {
    singular: "Diseño de Curso Dos",
    plural: "Diseño de Cursos Dos",
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
          defaultValue: "TALLER INTENSIVO",
        },
        {
          name: "title",
          type: "text",
          label: "Título Principal",
          required: true,
          defaultValue: "LIGHTROOM",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtítulo",
          defaultValue: "CLASSIC",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descripción",
          defaultValue:
            "Domina el revelado digital profesional con Adobe Lightroom Classic en nuestro taller intensivo",
        },
      ],
    },
    // Información rápida
    {
      name: "quickInfo",
      type: "array",
      label: "Información Rápida",
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: "icon",
          type: "select",
          label: "Icono",
          options: [
            { label: "Calendario", value: "calendar" },
            { label: "Reloj", value: "clock" },
            { label: "Usuario", value: "user" },
            { label: "Tarjeta", value: "creditcard" },
          ],
          required: true,
        },
        {
          name: "title",
          type: "text",
          label: "Título",
          required: true,
        },
        {
          name: "description",
          type: "text",
          label: "Descripción",
          required: true,
        },
        {
          name: "link",
          type: "text",
          label: "Enlace (opcional)",
        },
      ],
    },
    // Contenido principal
    {
      name: "mainContent",
      type: "group",
      label: "Contenido Principal",
      fields: [
        {
          name: "duration",
          type: "text",
          label: "Duración",
          defaultValue: "3 semanas intensivas",
        },
        {
          name: "durationDetails",
          type: "text",
          label: "Detalles de Duración",
          defaultValue: "Del 22 de Noviembre al 6 de Diciembre",
        },
        {
          name: "includes",
          type: "array",
          label: "Incluye",
          fields: [
            {
              name: "item",
              type: "text",
              label: "Item",
              required: true,
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
          name: "instructorName",
          type: "text",
          label: "Nombre del Instructor",
          defaultValue: "Mtro. Caneck Leyva",
        },
        {
          name: "instructorLink",
          type: "text",
          label: "Enlace del Instructor",
          defaultValue: "https://www.caneckleyva.com",
        },
      ],
    },
    // Temario
    {
      name: "syllabus",
      type: "array",
      label: "Temario",
      minRows: 5,
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
