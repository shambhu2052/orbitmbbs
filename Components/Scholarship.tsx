import React from "react";
import Link from "next/link";
import Count from "./Count";
import Count2 from "./Count2";
import Count3 from "./Count3";
import Count4 from "./Count4";
function Scholarship() {
  return (
    <>
      <div className="banner2 h-[907px] md:h-[523px] relative">
        <div className="absolute top-0 bg-[#1E2641]/[0.89] h-full w-full"></div>
        <div className=" mx-[20px] md:mx-[223px] bg-[white] rounded-[17px] flex flex-col items-center px-[11px] md:px-[53px] absolute top-[-66%] md:top-[-96%] pb-[38px]">
          <h2 className="font-Palatino font-bold text-[25px] md:text-[28px] leading-[37.78px] text-[#484848] pt-[20px] md:pt-[44px] text-center md:text-left ">
            MESSAGE FROM CHAIRMAN
          </h2>
          <img
            src="/../assets/chairmain.png"
            alt="avatar"
            className=" cursor-pointer mt-[5px] md:mt-[26px]"
          />
          <p className="font-Poppins font-normal text-[14px] md:text-[16px] leading-[25.6px] tracking-[1%] text-[#484848] pt-[26px] text-center">
            “We feel much exultant to apprise you all that ORBIT has been set up
            by the team of Pioneers and Front - line teachers in the realm of
            MBBS Entrance examinations. Its establishment came into existence
            with a view to imparting quality education and learning to students
            who are pursuing their career in the domain of Medicine.”
          </p>
          <Link
            href=""
            className="flex flex-row gap-[10px] w-white rounded-[4px] mt-[42.2px] ml-[52%] md:ml-[82%] 2xl:ml-[85%]"
          >
            <h3 className="font-Poppins font-normal text-[15px] leading-[22px] text-[#484848] pl-[11.71px]  ">
              Read More
            </h3>
            <img
              src="/../assets/arrow2.svg"
              alt="avatar"
              className="w-[15.58px] h-[11.15px] mr-[18.42px] mt-[5px]"
            />
          </Link>
        </div>
        <div className="container mx-auto absolute top-[5px] md:top-[80px] md:left-[85px]">
          <div className="grid grid-cols-1 md:grid-cols-4  ">
            <div className="flex flex-col items-center">
              <Count />
              <h5 className="font-Poppins font-semibold text-[20px] leading-[30px] text-white/[0.67] pt-[16px]">
                STUDENTS ENROLLED
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <Count2 />
              <h5 className="font-Poppins font-semibold text-[20px] leading-[30px] text-white/[0.67] pt-[16px]">
                BATCHES PER YEAR
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <Count3 />
              <h5 className="font-Poppins font-semibold text-[20px] leading-[30px] text-white/[0.67] pt-[16px]">
                DOCTOR PRODUCED
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <Count4 />
              <h5 className="font-Poppins font-semibold text-[20px] leading-[30px] text-white/[0.67] pt-[16px]">
                CERTIFIED TEACHERS
              </h5>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between absolute left-[10px] md:left-[50px] container mx-auto ">
            <div className="basis-[70%]">
              <h2 className="font-Palatino font-bold text-[30px] md:text-[35px] leading-[47px] text-[white] pt-[37px] md:pt-[120px]">
                SCHOLARSHIP AVAILABLE
              </h2>
              <p className="font-Poppins font-normal text-[13px] md:text-[18px] leading-[27px] text-white max-w-[704px] pr-[18px] md:pr-[0px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt <br /> nostrud amet.
              </p>
            </div>
            <div className="basis-[30%]">
              <Link
                href=""
                className="w-[180px] h-[60px] bg-[#21B2F9] rounded-[10px] flex flex-row 
             gap-[10px] items-center mt-[53px] md:mt-[150px] ml-[127px] xl:ml-[92px] 2xl:ml-[170px] "
              >
                <p className="font-Arimo font-bold text-[16px] leading-[18.4px] text-white pl-[26.71px]">
                  Scholarships{" "}
                </p>
                <img
                  src="/../assets/scarrow.svg"
                  alt="avatar"
                  className="w-[15.58px] h-[11.15px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scholarship;
