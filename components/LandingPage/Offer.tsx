import React from "react";
import { RiFundsLine } from "react-icons/ri";

const Offer = () => {
  return (
    <div className="w-full h-auto">
      <div className="px-4 md:px-6 border-2 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mt-7 mb-7">
          {/* Left Content */}
          <div className="w-full md:w-2/5 text-center md:text-left mb-6 md:mb-0">
            <div className="text-[#F17216] font-normal text-sm leading-4">
              What we offer
            </div>
            <div>
              <p className="text-[#282C4B] font-bold text-2xl leading-8 tracking-wide">
                Our Capabilities
              </p>
            </div>
            <div>
              <p className="text-[#747582] font-normal text-lg leading-8">
                We help people who love technology and developers by providing
              </p>
            </div>
          </div>

          {/* Right Content (Cards) */}
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-3/5 justify-center">
            {/* Card 1 */}
            <div className="w-full sm:w-[280px] h-[241px] gradient-border border rounded-md hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] mt-2 md:mt-6 transition-all duration-500 ease-in-out hover:transition-colors">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine className="text-3xl text-[#F17216]" />
                  </div>
                  <div>
                    <p className="text-[#14183E] font-semibold text-xl leading-6">
                      Networking
                    </p>
                    <p className="font-normal text-sm leading-7 text-[#747582]">
                      Meet other developers, students, and tech enthusiasts at
                      events and meetups
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[280px] h-[241px] gradient-border border rounded-md hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] mt-2 md:mt-6 transition-all duration-500 ease-in-out hover:transition-colors">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine className="text-3xl text-[#F17216]" />
                  </div>
                  <div>
                    <p className="text-[#14183E] font-semibold text-xl leading-6">
                      Internship Opportunities
                    </p>
                    <p className="font-normal text-sm leading-7 text-[#747582]">
                      We share regular updates about internships and jobs in the
                      community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[280px] h-[241px] gradient-border border rounded-md hover:bg-gradient-to-t from-[#FFCEBE] to-[#FFE9E2] mt-2 md:mt-6 transition-all duration-500 ease-in-out hover:transition-colors">
              <div className="w-[90%] mx-auto px-2 py-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiFundsLine className="text-3xl text-[#F17216]" />
                  </div>
                  <div>
                    <p className="text-[#14183E] font-semibold text-xl leading-6">
                      Free Career Guidance
                    </p>
                    <p className="font-normal text-sm leading-7 text-[#747582]">
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
  );
};

export default Offer;
