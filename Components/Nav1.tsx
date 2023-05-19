import React from "react";
import Link from "next/link";
import Draw from "./Draw";
const Nav1 = () => {
  return (
    <>
      <div className="flex flex-row justify-between pt-[15px] ml-[10px]">
        <div className="flex flex-col justify-between items-center w-[50px] h-[61px] bg-white/[0.4]">
          <Link href="/">
            <img
              src="/../assets/navimg.svg"
              alt="navbar image"
              className=" w-[50px] h-[61px]"
            />
          </Link>
        </div>

        <div className="">
          <Draw />
        </div>
      </div>
    </>
  );
};

export default Nav1;
