import React from "react";
import { FaDribbble, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#101828] py-10 text-white">
      <div className="flex flex-col items-center justify-center gap-12 ">
        {/* Main Footer Section */}
        <div className="w-11/12 mx-auto mt-7">
          <div className="px-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="text-[#EAECF0] p-4">
                <p className="font-bold text-lg mb-4">LOGO</p>
                <p className="font-normal text-sm leading-6">
                  Top learning experiences that create more talent in the world.
                </p>
              </div>
              {/* Column 2 */}
              <div className=" ">
                <h3 className="text-[#98A2B3] text-sm font-semibold leading-5 mb-4">company</h3>
                
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Blogs
                    </a>
                  </li>
                  <li className="flex">
                    <a href="#" className="text-[#98A2B3] hover:text-white">
                      Events
                    </a>
                    <div className="bg-[#F2F4F7] px-2 py-0.5 gap-1 ml-1 rounded-2xl text-black">

                    <p className="font-normal text-sm text-center" >New</p>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className=" ">
                <h3 className="text-[#98A2B3] text-sm font-semibold leading-5 mb-4">Social</h3>
                
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Linkdlin
                    </a>
                  </li>
                  <li >
                    <a href="#" className="text-[#EAECF0] hover:text-white">
                      Github
                    </a>
                    
                  </li>
                  <li>
                    <a href="#" className="text- hover:text-white text-[#EAECf0] text-sm font-medium leading-6   ">
                      Dribble
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-11/12 mx-auto  pt-4">
          <div className="px-9 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bottom Column 1 */}
              <div className="flex items-center justify-center sm:justify-start text-[#98A2B3]">
                <p>© 2024 YourCompany. All rights reserved.</p>
              </div>
              {/* Bottom Column 2 */}
              <div className="flex items-center justify-center sm:justify-end">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white">
                  <FaTwitter size={28} className="text-[#98A2B3]" />
                  </a>
                  <a href="#" className="hover:text-white">
                  <FaLinkedin size={28} className="text-[#98A2B3]" />
                  </a>
                  <a href="#" className="hover:text-white">
                   <FaFacebook size={28} className="text-[#98A2B3]" />
                  </a>
                  <a href="#" className="hover:text-white">
                    
                    
                  <FaGithub size={28} className="text-[#98A2B3]" />
                  </a>
                  <a href="#" className="hover:text-white">
                  <FaDribbble size={28} className="text-[#98A2B3]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-"></div>
      </div>
    </div>
  );
};

export default Footer;
