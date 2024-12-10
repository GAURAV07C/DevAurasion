import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#101828] py-10 text-white">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Main Footer Section */}
        <div className="w-11/12 mx-auto">
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
              <div className="border border-gray-600 p-4">
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="border border-gray-600 p-4">
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-11/12 mx-auto border-t border-gray-600 pt-4">
          <div className="px-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bottom Column 1 */}
              <div className="flex items-center justify-center sm:justify-start text-[#98A2B3]">
                <p>© 2024 YourCompany. All rights reserved.</p>
              </div>
              {/* Bottom Column 2 */}
              <div className="flex items-center justify-center sm:justify-end">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
