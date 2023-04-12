import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const failed = () => {
  return (
    <>
      <div className="min-h-[650px] flex items-center">
        <Wrapper>
          <div className="text-center max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">Payment failed!</div>
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
    </>
  );
};

export default failed;
