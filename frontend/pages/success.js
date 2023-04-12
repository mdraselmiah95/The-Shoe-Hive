import Link from "next/link";
import React from "react";
import Wrapper from "@/components/Wrapper";

const success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
            <div class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm2.293 13.707a1 1 0 0 1-1.414 0L10 11.414l-1.879 1.879a1 1 0 1 1-1.414-1.414L8.586 10 6.707 8.121a1 1 0 1 1 1.414-1.414L10 8.586l1.879-1.879a1 1 0 0 1 1.414 1.414L11.414 10l1.879 1.879a1 1 0 0 1 0 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-center">
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Thank you for your purchase!
              </h2>
              <p class="mt-2 text-lg text-gray-600">
                Your order has been placed successfully.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <Link
                href="/"
                class="mt-6 text-base font-medium text-blue-600 hover:text-blue-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default success;
