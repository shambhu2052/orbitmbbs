import React from "react";

function Exclusive() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row  gap-[5px] md:gap-[102px] pb-[5px] md:pb-[92px] ">
        <div className="basis-[60%]">
          <h2 className="font-Palatino font-normal text-[40px] leading-[53.96px] text-[#000000] pl-[13px] md:pl-0 pt-[28px] md:pt-[115px]">
            Exclusive IELTS Partner
          </h2>
          <div className="w-[78px] border-[2px] border-solid border-[#DC2A28] mt-[4px] ml-[13px] md:ml-0"></div>
          <p
            className=" font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%]
         pt-[30px] text-[#484848] px-[13px] md:px-0"
          >
            IELTS Stakeholder Celebration Event was held on 22 March 2018. The
            event brought together a range of IELTS partners to celebrate their
            work together with British Council helping young Nepali students and
            professionals gain access to education and career development
            opportunities..
          </p>

          <p className="pt-[10px] font-Arimo font-normal text-[14px] leading-[21px] tracking-[1px] text-[#484848] px-[13px] md:px-0">
            Mr. Sunil Regmi from Orbit Medical Entrance receiving Exclusive
            IELTS Partner award from British Council's Exam manager, Jim O'Neill
            © British Council Nepal
          </p>
          <div className="h-[59px] mt-[87px] ml-[2%] md:ml-[18%] mr-[2%] md:mr-0">
            <img
              src="/../assets/british.svg"
              alt="photo of iltes"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-[32px] md:mt-[82px] h-[426px]  basis-[40%]">
          <img
            src="/../assets/man.png"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Exclusive;
