import React from "react";

const News = () => {
  return (
    <>
      <div className="container mx-auto pb-[78px]">
        <div className="flex flex-col items-center pt-[64px] ">
          <h5 className="font-Arimo font-nomral text-[15px] leading-[17.25px] text-[#DC2A28]">
            Our Events
          </h5>
          <h2 className="font-Palatino font-normal text-[40px] leading-[54px] text-[#484848] pt-[6px]">
            News & Events
          </h2>
        </div>
        <div className="w-[78px] border-[2px] border-solid border-[#DC2A28]  ml-[52px] md:ml-[508px] 2xl:ml-[638px]"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-[80px] gap-[30px]">
          <div className="w-[291px] flex flex-col items-center cursor-pointer">
            <img
              src="/../assets/n1.png"
              alt="avatar"
              className="w-full h-[264px]"
            />
            <p className="font-Poppins font-normal text-[18px] leading-[27px] tracking-[1px] text-[#000000] pt-[21px] text-center">
              IELTS Stakeholder Celebration Event 2018
            </p>
          </div>
          <div className="w-[291px] flex flex-col items-center cursor-pointer">
            <img
              src="/../assets/n2.png"
              alt="avatar"
              className="w-full h-[264px]"
            />
            <p className="font-Poppins font-normal text-[18px] leading-[27px] tracking-[1px] text-[#000000] pt-[21px] text-center">
              IELTS Stakeholder Celebration Event 2018
            </p>
          </div>
          <div className="w-[291px] flex flex-col items-center cursor-pointer">
            <img
              src="/../assets/n3.png"
              alt="avatar"
              className="w-full h-[264px]"
            />
            <p className="font-Poppins font-normal text-[18px] leading-[27px] tracking-[1px] text-[#000000] pt-[21px] text-center">
              IELTS Stakeholder Celebration Event 2018
            </p>
          </div>
          <div className="w-[291px] flex flex-col items-center cursor-pointer">
            <img
              src="/../assets/n4.png"
              alt="avatar"
              className="w-full h-[264px]"
            />
            <p className="font-Poppins font-normal text-[18px] leading-[27px] tracking-[1px] text-[#000000] pt-[21px]  text-center">
              IELTS Stakeholder Celebration Event 2018
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
