import React from "react";
import Clientslide from "./Clientslide";

const Testimonial = () => {
  return (
    <>
      <div className=" flex flex-col items-center">
        <h5 className="font-Arimo font-normal text-[15px] leading-[17.25px] text-[#DC2A28] pt-[28px] md:pt-[80px]">
          Testimonials
        </h5>
        <h2 className="font-Palatino font-normal text-[35px] md:text-[40px] leading-[54px] text-[#484848] pt-[6px]">
          Client’s Testimonials
        </h2>
      </div>
      <div className="container  mx-auto">
        <Clientslide />
      </div>
    </>
  );
};

export default Testimonial;
