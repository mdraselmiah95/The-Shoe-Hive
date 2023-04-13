import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Wrapper from "@/components/Wrapper";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const p = product?.data?.[0]?.attributes;
  console.log(product);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="mb-5 text-lg font-semibold">{p.subtitle}</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#2547;{p.price}
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="font-semibold text-md">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 6
                </div>

                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 7.5
                </div>

                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 6.6
                </div>

                <div className="py-3 font-medium text-center border rounded-md cursor-pointer hover:border-black">
                  UK 9
                </div>

                <div className="py-3 font-medium text-center border rounded-md cursor-not-allowed opacity-50 bg-back/[0.1]">
                  UK 9.6
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="mt-1 text-red-600">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WISHLIST BUTTON START */}
            <button className="flex items-center justify-center w-full gap-2 py-4 mb-10 text-lg font-medium transition-transform border border-black rounded-full active:scale-95 hover:opacity-75">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WISHLIST BUTTON END */}

            <div>
              <div className="mb-5 text-lg font-bold">Product Details</div>
              <div className="mb-5 markdown text-md">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        {/* <RelatedProducts products={products} /> */}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
