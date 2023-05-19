import Link from "next/link";
import React from "react";

export default function Fotter() {
  return (
    <>
      <div className="bg-white pb-[10px]">
        <div className="container mx-auto flex flex-col md:flex-row gap-[27px] md:gap-[136px] 2xl:gap-[202px] pt-[20px] md:pt-[60px]">
          <div className="flex flex-col items-start ml-[20px] md:ml-[0px]">
            <Link href="/">
              <img src="/../assets/orbit1.svg" alt="logo" />
            </Link>
            <h4 className="font-Palatino font-bold text-[15px] leading-[24px] text-[#10709F] pt-[13px]">
              ORBIT MBBS{" "}
            </h4>
          </div>
          <div className="font-Arimo font-normal text-[15px] leading-[24px] text-[#484848] ml-[20px] md:ml-0">
            <p>
              New Plaza ,Putalisadak,(Beside <br /> Npal Yatayat Stoppage, North
              of
              <br />
              Singhdurbar Kathmandu)
            </p>
            <h5 className="pt-[20px]">+977-1-4526149</h5>
            <Link href="/">
              <h5 className="pt-[20px]">infor@orbitmbbs.com</h5>
            </Link>
          </div>
          <div className="flex flex-col items-start ml-[20px] md:ml-[0px]">
            <h5 className="font-Arimo font-bold text-[15px] leading-[24px] text-[#484848]">
              Country
            </h5>
            <div className="font-Arimo font-normal text-[15px] leading-[24px] text-[#484848] flex flex-col gap-[9px]">
              <Link href="" className="pt-[13px]">
                Courses
              </Link>
              <Link href="">Downloads</Link>
              <Link href="">E-Learning</Link>
              <Link href="">Results</Link>
              <Link href="">Entrance Exams</Link>
            </div>
          </div>
          <div className="flex flex-col items-start ml-[20px] md:ml-[0px]">
            <h5 className="font-Arimo font-bold text-[15px] leading-[24px] text-[#484848]">
              Useful Links
            </h5>
            <div className="font-Arimo font-normal text-[15px] leading-[24px] text-[#484848] flex flex-col gap-[9px]">
              <Link href="" className="pt-[13px]">
                Courses
              </Link>
              <Link href="">Downloads</Link>
              <Link href="">E-Learning</Link>
              <Link href="">Results</Link>
              <Link href="">Entrance Exams</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[22.15px] footer ml-[20px] md:ml-0">
            <h5 className="font-Arimo font-bold text-[15px] leading-[24px] text-[#484848]">
              Follow us on
            </h5>
            <div className="flex gap-[31px] flex-wrap">
              <Link href="">
                <img
                  src="/../assets/v.svg"
                  alt="video"
                  className="w-[14px] h-[11.67px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/t.svg"
                  alt="teitter"
                  className="w-[15px] h-[12px] "
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/tik.svg"
                  alt="tiktok"
                  className="w-[14px] h-[15.2px] "
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/f.svg"
                  alt="facebook"
                  className="w-[9.34px] h-[18px]"
                />
              </Link>
              <Link href="">
                <img
                  src="/../assets/insta.svg"
                  alt="instagram"
                  className="w-[16px] h-[16px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
