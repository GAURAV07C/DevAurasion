import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactFromDetails = () => {
  return (
    <div className="border-richblack-600 text-richblack-300 rounded-xl p-0 sm:p-7 lg:p-10 flex flex-col items-center justify-center gap-6 sm:gap-6">
      <Card className="bg-transparent text-richblack-300 w-full max-w-md sm:max-w-lg lg:max-w-2xl">
        <CardHeader className="w-full mx-auto text-center">
          <CardTitle className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
            Get in Touch with Us
          </CardTitle>
          <CardDescription className="font-normal text-sm sm:text-base lg:text-lg">
            Have questions or need support? Reach out to us—we’re here to help and eager to connect!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactFromDetails;
