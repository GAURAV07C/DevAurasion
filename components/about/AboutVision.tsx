import React from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import { aboutCardData } from "@/data/aboutCardData"; // Assuming you have the data in a separate file

const AboutVision = () => {
  return (
    <div className="mt-10">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-xl text-center text-[#6A737D]">
            Our Vision for the Future
          </p>
          <p className="w-40 h-0.5 text-center bg-gradient-to-r from-[#79B8FF] to-[#BEF5CA]"></p>
        </div>
        <div className="flex">
          <div className="mt-16 -ml-3 flex flex-col">
            {/* Access array items by index */}
            <AboutCard
              key={aboutCardData[0].id}  // First item (index 0)
              img={aboutCardData[0].img}
              title={aboutCardData[0].title}
              description={aboutCardData[0].description}
            />
            <Image
              src={"/images/about/connectionDown.svg"}
              alt="connectionDown"
              width={303}
              height={88.5}
              className="w-[303px] h-[88.5px] mt-14 ml-52"
            />
          </div>
          <div className="border mt-40  w-[263px] h-[250px] flex items-center justify-center">
            <Image
              src={"/images/about/center.svg"}
              alt="center"
              width={80}
              height={70.49}
              className=""
            />
          </div>
          <div className="ml-16 flex flex-col">
            <Image
              src={"/images/about/buildRight.svg"}
              alt="buildRight"
              width={378}
              height={78}
              className="w-[378px] h-[78px] mt-14 -ml-44"
            />
            {/* Access second item (index 1) */}
            <AboutCard
              key={aboutCardData[1].id}
              img={aboutCardData[1].img}
              title={aboutCardData[1].title}
              description={aboutCardData[1].description}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mt-16 flex">
            <Image
              src={"/images/about/explloreright.svg"}
              alt="explloreright"
              height={96}
              width={155.5}
              className="w-[96px] h-[155.5px] -mt-14 ml-44"
            />
            {/* Access third item (index 2) */}
            <AboutCard
              key={aboutCardData[2].id}
              img={aboutCardData[2].img}
              title={aboutCardData[2].title}
              description={aboutCardData[2].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
