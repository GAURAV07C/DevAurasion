import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import { BlogEntry } from "@/data/blogCardData"; 
import { FcLike, FcLikePlaceholder } from "react-icons/fc"; 
import { toast } from "sonner"; 

interface BlogCardProps {
  card: BlogEntry;
  likedBlogs: string[]; // Array of liked blog IDs
  setLikedBlogs: React.Dispatch<React.SetStateAction<string[]>>; // Function to update liked blogs
}

const BlogCard: React.FC<BlogCardProps> = ({ card, likedBlogs, setLikedBlogs }) => {
  const clickHandler = () => {
    if (likedBlogs.includes(card.id.toString())) {
      setLikedBlogs(likedBlogs.filter((id) => id !== card.id.toString()));
      toast.error("You unliked the blog!"); // Display toast for unliking
    } else {
      setLikedBlogs([...likedBlogs, card.id.toString()]);
      toast.success("You liked the blog!"); // Display toast for liking
    }
  };

  return (
    <Card className="mt-5 w-full" key={card.id}>
      <div className="relative w-full">
        <Image
          src={card.image.url}
          alt={card.heading}
          layout="responsive"
          width={392}
          height={220.5}
          className="w-full h-auto rounded-t-lg object-cover"
        />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-2 grid place-items-center">
          <button onClick={clickHandler}>
            {likedBlogs.includes(card.id.toString()) ? (
              <FcLike fontSize={"1.8rem"} />
            ) : (
              <FcLikePlaceholder fontSize={"1.8rem"} />
            )}
          </button>
        </div>
      </div>
      <CardContent className="mt-2 px-4">
        <Button className="w-fit h-8 bg-[#381E2C] text-sm font-semibold text-[#F3B2D5]">
          {card.news}
        </Button>
      </CardContent>
      <CardHeader className="px-4 -mt-2">
        <CardTitle className="font-semibold text-lg">{card.heading}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 mt-2">
        <p className="text-sm text-[#7C7C86]">{card.desc}</p>
      </CardContent>
      <CardFooter className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage
                src={card.authorImage || "/default-avatar.png"}
                alt={`${card.authorName}'s avatar`}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-xs font-semibold text-[#9C9EA5]">{card.authorName}</p>
          </div>
          <p className="text-xs text-[#96969E]">{card.date}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
