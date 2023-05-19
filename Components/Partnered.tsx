"use client";
import React from "react";
import Partnerslide from "./Partnerslide";

const Partnered = () => {
  return (
    <>
      <div className="bg-[#F6FAFD] pb-[10px] md:pb-[140px]">
        <div className="container mx-auto flex flex-col md:flex-row gap-[20px] md:gap-[127px]">
          <div className="basis-[50%] px-[12px] md:px-[60px]">
            <h4 className="font-Roboto font-medium text-[13px] leading-[15.23px] text-[#7A8A9E] pt-[15px]  md:pt-[141px]">
              OUR PARTNERS
            </h4>
            <h1 className="font-Mulish font-semibold text-[36px] leading-[45.18px] text-[#003760] pt-[5px]">
              Partnered Universities
            </h1>
            <p className="font-IBM font-normal text-[16px] leading-[28.8px] text-[#434343] max-w-[385px]">
              Curabitur tincidunt turpis sit amet blandit maximus. Fusce ut
              feugiat justo. Phasellus ultricies venenatis rhoncus. Mauris
              aliquam semper nisl, non tincidunt metus tempor eu.
            </p>
          </div>
          <div className="basis-[50%]  md:mt-[132px]">
            <img src="/../assets/wmap.png" alt="" className="  " />
          </div>
        </div>
        <div className="container mx-auto">
          <Partnerslide />
        </div>
      </div>
    </>
  );
};

export default Partnered;
