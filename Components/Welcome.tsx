import React from "react";

function Welcome() {
  return (
    <>
      <div className="bg-[#F8FAFF] h-full md:h-[797px]">
        <div className="container mx-auto flex flex-col md:flex-row relative">
          <div className="mt-[22px] md:mt-[109px] w-full md:w-[296px] h-[512px] cursor-pointer">
            <img
              src="/../assets/welcome.png"
              alt="Image of welcome"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-[12px] md:mt-[125px] mr-[10px] md:mr-[0px] ml-[14px] md:ml-[30px]">
            <h2 className="font-Palatino font-normal text-[40px] leading-[54px] text-[#000000] ">
              WELCOME TO ORBIT
            </h2>
            <div className="w-[78px] border-[2px] border-solid border-[#DC2A28] mt-[7px]"></div>
            <p className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-[#484848] pt-[75px] max-w-[933px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="pt-[10px] font-Arimo font-normal text-[14px] leading-[21px] tracking-[1%] text-[#484848]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia conssequat
            </p>
          </div>
          <div className="md:grid md:grid-cols-4 absolute top-[72%] gap-[27.2px] left-[6%] hidden ">
            <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-[278px] h-[192px]">
              <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
                COURSES
              </h3>
              <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[19px] pb-[39px] px-[23px] max-w-[232px] text-center">
                We offer all types of courses divided into three main
                branches-Medical, Paramedical, and Applied Sciences.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-[278px] h-[192px]">
              <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
                STUDENT CAREER
              </h3>
              <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[38px] pb-[58px] px-[23px] max-w-[232px] text-center">
                Amet minim mollit non deserunt ullamco est t nostrud amet.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-[278px] h-[192px]">
              <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
                E-LEARNING
              </h3>
              <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[29px] pb-[49px] px-[23px] max-w-[232px] text-center">
                {" "}
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis-Medical.
              </p>
            </div>
            <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-[278px] h-[192px]">
              <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
                SCHOLARSHIP
              </h3>
              <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[29px] pb-[49px] px-[23px] max-w-[232px] text-center">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-[10px] mt-[20px] px-[10px] md:hidden">
          <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-full h-[201px] ">
            <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
              COURSES
            </h3>
            <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[19px] pb-[39px] px-[23px] max-w-[232px] text-center">
              We offer all types of courses divided into three main
              branches-Medical, Paramedical, and Applied Sciences.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-full h-[201px]">
            <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
              STUDENT CAREER
            </h3>
            <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[19px] pb-[39px] px-[23px] max-w-[232px] text-center">
              Amet minim mollit non deserunt ullamco est t nostrud amet.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-full h-[210px]">
            <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
              E-LEARNING
            </h3>
            <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[19px] pb-[39px] px-[23px] max-w-[232px] text-center">
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis-Medical.
            </p>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[5px] w-full h-[201px]">
            <h3 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#DC2A28] pt-[30px]">
              SCHOLARSHIP
            </h3>
            <p className="font-Poppins font-normal text-[13px] leading-[19.5px] tracking-[2%] text-[#484848] pt-[19px] pb-[39px] px-[23px] max-w-[232px] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
