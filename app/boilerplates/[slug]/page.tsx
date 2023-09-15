import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import ProductFeatures from "@/components/ProductFeatures";
import ProductModules from "@/components/ProductModules";
import defaults from "@/utils/consts";
import { ProductType } from "@/utils/types";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const product: ProductType | undefined = defaults.products?.find(
    (product) => product.slug === params.slug
  );

  return (
    <div>
      {product && (
        <>
          <div className="flex flex-col mx-auto  -mt-20 py-32 g-main ">
            <h1 className="mega-title text-center">{product.name}</h1>
            <h1 className="text text-center">{product.description}</h1>{" "}
            <div className="flex mx-auto my-3 space-x-3 mt-10">
              {product.hrefDemo && 
              <Link href={product.hrefDemo} className="btn-main">
                View Demo
              </Link>}
              {product.hrefDocs &&   <Link href={product.hrefDocs} className="btn-main">
                View Doc
              </Link>}
            </div>
          </div>
          <div className="mt-7">
            <Gallery screenshots={product.screenshots} />
          </div>
          <ProductFeatures product={product} />
          <CTA />
          <ProductModules product={product} />
        </>
      )}
    </div>
  );
}
