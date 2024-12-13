import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import { blogCardData } from "@/data/blogCardData";
import { blogTypeData } from "@/data/blogTypeData";

const BlogCard = () => {
  return (
    <div className="mt-28">
      {/* Header Section */}
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <p className="font-semibold text-4xl text-[#1B1F23] leading-7">
          Recent Articles
        </p>
        <div className="flex gap-3">
          {blogTypeData.map((blogType) => (
            <div
              key={blogType.id}
              className="bg-[#6A737D] rounded-full px-3 py-1 hover:text-white cursor-pointer"
            >
              <p>{blogType.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-4/5 mx-auto">
        {blogCardData.map((blog) => (
          <Card className="w-full" key={blog.id}>
            <div className="relative w-full">
              <Image
                src={blog.image}
                alt={blog.heading}
                layout="responsive"
                width={392}
                height={220.5}
                className="w-full h-auto rounded-t-lg object-cover"
              />
            </div>
            <CardContent className="mt-2 px-4">
              <Button className="w-16 h-8 bg-[#381E2C] text-sm font-semibold text-[#F3B2D5]">
                {blog.news}
              </Button>
            </CardContent>
            <CardHeader className="px-4 -mt-2">
              <CardTitle className="font-semibold text-lg">{blog.heading}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 mt-2">
              <p className="text-sm text-[#7C7C86]">{blog.desc}</p>
            </CardContent>
            <CardFooter className="px-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src={blog.authorImage || "/default-avatar.png"}
                      alt={`${blog.authorName}'s avatar`}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-xs font-semibold text-[#9C9EA5]">{blog.authorName}</p>
                </div>
                <p className="text-xs text-[#96969E]">{blog.date}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
