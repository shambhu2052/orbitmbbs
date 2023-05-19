import React from "react";

const Choose = () => {
  return (
    <>
      <div className="bg-[#F6FAFD] pb-[89px]">
        <div className="flex flex-col items-center">
          <h4 className="font-Roboto font-medium text-[13px] leading-[15px] tracking-[13.5%] pt-[59px]">
            WHY US
          </h4>
          <h1 className="font-Muslish font-semibold text-[36px] leading-[45.18px] text-[#003760] pt-[4px]">
            Why Choose Us
          </h1>
        </div>
        <div className="container mx-auto mt-[46px] md:mt-[97px]">
          <div className="flex flex-col md:flex-row gap-[69px] md:gap-[213px] justify-center items-center md:items-start md:justify-start 2xl:gap-[339px]">
            <div className="flex gap-[24px] items-center">
              <img
                src="/../assets/student.svg"
                alt="avatar"
                className="w-[39px] h-[38px]"
              />
              <div className="">
                <h2 className="font-Mulish font-medium text-[23px] leading-[28px] tracking-[-1.5%] text-[#0D1250]">
                  Student Screening
                </h2>
                <p className="font-Roboto font-light text-[15px] leading-[17px] text-[#333333] pt-[13px]">
                  We check student eligibility for <br />
                  enrollment
                </p>
              </div>
            </div>
            <div className="flex gap-[24px] items-center">
              <img
                src="/../assets/document.svg"
                alt="avatar"
                className="w-[36px] h-[39px]"
              />
              <div className="">
                <h2 className="font-Mulish font-medium text-[23px] leading-[28px] tracking-[-1.5%] text-[#0D1250]">
                  Document Guidance
                </h2>
                <p className="font-Roboto font-light text-[15px] leading-[17px] text-[#333333] pt-[13px]">
                  We check student eligibility for <br /> enrollment
                </p>
              </div>
            </div>
            <div className="flex gap-[24px] items-center">
              <img
                src="/../assets/scholar.svg"
                alt="avatar"
                className="w-[40px] h-[40px]"
              />
              <div className="">
                <h2 className="font-Mulish font-medium text-[23px] leading-[28px] tracking-[-1.5%] text-[#0D1250]">
                  Scholarship Assistance
                </h2>
                <p className="font-Roboto font-light text-[15px] leading-[17px] text-[#333333] pt-[13px]">
                  We check student eligibility for <br />
                  enrollment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
