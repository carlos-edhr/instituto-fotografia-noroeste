import { Footer } from "@/modules/tenants/ui/components/footer";
import { Navbar } from "@/modules/checkout/ui/components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="max-w-(--breakpoint-xl) mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
