import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-auto text-[#ffff] py-10">
      <div className="w-10/12 px-5 mx-auto">
        <div className="py-2">
          <p className="text-[#5D5A88] font-semibold text-sm">About Us</p>
        </div>
        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#5D5A88]">
          where we turn ideas into reality!
        </p>

        <div className="flex flex-col lg:flex-row justify-between mt-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={"./images/aboutUs.svg"}
              alt="about"
              width={646}
              height={430.67}
              className="w-full h-auto max-w-full" // Make the image responsive
            />
          </div>
          <div className="w-full lg:w-[410px] h-auto text-center lg:text-left">
            <p className="font-semibold text-lg leading-7 text-[#9795B5]">
              We are a community that{" "}
              <span className="text-[#FF7B72]">brings together tech enthusiasts</span>, students, and developers. Whether you&apos;re taking your first steps in tech or you&apos;re an experienced developer, we&apos;re here to help you grow. At DevAurasion, we believe great things happen when people work together. Through{" "}
              <span className="text-[#FF7B72]">our workshops, events, and projects, you&apos;ll learn new skills, meet other tech professionals</span>, and build amazing things. Join us to explore new technologies, work on exciting projects, and be part of a community that supports your journey in tech.{" "}
              <span className="text-[#FF7B72]">Let&apos;s shape the future together!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
