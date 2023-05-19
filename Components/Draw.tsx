"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";
import FaBars from "react-icons/fa";
import GoThreeBars from "react-icons/go";
const Draw = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" flex flex-col gap-[5px] mr-[10px]" onClick={showDrawer}>
        <div className="w-[30px] h-[4px] bg-white"></div>
        <div className="w-[30px] h-[4px] bg-white"></div>
        <div className="w-[30px] h-[4px] bg-white"></div>
      </div>
      {/*   <Button type="primary" onClick={showDrawer}>open</Button>*/}

      <Drawer
        title="Navbar Menu"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px]"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px]  "
          >
            ABOUT{" "}
            <img
              src="/../assets/arrowdown.svg"
              className="w-[6px] h-[3px] ml-[4px] mt-[10px]"
            />
          </Link>
          <Link
            href="/service"
            className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px] "
          >
            SERVICES{" "}
            <img
              src="/../assets/arrowdown.svg"
              className="w-[6px] h-[3px] ml-[4px] mt-[10px]"
            />
          </Link>
          <Link
            href=""
            className="font-Poppins font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px] "
          >
            IELTS REGISTRATION
          </Link>
          <Link
            href=""
            className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px]  "
          >
            MEDIA
          </Link>
          <Link
            href="/contactus"
            className="font-Poppins flex flex-row font-normal text-[14px] leading-[21px] tracking-[1%] text-black pt-[36px]  "
          >
            CONTACT
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Draw;
