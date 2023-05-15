import Link from "next/link";
import React from "react";

export default function Fotter() {
  return (
    <>
      <div className="bg-[#1E2641] pb-[117px]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-[168px]">
            <div className="mt-[38px] ml-[25px] md:ml-0">
              <div className="flex flex-row items-end">
                <Link href="/">
                  {" "}
                  <img src="/../assets/f1.svg" alt="avatar" />
                </Link>
                <div className=" flex flex-col ">
                  <div className="w-[123.98px] h-[1.08px] bg-[#DC2A28] ml-[10px]"></div>
                  <h5 className="font-Palatino font-bold text-[20px] leading-[30px] tracking-[5.5%] text-[white] pl-[5px]">
                    ORBIT MBBS PREPARATION
                  </h5>
                </div>
              </div>
              <p className="text-left font-Poppins font-normal text-[12px] leading-[18px] pt-[6px] text-[#ABADBE]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequ.
              </p>
            </div>
            <div className="flex flex-col mt-[62px] ml-[25px] md:ml-0">
              <h3 className="font-Arimo font-bold text-[15px] leading-[24px] text-white whitespace-pre">
                Useful Links
              </h3>
              <Link
                href=""
                className="font-Arimo font-normal text-[13px] leading-[20.8px] pt-[13px] text-[#ABADBE]"
              >
                Courses
              </Link>
              <Link
                href=""
                className="font-Arimo font-normal text-[13px] leading-[20.8px] pt-[9px] text-[#ABADBE]"
              >
                Downloads
              </Link>
              <Link
                href=""
                className="font-Arimo font-normal text-[13px] leading-[20.8px] pt-[9px] text-[#ABADBE]"
              >
                E-Leraning
              </Link>
              <Link
                href=""
                className="font-Arimo font-normal text-[13px] leading-[20.8px] pt-[9px] text-[#ABADBE]"
              >
                Results
              </Link>
              <Link
                href=""
                className="font-Arimo font-normal text-[13px] leading-[20.8px] pt-[9px] text-[#ABADBE]"
              >
                Entrance Exams
              </Link>
            </div>
            <div className="mt-[62px] ml-[25px] md:ml-0">
              <h3 className="font-Arimo font-bold text-[15px] leading-[24px] text-[#FFFFFF]">
                Blog
              </h3>
              <div className="w-[204px] h-[98px] relative mt-[13px]">
                <img
                  src="/../assets/f2.png"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
                <p className="absolute top-[30px] left-[12px] font-Poppins font-normal text-[12px] leading-[18px] tracking-[1%] text-center max-w-[157px] text-[#F5F5F5]">
                  IELTS Stakeholder Celebration Event 2018
                </p>
              </div>
            </div>
            <div className="mt-[62px] ml-[25px] md:ml-0">
              <h3 className="font-Arimo font-bold text-[15px] leading-[24px] text-[#FFFFFF] pb-[20px]">
                Contact Info
              </h3>
              <Link href="" className="flex flex-row">
                <img
                  src="/../assets/f3.svg"
                  alt=""
                  className="w-[15px] h-[15px]"
                />
                <p className="font-Poppins font-normal text-[13px] leading-[20.8px] text-[#ABADBE] pl-[13px] pb-[20px]">
                  {" "}
                  New Plaza ,Putalisadak,(Beside Nepal Yatayat Stoppage,North of
                  Singhdurbar Kathmandu)
                </p>
              </Link>
              <Link href="" className="flex flex-row">
                <img
                  src="/../assets/f4.svg"
                  alt=""
                  className="w-[15px] h-[15px]"
                />
                <p className="font-Poppins font-normal text-[13px] leading-[20.8px] text-[#ABADBE] pl-[13px] pb-[20px]">
                  {" "}
                  +977-1-4526149
                </p>
              </Link>
              <Link href="" className="flex flex-row">
                <img
                  src="/../assets/f5.svg"
                  alt=""
                  className="w-[13px] h-[10px]"
                />
                <p className="font-Poppins font-normal text-[13px] leading-[20.8px] text-[#ABADBE] pl-[13px]">
                  infor@orbitmbbs.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
