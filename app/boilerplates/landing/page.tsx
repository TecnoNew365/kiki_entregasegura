import Banner from "@/components/Banner";
import Faqs from "@/components/Faqs";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import TabProducts from "@/components/TabProducts";
export default function Home() {
  return (
    <div>
      <div className="g-main  -mt-20 py-32">
        <div className="flex max-w-2xl text-center flex-col space-y-5 mx-auto  h-48 justify-center ">
          <h1 className="mega-title">Boilerplates para tu landing page</h1>
          <p className="text">
            We separate the frontend where users land from the SPA of the
            dashboard app to ensure good SEO performance and to position your
            SaaS more quickly
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto -mt-14">
        <TabProducts productActive="landing" />
        <div className="max-w-2xl m-7 mx-auto my-7"></div>
        <Products type="landing" />
        <Faqs />
        <Pricing  />
      </div>
    </div>
  );
}
