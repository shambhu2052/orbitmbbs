import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Welcome from "@/Components/Welcome";
import Exclusive from "@/Components/Exclusive";
import Course from "@/Components/Course";
import Scholarship from "@/Components/Scholarship";
import Testimonial from "@/Components/Testimonial";
import News from "@/Components/News";
import Fotter from "@/Components/Fotter";
import Fotter2 from "@/Components/Fotter2";

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
