import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="overflow-hidden duration-200 transform bg-white cursor-pointer hover:scale-105"
    >
      <Image width={500} height={500} src="/p1.png" alt="p.name" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium ">name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#2547;44</p>

          <>
            <p className="text-base font-medium line-through">&#2547;300</p>
            <p className="ml-auto text-base font-medium text-green-500">
              100 % off
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
