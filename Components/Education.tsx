import React from "react";

const Education = () => {
  return (
    <>
      <div className="container mx-auto pb-[10px] md:pb-[136px]">
        <h3 className="font-Mulish font-light text-[13px] leading-[16.32px] pt-[24px] pl-[12px] md:pl-0">
          HOME / ABOUT
        </h3>
        <div className="flex flex-col md:flex-row mt-[23px] md:mt-[116px] gap-[26px] md:gap-[93px]">
          <div className="basis-[50%]">
            <h4 className="font-Roboto font-medium text-[13px] leading-[15px] text-[#7A8A9E] pl-[12px] md:pl-[0px]">
              About
            </h4>
            <h1 className="font-Mulish font-semibold text-[31px] md:text-[36px] leading-[46px] text-[#003760] max-w-[413px] pt-[8] px-[12px] md:px-[0px]">
              Coastline Education the right place for Education
            </h1>
            <p className="font-IBM font-normal text-[15px] leading-[22px] text-[#696969] pt-[10px] md:pt-[62px] px-[12px] md:px-0 ">
              We have also had the notable success in recruiting students into
              the higher institutions in Australia, Canada, USA and the United
              Kingdom. We have also had the notable success in recruiting
              students into the higher institutions in <br />
              <br /> Australia, Canada, USA and the United Kingdom.We have also
              had the notable success in recruiting students
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start mt-[49px] gap-[34px]">
              <div className="flex flex-col items-center bg-[#007EC5]/[0.05] pb-[10px] rounded-tl-[50px] rounded-br-[50px]">
                <h2 className="font-IBM font-light text-[44.8px] leading-[67px] text-[#007EC5] ">
                  5
                </h2>
                <h5 className="font-IBM font-semibold text-[16px] leading-[24px] text-[#434343] px-[26px] whitespace-pre">
                  Years Experience
                </h5>
              </div>
              <div className="flex flex-col items-center bg-[#00A023]/[0.05] pb-[10px] rounded-tl-[50px] rounded-br-[50px]">
                <h2 className="font-IBM font-light text-[44.8px] leading-[67px] text-[#00A023]">
                  280
                </h2>
                <h5 className="font-IBM font-semibold text-[16px] leading-[24px] text-[#434343] px-[42px] whitespace-pre">
                  Visa Granted
                </h5>
              </div>
              <div className="flex flex-col items-center bg-[#FF7F0A]/[0.05] pb-[10px] rounded-tl-[50px] rounded-br-[50px]">
                <h2 className="font-IBM font-light text-[44.8px] leading-[67px] text-[#FF7F0A]">
                  98%
                </h2>
                <h5 className="font-IBM font-semibold text-[16px] leading-[24px] text-[#434343] px-[19px] whitespace-pre">
                  Admission Success
                </h5>
              </div>
            </div>
          </div>
          <div className="basis-[50%]">
            <div className="w-[94%] md:w-full h-[492px] cursor-pointer ml-[12px] md:ml-0">
              <img
                src="/../assets/imgedu.png"
                alt="image of education"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
