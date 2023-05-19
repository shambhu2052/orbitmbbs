import Choose from "@/Components/Choose";
import Fotter from "@/Components/Fotter";
import Service1 from "@/Components/Service1";
import Service2 from "@/Components/Service2";
import React from "react";

const page = () => {
  return (
    <>
      <Service1 />
      <Service2 />
      <Choose />
      <Fotter />
    </>
  );
};

export default page;
