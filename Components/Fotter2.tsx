import React from "react";
import Link from "next/link";
const Fotter2 = () => {
  return (
    <>
      <div className="bg-[#191426] relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-row  flex-nowrap">
              <Link
                href=""
                className="font-Poppines font-normal text-[13px] leading-[20.8px] text-[#FFFFFF]/[0.8] py-[14px]"
              >
                Terms & Conditions
              </Link>
              <Link
                href=""
                className="font-Poppines font-normal text-[13px] leading-[20.8px] text-[#FFFFFF]/[0.8] pl-[12px] md:pl-[153px] py-[14px]"
              >
                Privacy Policy
              </Link>
              <Link
                href=""
                className="font-Poppines font-normal text-[13px] leading-[20.8px] text-[#FFFFFF]/[0.8] pl-[12px] md:pl-[153px] py-[14px]"
              >
                Contact US
              </Link>
            </div>
            <div className="flex flex-row mt-[14px]">
              <Link href="">
                <img
                  src="/../assets/youtube.svg"
                  alt="youtube"
                  className="w-[14px] h-[11.67px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/twitter.svg"
                  alt="youtube"
                  className="w-[15px] h-[12px] ml-[31px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/tiktok.svg"
                  alt="youtube"
                  className="w-[14px] h-[15.2px] ml-[31px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/facebook.svg"
                  alt="youtube"
                  className="w-[9.34px] h-[18px] ml-[31px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/instagram.svg"
                  alt="youtube"
                  className="w-[16px] h-[16px] ml-[31px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[51px] h-[49px] bg-[#106F9D] absolute top-[-70px] 2xl:top-[0px] right-[0px] flex items-center">
          <Link href="" className="w-[20px] h-[20px] ml-[16px]">
            <img
              src="/../assets/uparrow.svg"
              alt="uparrow"
              className="w-full h-[full] object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Fotter2;
