import Link from "next/link";
import React from "react";
import Wrapper from "@/components/Wrapper";

const success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Thanks for shopping with us!</div>
          <div className="mt-2 text-lg font-bold">
            Your order has been placed successfully.
          </div>
          <div className="mt-5 text-base">
            For any product related query, drop an email to
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="mt-5 font-bold">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default success;
