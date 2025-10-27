import type { CollectionConfig } from "payload";
// import { tenantsArrayField } from "@payloadcms/plugin-multi-tenant/fields";
import { isSuperAdmin } from "@/lib/access";

// const defaultTenantArrayField = tenantsArrayField({
//   tenantsArrayFieldName: "tenants",
//   tenantsCollectionSlug: "tenants",
//   tenantsArrayTenantFieldName: "tenant",
//   arrayFieldAccess: {
//     read: () => true,
//     create: ({ req }) => isSuperAdmin(req.user),
//     update: ({ req }) => isSuperAdmin(req.user),
//   },
//   tenantFieldAccess: {
//     read: () => true,
//     create: ({ req }) => isSuperAdmin(req.user),
//     update: ({ req }) => isSuperAdmin(req.user),
//   },
// });

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    read: () => true,
    create: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
    update: ({ req, id }) => {
      if (isSuperAdmin(req.user)) return true;
      return req.user?.id === id;
    },
  },
  admin: {
    useAsTitle: "email",
    hidden: ({ user }) => !isSuperAdmin(user),
  },
  auth: {
    cookies: {
      ...(process.env.NODE_ENV !== "development" && {
        sameSite: "None",
        domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
        secure: true,
      }),
    },
  },
  fields: [
    {
      name: "username",
      required: true,
      unique: true,
      type: "text",
    },
    {
      name: "name",
      required: false,
      unique: false,
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },

    {
      admin: {
        position: "sidebar",
      },
      name: "roles",
      type: "select",
      defaultValue: ["usuario"],
      hasMany: true,
      options: ["super-admin", "admin", "usuario", "instructor"],
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
    },
    {
      name: "ciudad",
      type: "text",
      required: false,
    },
    {
      name: "edad",
      type: "number",
      required: false,
    },
    {
      name: "telefono",
      type: "text",
      required: false,
    },
    {
      name: "genero",
      type: "select",
      options: [
        {
          label: "Masculino",
          value: "masculino",
        },
        {
          label: "Femenino",
          value: "femenino",
        },
        {
          label: "Otro",
          value: "otro",
        },
      ],
      required: false,
    },
    {
      name: "fechaDeNacimiento ",
      type: "date",
      required: false,
    },
    {
      name: "ocupacion",
      type: "text",
      required: false,
    },
    {
      name: "gradoDeEstudios",
      type: "select",
      options: [
        {
          label: "Secundaria",
          value: "secundaria",
        },
        {
          label: "Preparatoria",
          value: "preparatoria",
        },
        {
          label: "Licenciatura",
          value: "licenciatura",
        },
        {
          label: "Posgrado",
          value: "posgrado",
        },
        {
          label: "Otro",
          value: "otro",
        },
      ],
      required: false,
    },
    {
      name: "comoSeEnteroDeIFN",
      type: "text",
      required: false,
    },
    {
      name: "marcaDeCamara",
      type: "text",
      required: false,
    },
    // {
    //   name: "stripeAccountId",
    //   type: "text",
    //   required: false,
    //   access: {
    //     update: ({ req }) => isSuperAdmin(req.user),
    //   },
    //   admin: {
    //     description: "Stripe Account ID associated with your shop",
    //   },
    // },
    // {
    //   ...defaultTenantArrayField,
    //   admin: {
    //     ...(defaultTenantArrayField?.admin || {}),
    //     position: "sidebar",
    //   },
    // },
  ],
};
