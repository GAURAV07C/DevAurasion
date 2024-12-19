import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface TeamSectionProps {
  title: string;
  description: string;
  people: {
    name: string;
    role: string;
    links?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
    backgroundImage?: string; // Optional: fallback if no image is provided
  }[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  description,
  people,
}) => {
  return (
    <div className="w-full mb-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-[#5D5A88] text-2xl sm:text-3xl lg:text-4xl font-bold">
            {title}
          </h2>
          <p className="text-[#9795B5] text-sm sm:text-base lg:text-lg leading-7 px-4">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {people.map((person, index) => (
            <Card
              key={index}
              className="relative w-[300px] h-[300px] mx-auto border-2 overflow-hidden group"
              style={{
                backgroundImage: `url('${person.backgroundImage}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              } as React.CSSProperties}
            >
              {/* Overlay */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Card Content */}
              <CardContent className="absolute inset-0 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="">
                  <CardHeader className="text-start -mt-1">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5D5A88] -mt-8">
                      {person.name}
                    </CardTitle>

                    {/* Reduced the gap between name and role */}
                    <CardDescription className="text-sm sm:text-base lg:text-lg font-bold text-[#8D8BA7] mt-2">
                      {person.role}
                    </CardDescription>
                  </CardHeader>

                  {/* Social Media Links */}
                  <CardFooter className="flex gap-4 -mt-6 text-[#8D8BA7]">
                    {person.links?.facebook && (
                      <Link href={person.links.facebook} passHref>
                        <FaFacebook
                          size={24}
                          className="cursor-pointer hover:text-blue-500"
                        />
                      </Link>
                    )}
                    {person.links?.twitter && (
                      <Link href={person.links.twitter} passHref>
                        <FaTwitter
                          size={24}
                          className="cursor-pointer hover:text-blue-400"
                        />
                      </Link>
                    )}
                    {person.links?.instagram && (
                      <Link href={person.links.instagram} passHref>
                        <FaInstagram
                          size={24}
                          className="cursor-pointer hover:text-pink-500"
                        />
                      </Link>
                    )}
                    {person.links?.linkedin && (
                      <Link href={person.links.linkedin} passHref>
                        <FaLinkedin
                          size={24}
                          className="cursor-pointer hover:text-blue-600"
                        />
                      </Link>
                    )}
                  </CardFooter>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
