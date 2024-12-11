import React from "react";
import { RiFundsLine } from "react-icons/ri";
const Offer = () => {
  return (
    <div className=" w-full h-auto">
      <div className="px-6 border-2  mx-auto">
        <div className="flex  items-center justify-between mt-7 mb-7">
          <div className="w-2/5 -mt-10">
            <div className="text-[#F17216] font-normal text-sm leading-4">
              What we offer
            </div>
            <div className="">
              <p className="text-[#282C4B] font-bold text-2xl leading-8 tracking-wide">
                Our Capabilities
              </p>
            </div>
            <div>
              <p className="text-[#747582] font-normal text-lg leading-8">
                we help people who love technology and developers by providing
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex gap-5">
            <div className="w-[222px] h-[241px] gradient-border border rounded-md hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] mt-6">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine />
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <p className="text-[#14183E] font-semibold text-xl leading-6">
                        Networking
                      </p>
                    </div>
                    <div className="font-normal text-sm leading-7 text-[#747582] ">
                      <p>
                        Meet other developers, students, and tech enthusiasts at
                        events and meetups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[222px] h-[241px] gradient-border hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] rounded-md mt-6">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine />
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <p className="text-[#14183E] font-semibold text-xl leading-6">
                        internship opportunities
                      </p>
                    </div>
                    <div className="font-normal text-sm leading-7 text-[#747582]">
                      <p>
                        We share regular updates about internships and jobs in
                        the community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[222px] h-[241px] gradient-border hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] rounded-md mt-6">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine />
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <p className="text-[#14183E] font-semibold text-xl leading-6">
                        free career guidance
                      </p>
                    </div>
                    <div className="font-normal text-sm leading-7 text-[#747582]">
                      <p>
                        Get guidance for your tech career through our free
                        workshops and events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
