import React from "react";

const NavBar = () => {
  return (
    <div className="w-full bg-[#1B1F23] h-16">
      <div className="flex flex-row w-11/12">
        <div className="w-8/12"></div>
        <div className="w-4/12">
          <ul className="flex flex-row text-white justify-between mt-4 text-sm leading-5">
            <li>Home</li>
            <li>Blog</li>
            <li>Event</li>
            <li>AboutUs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
