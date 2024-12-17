import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icon1 from "react-icons/bi"; // Bi icons
import * as Icon2 from "react-icons/io5"; // Io icons


import { contactDetails } from "@/data/contactDetails"; // Import contact details

const ContactDetails = () => {
  return (
    <div className="mt-8  ">
      <Card className="w-full md:w-fit  mx-auto lg:w-full bg-richblack-800 flex">
        <CardContent>
          <div className="w-full  flex flex-col md:flex-row lg:flex-col rounded-xl bg-richblack-800">
            {contactDetails.map((ele, i) => {
              // Use the icon from the correct library directly
              let Icon;

              // Direct mapping based on the icon data
              if (ele.icon.startsWith("Bi")) {
                Icon = Icon1[ele.icon as keyof typeof Icon1];
              } else if (ele.icon.startsWith("Io")) {
                Icon = Icon2[ele.icon as keyof typeof Icon2];
              }

              return (
                <div
                  className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
                  key={i}
                >
                  <div className="flex flex-row items-center gap-3">
                    {Icon && <Icon size={25} />} {/* Render icon if it's found */}
                    <h1 className="text-lg font-semibold text-richblack-5">
                      {ele?.heading}
                    </h1>
                  </div>
                  <p className="font-medium">{ele?.description}</p>
                  <p className="font-semibold">{ele?.details}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactDetails;
