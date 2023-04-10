import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel>
        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="slider image"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="slider image"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            alt="slider image"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
