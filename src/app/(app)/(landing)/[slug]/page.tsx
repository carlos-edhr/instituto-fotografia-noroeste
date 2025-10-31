import { RenderBlocks } from "@/blocks/RenderBlocks";
import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";
import { Metadata } from "next";

async function getPage(slug: string) {
  try {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "pages",
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            status: {
              equals: "published",
            },
          },
        ],
      },
      depth: 3, // Importante para obtener relaciones como imágenes
    });

    if (!pages.docs || pages.docs.length === 0) {
      return null;
    }

    return pages.docs[0];
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // Await params antes de usarlos
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return {
      title: "Página no encontrada",
    };
  }

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description,
    openGraph: {
      title: page.meta?.title || page.title,
      description: page.meta?.description || undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      images: page.meta?.image ? [(page.meta.image as any).url] : [],
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  // Await params antes de usarlos
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Header opcional - puedes personalizar según tus necesidades */}
      {page.layout && page.layout.length > 0 ? (
        <RenderBlocks blocks={page.layout} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {page.title}
            </h1>
            {page.meta?.description && (
              <p className="text-xl text-gray-600 mb-8">
                {page.meta.description}
              </p>
            )}
            <h2 className="text-2xl font-semibold text-gray-600">
              Contenido en construcción
            </h2>
            <p className="mt-4 text-gray-500">
              Esta página no tiene contenido aún. Agrega bloques desde el panel
              de administración.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "pages",
      where: {
        status: {
          equals: "published",
        },
      },
      limit: 100,
    });

    return pages.docs.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
