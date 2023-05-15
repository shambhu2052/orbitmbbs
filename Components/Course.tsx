import React from "react";
import Link from "next/link";
function Course() {
  return (
    <div className="flex  justify-between ">
      <div className="flex-1">
        <div className="bg-[#F8FAFF] flex flex-col pb-[660px] items-center ">
          <div className=" ml-[2px] 2xl:ml-[273px]">
            <h2 className="font-Palatino font-normal text-[35px] md:text-[40px] leading-[54px] text-[#000000] pt-[72px]">
              OFFERED COURSES
            </h2>
            <div className="w-[78px] border-[2px] border-solid border-[#DC2A28] mt-[4px] "></div>
          </div>
          <div className="flex flex-col md:flex-row ml-[30px] 2xl:ml-[399px]  mt-[84px] gap-[48px]">
            <div className="flex flex-col items-center cursor-pointer ">
              <img
                src="/../assets/image1.png"
                alt=""
                className="w-[234px] h-[176px]"
              />
              <h4 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#484848] mt-[16px]">
                AMET MINIM
              </h4>
            </div>
            <div className="flex flex-col items-center cursor-pointer ">
              <img
                src="/../assets/image2.png"
                alt=""
                className="w-[234px] h-[176px]"
              />
              <h4 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#484848] mt-[16px]">
                AMET MINIM
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white] pb-[660px] flex flex-col  flex-1">
        <div className="flex flex-row items-center gap-[10px] bg-[#106F9D] rounded-[4px] w-[130px] h-[48px] ml-[11px] md:ml-[409px] mt-[81px]">
          <Link
            href=""
            className="font-Arimo font-bold text-[16px] leading-[18.4px] text-[#FFFFFF] pl-[21.71px]"
          >
            View All{" "}
          </Link>
          <img
            src="/../assets/arrowright.svg"
            alt="avatar"
            className="w-[15.58px] h-[11.15px] mr-[18.43px]"
          />
        </div>
        <div className="flex flex-col md:flex-row ml-[5px] md:ml-[32px] gap-[50px] mr-[10px] md:mr-0px mt-[143px] md:mt-[91px] cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/../assets/image3.png"
              alt="avatar"
              className="w-[234px] h-[176px]"
            />
            <h4 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#484848] pt-[16px]">
              AMET MINIM
            </h4>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="/../assets/image4.png"
              alt="avatar"
              className="w-[234px] h-[176px]"
            />
            <h4 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#484848] pt-[16px]">
              AMET MINIM
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
