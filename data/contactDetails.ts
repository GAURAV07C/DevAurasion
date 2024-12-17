import * as Icon1 from "react-icons/bi";
import * as Icon2 from "react-icons/io5";
import * as Icon3 from "react-icons/hi2";

// Define a type for each contact detail
export interface ContactDetail {
  icon: keyof typeof Icon1 | keyof typeof Icon2 | keyof typeof Icon3;
  heading: string;
  description: string;
  details: string;
}

// Contact details data
export const contactDetails: ContactDetail[] = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with us",
    description: "Our friendly team is here to help.",
    details: "info@devaurasion.com",
  },
 
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
  },
];
