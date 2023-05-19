'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Clientslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    < >
     <Slider {...settings}>
          <div className="relative  md:w-[394px] h-[384px] bg-white rounded-[10px] mbbs flex flex-col items-center ">
            <div className='absolute top-[-20%] left-[50%] transform translate-x-[-50%] w-[150px] h-[150px] ' > 
              <img src="/../assets/c1.png" alt="jhonson" className="w-full h-full z-20 object-cover"/>
            </div>
              <h2 className="font-Arimo font-bold text-[18px] leading-[29px] text-[#484848] pt-[55px] px-[111px] whitespace-pre">JHONSON DWAYNE</h2>
              <h4 className="font-Palatino font-bold text-[14px] leading-[22.4px] text-[#DC2A28] pt-[3px] px-[154px] whitespace-pre">lorem, MBBS</h4>
              <p className="font-Arimo font-normal text-[15px] leading-[28.65px] text-center text-[#484848] pt-[74px] px-[21px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="relative md:w-[394px] h-[384px] bg-white rounded-[10px] mbbs flex flex-col items-center ">
            <div className='absolute top-[-20%] left-[50%] transform translate-x-[-50%] w-[150px] h-[150px] ' > 
              <img src="/../assets/c2.png" alt="jhonson" className="w-full h-full z-20 object-cover"/>
            </div>
              <h2 className="font-Arimo font-bold text-[18px] leading-[29px] text-[#484848] pt-[55px] px-[111px] whitespace-pre">JHONSON DWAYNE</h2>
              <h4 className="font-Palatino font-bold text-[14px] leading-[22.4px] text-[#DC2A28] pt-[3px] px-[154px] whitespace-pre">lorem, MBBS</h4>
              <p className="font-Arimo font-normal text-[15px] leading-[28.65px] text-center text-[#484848] pt-[74px] px-[21px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia ..</p>
          </div>
          <div className="relative md:w-[394px] h-[384px] bg-white rounded-[10px] mbbs flex flex-col items-center ">
            <div className='absolute top-[-20%] left-[50%] transform translate-x-[-50%] w-[150px] h-[150px] ' > 
              <img src="/../assets/c3.png" alt="jhonson" className="w-full h-full z-20 object-cover"/>
            </div>
              <h2 className="font-Arimo font-bold text-[18px] leading-[29px] text-[#484848] pt-[55px] px-[111px] whitespace-pre">JHONSON DWAYNE</h2>
              <h4 className="font-Palatino font-bold text-[14px] leading-[22.4px] text-[#DC2A28] pt-[3px] px-[154px] whitespace-pre">lorem, MBBS</h4>
              <p className="font-Arimo font-normal text-[15px] leading-[28.65px] text-center text-[#484848] pt-[74px] px-[21px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</p>
          </div>
          <div className="relative md:w-[394px] h-[384px] bg-white rounded-[10px] mbbs flex flex-col items-center ">
            <div className='absolute top-[-20%] left-[50%] transform translate-x-[-50%] w-[150px] h-[150px] ' > 
              <img src="/../assets/c1.png" alt="jhonson" className="w-full h-full z-20 object-cover"/>
            </div>
              <h2 className="font-Arimo font-bold text-[18px] leading-[29px] text-[#484848] pt-[55px] px-[111px] whitespace-pre">JHONSON DWAYNE</h2>
              <h4 className="font-Palatino font-bold text-[14px] leading-[22.4px] text-[#DC2A28] pt-[3px] px-[154px] whitespace-pre">lorem, MBBS</h4>
              <p className="font-Arimo font-normal text-[15px] leading-[28.65px] text-center text-[#484848] pt-[74px] px-[21px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </Slider>
    </>
  )
}

export default Clientslide;