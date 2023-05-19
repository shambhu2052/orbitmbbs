"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Studentslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings} className="sts">
          <div className="w-full">
            <div className=" h-[456px] bg-[#FFFFFF] w-full xl:w-[95%] term">
              <div className="flex flex-row">
                <div className="w-[58px] h-[58px] ml-[35px] mt-[32px] ">
                  <img
                    src="/../assets/s1.png"
                    alt="Richard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="richard">
                  <h2 className="font-['IBM Plex Sans'] font-normal text-[24px] leading-[31.2px] text-[#000000] pt-[36px] pl-[24px] pr-[85px]">
                    Richard Anderson
                  </h2>
                  <p className="font-IBM font-normal text-xs leading-[16px] text-[#007EC5] pt-[3px] pl-[24px]">
                    MBA, Australia
                  </p>
                </div>
              </div>
              <img
                src="/../assets/comma1.svg"
                alt="avatar"
                className="w-[30px] h-[30px] mt-[35px] ml-[15px] md:ml-[34px]"
              />
              <p className="font-Work font-normal text-xs leading-[16px] md:leading-[21.6px] text-[#838485] pt-[11px] pl-[34px] pr-[45px] pb-[4px]">
                The desire to study abroad comes with its own set of
                complications and moving forward can be very tedious. With
                Education Foundation, I was easily able to step forward as a
                high-school graduate with some much-needed support. From the
                selection of the right college to my visa preparation,
                everything was so hassle-free. I thank the friendly personnel at
                Coastline for providing me the stepping-stone I needed to excel.
              </p>
              <img
                src="/../assets/comma2.svg"
                alt="avatar"
                className="w-[30px] h-[30px] ml-[273px] md:ml-[334px] lg:ml-[518px] xl:ml-[367px] "
              />
            </div>
          </div>

          <div className=" w-full gap-[10px]">
            <div className="w-full xl:w-[95%] h-[456px] bg-[#FFFFFF] term">
              <div className="flex flex-row">
                <div className="w-[58px] h-[58px] ml-[35px] mt-[32px] ">
                  <img
                    src="/../assets/s2.png"
                    alt="Richard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="richard">
                  <h2 className="font-['IBM Plex Sans'] font-normal text-[24px] leading-[31.2px] text-[#000000] pt-[36px] pl-[24px] pr-[85px]">
                    Richard Anderson
                  </h2>
                  <p className="font-IBM font-normal text-xs leading-[16px] text-[#007EC5] pt-[3px] pl-[24px]">
                    MBA, Australia
                  </p>
                </div>
              </div>
              <img
                src="/../assets/comma1.svg"
                alt="avatar"
                className="w-[30px] h-[30px] mt-[35px] ml-[15px] md:ml-[34px]"
              />
              <p className="font-Work font-normal text-xs leading-[16px] md:leading-[21.6px] text-[#838485] pt-[11px] pl-[34px] pr-[45px] pb-[4px]">
                The desire to study abroad comes with its own set of
                complications and moving forward can be very tedious. With
                Education Foundation, I was easily able to step forward as a
                high-school graduate with some much-needed support. From the
                selection of the right college to my visa preparation,
                everything was so hassle-free. I thank the friendly personnel at
                Coastline for providing me the stepping-stone I needed to excel.
              </p>
              <img
                src="/../assets/comma2.svg"
                alt="avatar"
                className="w-[30px] h-[30px] ml-[273px] md:ml-[305px] lg:ml-[480px] xl:ml-[367px]"
              />
            </div>
          </div>
          <div className=" w-full">
            <div className="w-full xl:w-[95%] h-[456px] bg-[#FFFFFF] term">
              <div className="flex flex-row">
                <div className="w-[58px] h-[58px] ml-[35px] mt-[32px] ">
                  <img
                    src="/../assets/s1.png"
                    alt="Richard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="richard">
                  <h2 className="font-['IBM Plex Sans'] font-normal text-[24px] leading-[31.2px] text-[#000000] pt-[36px] pl-[24px] pr-[85px]">
                    Richard Anderson
                  </h2>
                  <p className="font-IBM font-normal text-xs leading-[16px] text-[#007EC5] pt-[3px] pl-[24px]">
                    MBA, Australia
                  </p>
                </div>
              </div>
              <img
                src="/../assets/comma1.svg"
                alt="avatar"
                className="w-[30px] h-[30px] mt-[35px] ml-[15px] md:ml-[34px]"
              />
              <p className="font-Work font-normal text-center text-xs leading-[16px]  md:leading-[21.6px] text-[#838485] pt-[11px] pl-[34px] pr-[45px] pb-[4px]">
                The desire to study abroad comes with its own set of
                complications and moving forward can be very tedious. With
                Education Foundation, I was easily able to step forward as a
                high-school graduate with some much-needed support. From the
                selection of the right college to my visa preparation,
                everything was so hassle-free. I thank the friendly personnel at
                Coastline for providing me the stepping-stone I needed to excel.
              </p>
              <img
                src="/../assets/comma2.svg"
                alt="avatar"
                className="w-[30px] h-[30px] ml-[273px] md:ml-[305px] lg:ml-[480px] xl:ml-[367px]"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Studentslide;
