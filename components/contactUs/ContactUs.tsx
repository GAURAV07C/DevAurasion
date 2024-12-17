import React from "react";

import ContactDetails from "./ContactDetails";
import ContactFromDetails from "./ContactFromDetails";

const ContactUs = () => {
  return (
    <div className="bg-richblack-900 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 p-6 lg:p-16">
      {/* Left Section */}
      <div className="w-full lg:w-1/3">
        <ContactDetails />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3">
        <ContactFromDetails />
      </div>
    </div>
  );
};

export default ContactUs;
