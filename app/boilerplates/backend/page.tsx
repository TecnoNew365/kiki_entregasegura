import Faqs from "@/components/Faqs";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import TabProducts from "@/components/TabProducts";
export default function Home() {
  return (
    <div>
      <div className="g-main  -mt-20 py-32">
        <div className="flex max-w-2xl text-center flex-col space-y-5 mx-auto  h-48 justify-center ">
          <h1 className="mega-title">Boilerplates for your  backend / api</h1>
          <p className="text">
          The backend contains all the business logic, all communication with the database, and all endpoints for all connected apps, whether they are web applications or mobile apps.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto -mt-14">
        <TabProducts productActive="backend" /> 
        <div className="max-w-2xl m-7 mx-auto my-7"> 
        {/* <Banner 
            message={`In the "Administration Area" or "Control Panel," registered users can access advanced features and manage their accounts, including viewing statistics, configuring preferences, and interacting with advanced functionalities based on your business model.`}
           /> */}
        </div>
        <Products type="backend" />
        <Faqs />
        <Pricing  />
      </div>
    </div>
  );
}
