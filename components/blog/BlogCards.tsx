'use client'

import { BlogEntry } from "@/data/blogCardData";
import React, { useState } from "react";
import BlogCard from "./BlogCard";

interface BlogCardsProps {
  cards: BlogEntry[];
}

const BlogCards: React.FC<BlogCardsProps> = ({ cards }) => {
  const [likedBlogs, setLikedBlogs] = useState<string[]>([]); // Store liked blog IDs

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.id}>
          <BlogCard 
            card={card} 
            likedBlogs={likedBlogs} 
            setLikedBlogs={setLikedBlogs} 
          />
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
