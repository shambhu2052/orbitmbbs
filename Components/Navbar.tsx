import Link from "next/link";
import React from "react";
import Nav1 from "./Nav1";
function Navbar() {
  return (
    <>
      <div className="banner relative h-[747px]">
        <div className=" md:hidden navbar">
          <Nav1 />
        </div>
        <div className="navbar absolute top-[0px] w-full hidden md:block">
          <div className="container mx-auto flex flex-row justify-between">
            <div className="flex flex-row ">
              <Link
                href="/"
                className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px] pb-[37px]"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px] pb-[37px] pl-[71px]"
              >
                ABOUT{" "}
                <img
                  src="/../assets/arrowdown.svg"
                  className="w-[6px] h-[3px] ml-[4px] mt-[10px]"
                />
              </Link>
              <Link
                href="/service"
                className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px] pb-[37px] pl-[51.5px]"
              >
                SERVICES{" "}
                <img
                  src="/../assets/arrowdown.svg"
                  className="w-[6px] h-[3px] ml-[4px] mt-[10px]"
                />
              </Link>
            </div>
            <div className="w-[105px] h-[128px] bg-[white]/[0.4] flex flex-col items-center">
              <img src="/../assets/navimg.svg" alt="avatr" className="" />
              <h3 className="font-serif font-normal text-[14px] leading-[16px] tracking-[1%] text-[#000000] pt-[6px] pb-[11px]">
                lorem Ipsum
              </h3>
            </div>
            <div className="flex flex-row">
              <Link
                href=""
                className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px]"
              >
                IELTS REGISTRATION
              </Link>
              <Link
                href=""
                className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px] pl-[58.5px]"
              >
                MEDIA
              </Link>
              <Link
                href="/contactus"
                className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-white pt-[36px] pl-[64px]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
