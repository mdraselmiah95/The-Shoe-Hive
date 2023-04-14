import { removeFromCart, updateCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const p = data.attributes;
  const dispatch = useDispatch();
  let selectedOptionId = 0;

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex gap-3 py-5 border-b md:gap-5">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between md:flex-row">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP :&#2547;{p.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <div className="relative">
                <select
                  className="py-2 pl-2 pr-8 text-base border border-gray-300 rounded appearance-none hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-500"
                  onChange={(e) => updateCartItem(e, "selectedSize")}
                  defaultValue={data.selectedSize}
                >
                  {p.size.data.map((item, i) => {
                    return (
                      <option
                        key={i}
                        value={item.size}
                        disabled={!item.enabled ? true : false}
                        selected={data.selectedSize === item.size}
                      >
                        {item.size}
                      </option>
                    );
                  })}
                </select>
                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <div className="relative">
                <select
                  className="py-2 pl-2 pr-8 text-base border border-gray-300 rounded appearance-none hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-500"
                  onChange={(e) => updateCartItem(e, "quantity")}
                  defaultValue={data.quantity}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                    return (
                      <option key={i} value={q} selected={data.quantity === q}>
                        {q}
                      </option>
                    );
                  })}
                </select>
                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
