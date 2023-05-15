import React from "react";
import Link from "next/link";
import Draw from "./Draw";
const Nav1 = () => {
  return (
    <>
      <div className="flex flex-row justify-between pt-[15px] ml-[10px]">
        <Link href="/">
          <img
            src="/../assets/navimg.svg"
            alt="navbar image"
            className="ml-14px"
          />
        </Link>
        <div className="">
          <Draw />
        </div>
      </div>
    </>
  );
};

export default Nav1;
