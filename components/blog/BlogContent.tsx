'use client'
import React, { useEffect, useState } from "react";
import BlogFilter from "./BlogFilter";
import BlogCards from "./BlogCards";
import { blogTypeData } from "@/data/blogTypeData";
import { blogCardData } from "@/data/blogCardData";
import { BlogEntry } from "@/data/blogCardData";
import Spinner from "./Spinner";


const BlogContent = () => {
  const [category, setCategory] = useState(blogTypeData[0].title);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<BlogEntry[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const output = blogCardData.data;
        const allCards = Object.values(output).flat(); // Flatten all cards

        // Filter cards based on the selected category
        if (category === "All") {
          setCards(allCards); // Show all cards if category is "All"
        } else {
          const filteredCards = output[category] || [];
          setCards(filteredCards); // Filter cards based on category
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    }

    fetchData(); // Re-fetch data whenever the category changes
  }, [category]); // Trigger effect whenever category changes

  return (
    <div className="mt-28 overflow-x-hidden">
      {/* Header Section */}
      <section>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#1B1F23] text-center md:text-left leading-7">
            Recent Articles
          </p>
          <BlogFilter blogTypeData={blogTypeData} category={category} setCategory={setCategory} />
        </div>
      </section>
      {/* Card Section */}
      {loading ? <Spinner /> : <BlogCards cards={cards} />}
    </div>
  );
};

export default BlogContent;
