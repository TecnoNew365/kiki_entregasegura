import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";
import Products from "@/components/Products";
import TabProducts from "@/components/TabProducts";
export default function Home() {
  return (
    <div>
      <div className="g-main  -mt-20 py-32">
        <div className="flex max-w-2xl text-center flex-col space-y-5 mx-auto  h-48 justify-center ">
          <h1 className="mega-title">Boilerplates for your user dashboards</h1>
          <p className="text">
            In the Administration Area or Control Panel, registered users can
            access advanced features and manage their accounts, including
            viewing statistics, configuring preferences, and interacting with
            advanced functionalities based on your business model
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto -mt-14">
        <TabProducts productActive="dashboard" />
        {/* <div className="max-w-2xl m-7 mx-auto my-7">
          <Banner message={`Stack top.`} />
        </div> */}
        <Products type="dashboard" />
        <Faqs />
        <Pricing  />
      </div>
    </div>
  );
}
