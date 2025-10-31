// import Header from "./(home)/_components/main/header";
// import { NavBar } from "./(home)/_components/main/navbar";
// import StarsCanvas from "./(home)/_components/main/StarBackground";
// import Navbar from "./(home)/_components/main/navbar1";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
async function getGlobals() {
  try {
    const payload = await getPayload({ config });

    const [header, footer] = await Promise.all([
      payload.findGlobal({ slug: "header" }),
      payload.findGlobal({ slug: "footer" }),
    ]);

    return { header, footer };
  } catch (error) {
    console.error("Error fetching globals:", error);
    return { header: null, footer: null };
  }
}

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  const { header, footer } = await getGlobals();
  return (
    <>
      <div>
        {/* <StarsCanvas /> */}
        {header && <Header data={header} />}
        {children}
        {footer && <Footer data={footer} />}
      </div>
    </>
  );
};

export default LandingLayout;
