import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex gap-3 py-5 border-b md:gap-5">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src="/p1.png" alt="name" width={120} height={120} />
      </div>
      {/* IMAGE END */}

      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between md:flex-row">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            name
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            subtitle
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#2547; 100
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          subtitle
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black"></select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
