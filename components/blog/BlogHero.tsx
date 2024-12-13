import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const BlogHero = () => {
  return (
    <div className="mt-9 w-11/12 md:w-3/4 mx-auto mb-5">
      <div>
        <section>
          <div className="w-full md:w-2/5 text-center mx-auto">
            <p className="font-bold font-sans text-lg text-[#5D5A88]">
              BLOG
            </p>
            <p className="font-normal text-lg md:text-2xl text-[#9795B5]">
              Our ideas and insights on{" "}
              <span className="font-bold"> suppliers, vendors, networks </span>,
              platform, and much more.
            </p>
          </div>
        </section>
        <div className="mt-10 w-full md:w-1/5 h-6 px-2 mx-auto md:ml-11">
          <p className="w-full md:w-3/5 will-change-auto bg-[#EBFAFF] font-normal text-sm text-center rounded-lg mx-auto">
            LATEST BLOG
          </p>
        </div>
        <section className="mt-11">
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="px-2 pt-3 mx-auto md:mx-0">
                <Image
                  src={"/images/aboutUs.svg"}
                  alt="Illustration of blog content"
                  width={610}
                  height={369}
                  className="w-full md:w-[610px] h-auto md:h-[280px] border-2"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col px-6 mt-4 md:ml-4">
                <div>
                  <Button className="bg-[#381E2C] mb-3 mt-5">
                    <p className="font-semibold text-sm leading-4 px-1 py-1">
                      News
                    </p>
                  </Button>
                </div>
                <div className="py-1 mt-1">
                  <p className="font-normal text-lg md:text-2xl">
                    How Glide is Bringing the Power of AI to 1 Billion Creators
                  </p>
                </div>
                <div>
                  <p className="font-normal text-sm md:text-lg leading-5 text-[#96969E] py-2 mt-1">
                    Glide&apos;s AI approach, how our customers are using AI
                    today, and a new AI App Designer you can try out
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex gap-3 py-1 mt-1 items-center">
                  <div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={"/images/blog-ceo.svg"}
                        alt={"CEO image"}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-[#B0B0B6]">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHero;
