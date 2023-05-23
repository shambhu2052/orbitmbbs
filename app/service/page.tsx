import Choose from "@/components/Choose";
import Fotter from "@/components/Fotter";
import Service1 from "@/components/Service1";
import Service2 from "@/components/Service2";
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
