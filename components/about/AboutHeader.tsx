import Image from "next/image";
import React from "react";

const AboutHeader = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      {/* Decorative Images - Top */}
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <div className="rounded-2xl">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>
        <div className="rounded-2xl">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16">
        {/* Left Decorative Image */}
        <div className="mt-8 md:mt-16 rounded-2xl hidden md:block">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>

        {/* Header Text */}
        <div className="w-full md:w-[60%] flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[#9795B5]">
            <p>KNOW</p>
            <p className="font-bold">OUR HISTORY</p>
          </div>
          <p className="font-normal text-base sm:text-lg lg:text-xl text-[#9795B5] leading-8">
            Explore our journey of growth, innovation, and empowering
            individuals through collaboration.
          </p>
        </div>

        {/* Right Decorative Image */}
        <div className="mt-8 md:mt-16 rounded-2xl hidden md:block">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>
      </div>

      {/* Decorative Images - Bottom */}
      <div className="w-[70%] mx-auto flex justify-between items-center mt-8">
        <div className="rounded-2xl">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>
        <div className="rounded-2xl">
          <Image
            src={"./images/aboutUs.svg"}
            alt="triangle1"
            width={17.78}
            height={15.66}
            className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* Left Section: Image */}
        <div className="flex justify-center items-center">
          <Image
            src={"/images/aboutUs.svg"}
            alt="About Us"
            width={128.21}
            height={104.05}
            className="w-[100px] sm:w-[128.21px] h-auto"
          />
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col justify-center gap-5">
          <p className="text-[#9795B5] font-normal text-sm sm:text-base lg:text-lg leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
          <p className="text-[#9795B5] font-normal text-sm sm:text-base lg:text-lg leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="text-center sm:text-left">
              <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#5D5A88]">
                No. 1
              </p>
              <p className="font-normal text-sm sm:text-base lg:text-lg text-[#9795B5] mt-2">
                The effect of different scenarios on the display
              </p>
            </div>
            {/* Stat 2 */}
            <div className="text-center sm:text-left">
              <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#5D5A88]">
                No. 2
              </p>
              <p className="font-normal text-sm sm:text-base lg:text-lg text-[#9795B5] mt-2">
                The range of functions available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
