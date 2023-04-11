import Wrapper from "@/components/Wrapper";
import React from "react";

const cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className="flex flex-col gap-12 py-10 lg:flex-row">
            {/* CART ITEMS START */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Items</div>

              {/* <CartItem key={item.id} data={item} /> */}
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>

              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="font-medium text-black uppercase text-md md:text-lg">
                    Subtotal
                  </div>
                  <div className="font-medium text-black text-md md:text-lg">
                    &#2547;100
                  </div>
                </div>
                <div className="py-5 mt-5 text-sm border-t md:text-md">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts. It does not
                  include delivery costs and international transaction fees.
                </div>
              </div>
              {/* BUTTON START */}
              <button className="flex items-center justify-center w-full gap-2 py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full active:scale-95 hover:opacity-75">
                Checkout
              </button>
              {/* BUTTON END */}
            </div>
            {/* SUMMARY END */}
          </div>
          {/* CART CONTENT END */}
        </>
      </Wrapper>
    </div>
  );
};

export default cart;