import Image from "next/image";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Exclusive from "@/components/Exclusive";
import Course from "@/components/Course";
import Scholarship from "@/components/Scholarship";
import Testimonial from "@/components/Testimonial";
import News from "@/components/News";
import Fotter from "@/components/Fotter";
import Fotter2 from "@/components/Fotter2";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Welcome />
        <Exclusive />
        <Course />
        <Scholarship />
        <Testimonial />
        <News />
        <Fotter />
        <Fotter2 />
      </div>
    </>
  );
}
