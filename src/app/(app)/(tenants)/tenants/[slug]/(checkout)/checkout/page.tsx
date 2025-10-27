import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

export const dynamic = "force-dynamic";

const Page = async () => {
  // const { slug } = await params;
  return <CheckoutView />;
};

export default Page;
