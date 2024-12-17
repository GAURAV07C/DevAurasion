import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navigation data
import { navData } from "@/data/nav";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="w-full bg-[#1B1F23] h-16">
      <div className="flex justify-between items-center w-11/12 mx-auto h-full">
        {/* Logo */}
        <div className="text-white font-semibold text-lg">DevAurasion</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navData.map((nav) => (
            <div key={nav.id} className="group relative">
              <Link
                href={nav.link}
                className="text-white font-medium hover:text-[#79B8FF]" // Change the text color on hover
              >
                {nav.title}
              </Link>
              {/* Line shows on hover with left-to-right transition */}
              <div className="h-0.5 bg-gradient-to-r from-[#79B8FF] to-[#BEF5CA] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ease-out z-10"></div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#1B1F23]">
              <SheetHeader>
                <SheetTitle className="text-white ">DevAurasion</SheetTitle>
                <SheetDescription className="text-gray-300 text-center leading-7">
                  Fuel Your Tech Journey: Explore Events, Workshops, and More
                  for Developers and Enthusiasts!
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-start  gap-4 mt-6">
                {navData.map((nav) => (
                  <div key={nav.id} className="group relative ">
                    <SheetClose asChild>
                      <Link
                        href={nav.link}
                        className="text-white sm:text-2xl  hover:text-[#5e6a78] sm:font-semibold" 
                      >
                        {nav.title}
                      </Link>
                    </SheetClose>
                    
                    <div className="h-0.5 bg-gradient-to-r from-[#79B8FF] to-[#BEF5CA] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ease-out z-10"></div>
                  </div>
                ))}
                <Button className="bg-yellow-50 mt-11 text-black hover:text-richblack-25">Join Our Community</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
