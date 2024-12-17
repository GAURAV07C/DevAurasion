import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import contrycode from "@/data/countrycode.json";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="p-0 sm:p-5 bg-richblack-900 rounded-lg max-w-full sm:max-w-4xl mx-auto">
      <form className="flex flex-col gap-6">
        {/* Name and Email Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Carter"
              className="form-style"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="form-style"
            />
          </div>
        </div>

        {/* Phone and Company Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <Label htmlFor="phone" className="text-white">
              Phone
            </Label>
            <div className="flex gap-3">
              {/* Country Code Dropdown */}
              <div className="w-fit">
                <Select>
                  <SelectTrigger className="form-style bg-richblack-900 border border-richblack-700 text-richblack-300">
                    <SelectValue placeholder="+91" />
                  </SelectTrigger>
                  <SelectContent className="form-style bg-richblack-900 border border-richblack-700 text-richblack-300">
                    {contrycode.map((ele) => (
                      <SelectItem
                        key={ele.country}
                        value={`${ele.code}-${ele.country}`}
                        className="text-richblack-300 hover:bg-richblack-800"
                      >
                        {ele.code} - {ele.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Phone Input */}
              <Input
                id="phone"
                type="text"
                placeholder="1234567890"
                className="form-style flex-grow"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <Label htmlFor="company" className="text-white">
              Company
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Facebook"
              className="form-style"
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="message" className="text-white">
            Leave us a message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            className="form-style bg-richblack-900 border border-richblack-700 text-richblack-300"
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-yellow-50 text-black text-lg hover:bg-yellow-100  mx-auto sm:mx-0">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
