import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "name",
    role: "role",
    links: {
      facebook: "https://facebook.com/alice",
      twitter: "https://twitter.com/alice",
      instagram: "https://instagram.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
  },
  {
    name: "name",
    role: "role",
    links: {
      facebook: "https://facebook.com/bob",
      twitter: "https://twitter.com/bob",
      instagram: "https://instagram.com/bob",
      linkedin: "https://linkedin.com/in/bob",
    },
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <div className="w-full mb-5">
      <div className="w-11/12 max-w-[1200px] mx-auto">
        {/* Team Introduction Section */}
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-[#5D5A88] text-4xl font-bold text-center">
              Meet Our Team
            </p>
            <p className="font-normal text-lg leading-7 text-[#9795B5] text-center px-4 py-2">
              Get to Know the Passionate Professionals Who Bring Our Vision to
              Life and Make Your Goals Their Mission
            </p>
          </div>

          {/* Team Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-[387.97px] h-[387px]   border-2 overflow-hidden group mx-auto" style={
                              {
                                backgroundImage: "url('./images/aboutUs.svg')",
                                backgroundSize: "cover",
                                backgroundRepeat:"no-repeat"
                              } as React.CSSProperties
                            }
              >
                {/* Background Overlay */}
                <div className="absolute inset-0  opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col  justify-end items-start p-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                  <div className="text-[#5D5A88]">
                    <p className="font-extrabold text-4xl leading-7 px-2 py-2">
                      {member.name}
                    </p>
                  </div>
                  <div className="text-[#8D8BA7]">
                    <p className="font-semibold text-lg leading-5 px-2">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex text-[#8D8BA7] gap-4 justify-start items-start px-2 py-2">
                    <Link href={member.links.facebook} passHref>
                      <FaFacebook size={28} className="cursor-pointer hover:text-blue-500" />
                    </Link>
                    <Link href={member.links.twitter} passHref>
                      <FaTwitter size={28} className="cursor-pointer hover:text-blue-400" />
                    </Link>
                    <Link href={member.links.instagram} passHref>
                      <FaInstagram size={28} className="cursor-pointer hover:text-pink-500" />
                    </Link>
                    <Link href={member.links.linkedin} passHref>
                      <FaLinkedin size={28} className="cursor-pointer hover:text-blue-600" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
