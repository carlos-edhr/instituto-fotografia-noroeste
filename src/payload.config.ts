// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
// import { multiTenantPlugin } from "@payloadcms/plugin-multi-tenant";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Products } from "./collections/Products";
import { Tags } from "./collections/Tags";
import { Pages } from "./collections/Pages";
// import { Tenants } from "./collections/Tenants";
// import { Config } from "./payload-types";
import { Orders } from "./collections/Orders";
import { Reviews } from "./collections/Reviews";
// import { isSuperAdmin } from "./lib/access";
import { resendAdapter } from "@payloadcms/email-resend";
import { Header } from "./globals/Header";
import { Footer } from "./globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  email: resendAdapter({
    defaultFromAddress: "onboarding@resend.dev",
    defaultFromName: "",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeNavLinks: [],
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products,
    Tags,
    Pages,
    // Tenants,
    Orders,
    Reviews,
  ],
  globals: [
    Header,
    Footer,
    // ... otros globales si los tienes
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // multiTenantPlugin<Config>({
    //   collections: {
    //     products: {},
    //     media: {},
    //   },
    //   tenantsArrayField: {
    //     includeDefaultField: false,
    //   },
    //   userHasAccessToAllTenants: (user) => isSuperAdmin(user),
    // }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
