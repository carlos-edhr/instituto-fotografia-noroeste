import { Block } from "payload";

export const CursosPrivadosBlock: Block = {
  slug: "CursosPrivados",
  fields: [
    {
      name: "headerBadge",
      type: "text",
      required: true,
      defaultValue: "INSTITUTO DE FOTOGRAFÍA DEL NOROESTE",
    },
    {
      name: "headerTitle",
      type: "text",
      required: true,
      defaultValue: "CURSOS PRIVADOS",
    },
    {
      name: "headerSubtitle",
      type: "text",
      required: true,
      defaultValue: "PERSONALIZADOS",
    },
    {
      name: "headerDescription",
      type: "text",
      required: true,
      defaultValue:
        "Educación fotográfica de élite adaptada a tus necesidades específicas",
    },
    {
      name: "presencialDuration",
      type: "text",
      required: true,
      defaultValue: "12 HORAS TOTALES",
    },
    {
      name: "presencialDescription",
      type: "text",
      required: true,
      defaultValue:
        "Clases personalizadas en nuestro estudio o ubicación preferida",
    },
    {
      name: "presencialPricing",
      type: "array",
      fields: [
        {
          name: "students",
          type: "text",
          required: true,
        },
        {
          name: "price",
          type: "text",
          required: true,
        },
      ],
      defaultValue: [
        { students: "1 estudiante", price: "$10,000.00 MXN" },
        { students: "2 estudiantes", price: "$9,000.00 MXN" },
        { students: "3 estudiantes", price: "$8,000.00 MXN" },
        { students: "4 estudiantes", price: "$7,000.00 MXN" },
        { students: "5+ estudiantes", price: "$6,000.00 MXN" },
      ],
    },
    {
      name: "presencialNote",
      type: "text",
      required: true,
      defaultValue:
        "* Clases a domicilio tienen un costo extra dependiendo la ubicación",
    },
    {
      name: "virtualDuration",
      type: "text",
      required: true,
      defaultValue: "12 HORAS TOTALES",
    },
    {
      name: "virtualDescription",
      type: "text",
      required: true,
      defaultValue: "Sesiones en vivo desde la comodidad de tu hogar u estudio",
    },
    {
      name: "virtualPricing",
      type: "array",
      fields: [
        {
          name: "students",
          type: "text",
          required: true,
        },
        {
          name: "price",
          type: "text",
          required: true,
        },
      ],
      defaultValue: [
        { students: "1 estudiante", price: "$7,000.00 MXN" },
        { students: "2 estudiantes", price: "$6,000.00 MXN" },
        { students: "3 estudiantes", price: "$5,000.00 MXN" },
        { students: "4 estudiantes", price: "$4,500.00 MXN" },
        { students: "5+ estudiantes", price: "$4,000.00 MXN" },
      ],
    },
    {
      name: "asesoriasTitle",
      type: "text",
      required: true,
      defaultValue: "Asesorías Únicas",
    },
    {
      name: "asesoriasDescription",
      type: "text",
      required: true,
      defaultValue:
        "Consultoría especializada para proyectos específicos o dudas técnicas",
    },
    {
      name: "asesoriaPresencialTitle",
      type: "text",
      required: true,
      defaultValue: "Asesoría Presencial",
    },
    {
      name: "asesoriaPresencialPrice",
      type: "text",
      required: true,
      defaultValue: "$1,200.00 MXN",
    },
    {
      name: "asesoriaPresencialDescription",
      type: "text",
      required: true,
      defaultValue:
        "Sesiones individuales de consultoría técnica especializada",
    },
    {
      name: "asesoriaVirtualTitle",
      type: "text",
      required: true,
      defaultValue: "Asesoría Virtual",
    },
    {
      name: "asesoriaVirtualPrice",
      type: "text",
      required: true,
      defaultValue: "$800.00 MXN",
    },
    {
      name: "asesoriaVirtualDescription",
      type: "text",
      required: true,
      defaultValue:
        "Consultoría en línea para resolver dudas específicas desde cualquier ubicación",
    },
    {
      name: "contactTitle",
      type: "text",
      required: true,
      defaultValue: "Contáctanos",
    },
    {
      name: "contactDescription",
      type: "text",
      required: true,
      defaultValue: "Agenda tu curso personalizado o solicita más información",
    },
    {
      name: "email",
      type: "text",
      required: true,
      defaultValue: "curso@leyvafotografia.com",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      defaultValue: "+52 664 720 0826",
    },
    {
      name: "emailButtonText",
      type: "text",
      required: true,
      defaultValue: "Enviar Correo",
    },
    {
      name: "phoneButtonText",
      type: "text",
      required: true,
      defaultValue: "Llamar Ahora",
    },
    {
      name: "footerNote",
      type: "text",
      required: true,
      defaultValue:
        "Todos nuestros cursos incluyen material didáctico, certificado de participación y seguimiento personalizado del instructor",
    },
  ],
};
