import React from "react";
import Studentslide from "./Studentslide";

const Student = () => {
  return (
    <>
      <div className="stu h-[845px] md:h-[648px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-[5px] md:gap-[54px]">
          <div className="basis-[40%] ml-[12px] md:ml-0">
            <h3 className="font-Roboto font-medium text-[13px] leading-[15.23px] text-[#7A8A9E] pt-[25px] md:pt-[172px]">
              TESTIMONIALS
            </h3>
            <h3 className="font-Mulish font-bold text-[45px] md:text-[48px] leading-[60.24px] text-[white] pt-[14px]">
              What Our Students Say
            </h3>
            <p className="font-IBM font-normal text-[16px] leading-[24px] text-white pt-[18px]">
              Curabitur tincidunt turpis sit amet blandit maximus. Fusce ut
              feugiat justo. Phasellus ultricies venenatis rhoncus. Mauris
              aliquam semper nisl, non tincidunt metus tempor eu.
            </p>
          </div>
          <div className="basis-[60%]">
            <Studentslide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
