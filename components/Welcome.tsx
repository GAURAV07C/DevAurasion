import React from "react";

const Welcome = () => {
  return (
    <div className="w-full bg-[#1B1F23]">
      <div className=" flex flex-col items-center justify-center  ">
        <div className=" w-8/12 mt-28 flex flex-col items-center justify-center mx-auto">
          <div className="text-white text-5xl font-bold">
            Welcome to <span className="font-mono mt-5">DevAurasion</span> Community
          </div>
          <div className="w-8/12 text-[#959DA5] font-normal text-xl leading-5 text-center py-5 mt-2">
          &quot;Fuel Your Tech Journey: Explore Events, Workshops, and More for Developers and Enthusiasts!&quot;
          </div>
          <div>
            <button className="bg-[#FFC209] px-6 py-5 rounded-lg text-white gap-2 mt-5"><p className="text-white font-semibold text-xl leading-7">Join Our Community</p></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
