import HeroBanner from "@/components/HeroBanner";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          {/* heading and paragraph start */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl">
              Experience ultimate comfort and support with Nike's ZoomX and
              elevated stack heights, designed to cushion your stride during
              long runs. Unleash your potential with every step.
            </div>
          </div>
          {/* heading and paragraph end */}

          {/* products grid start */}

          {!products.data ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 my-14 md:px-0">
              {products?.data?.map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))}
            </div>
          )}

          {/* products grid end */}
        </Wrapper>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}

// video 2nd Part=> 04:28:00
