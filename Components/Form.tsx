import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-Mulish font-bold text-[13px] leading-[16.32px] text-[#003760] pt-[24px] pl-[10px] md:pl-0">
        HOME / ABOUT
      </h2>
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[134px]">
        <div className="flex flex-col items-center gap-[32px] md:gap-[69px] mt-[30px] md:mt-[165px] basis-[50%] md:border-r-[1px] md:border-solid md:border-[#003760]">
          <div className="flex flex-col items-center">
            <h3 className="font-Mulish font-bold text-[24px] leading-[30.12px] text-[#003760]">
              Phone
            </h3>
            <h4 className="font-bold text-[15px] leading-[22px] text-[#696969] font-IBM pt-[12px]">
              +977-1234567891
              <br />
              01-154245684
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-Mulish font-bold text-[24px] leading-[30px] text-[#003760]">
              Email
            </h3>
            <h4 className="font-IBM font-bold text-[15px] leading-[22.5px] text-[#696969] pt-[12px]">
              info@coastline.com
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-Mulish font-bold text-[24px] leading-[30px] text-[#003760]">
              Address
            </h3>
            <h4 className="font-IBM font-bold text-[15px] leading-[22.5px] text-[#696969] pt-[12px]">
              15 St, New York, NY 10005 United States
            </h4>
          </div>
        </div>
        <div className="mt-[20px] md:mt-[140px] basis-[50%] ml-[10px] md:ml-0">
          <form className="w-full md:w-[512px]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#F9F9F9] h-[64px] w-full outline-none pl-[21px]"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="bg-[#F9F9F9] h-[64px] mt-[24px] w-full outline-none pl-[21px]"
            />
            <br />
            <textarea
              className="bg-[#F9F9F9] mt-[24px] outline-none w-full h-[148px] pt-[15px] pl-[21px]"
              placeholder="Message"
            ></textarea>
            {/* <input
              type="text"
              placeholder="Message"
              className="bg-[#F9F9F9] h-[184px] mt-[24px] w-full"
  /> */}

            <br />
            <div className=" flex items-center bg-[#E02454] h-[45px] mt-[24px] w-[198px]">
              <h4 className="font-Mulish font-bold text-[14px] leading-[17.57px] text-white pl-[45px] pt-[8px]">
                SEND MESSAGE
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
