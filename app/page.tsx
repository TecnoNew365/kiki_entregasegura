import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto -mt-14">
        <div className="flex flex-col   ">
          <div>
            <Testimonial />
          </div>
          <div>
            <Pricing />
          </div>
        </div>
      </div>
      <div></div>
      <div className="g-main">
        <div className="max-w-7xl flex flex-col space-y-24 mx-auto ">
          <Faqs />
        </div>
      </div>
    </div>
  );
}
