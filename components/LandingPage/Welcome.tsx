import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-screen bg-[#1B1F23] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-12">
          Welcome to <span className="font-samarkan">DevAurasion</span> Community
        </h1>

        {/* Subheading */}
        <p className="text-[#959DA5] font-normal text-lg sm:text-xl lg:text-2xl mt-4 leading-6 sm:leading-7 lg:leading-8 max-w-3xl">
          &quot;Fuel Your Tech Journey: Explore Events, Workshops, and More for Developers and Enthusiasts!&quot;
        </p>

        {/* Button */}
        <button className="bg-[#FFC209] px-6 py-3 sm:py-4 rounded-lg text-white mt-6 hover:bg-[#e6a908] transition">
          <span className="font-semibold text-lg sm:text-xl leading-7">Join Our Community</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
