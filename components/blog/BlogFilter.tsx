import React from "react";
import { Button } from "../ui/button";

import { BlogTypeData } from "@/data/blogTypeData";
interface BlogFilterProps {
  blogTypeData: BlogTypeData[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const BlogFilter: React.FC<BlogFilterProps> = ({
  blogTypeData,
  category,
  setCategory,
}) => {
  function filterHandler(title: string) {
    setCategory(title);
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {blogTypeData.map((blogType: { id: number; title: string }) => (
          <Button
            onClick={() => filterHandler(blogType.title)}
            className={`
  rounded-full px-3 py-1 cursor-pointer 
  ${
    category === blogType.title
      ? "bg-[#6A737D]  border-white"
      : "border-transparent"
  } 
  `}
            key={blogType.id}
          >
            <p className="text-sm sm:text-base">{blogType.title}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;
