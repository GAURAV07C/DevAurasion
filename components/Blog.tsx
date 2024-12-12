import Image from "next/image";
import React from "react";

// Reusable BlogPost Component
const BlogPost: React.FC<{
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  flex: string;
}> = ({ date, title, description, imageUrl, imageWidth, imageHeight, flex }) => (
  <div className={`flex ${flex} gap-6 mt-6`}>
    <div className="w-full sm:w-1/3">
      <Image src={imageUrl} alt={title} width={imageWidth} height={imageHeight} 
      className={`w-[${imageWidth}px] h-[${imageHeight}px]`}
      />
    </div>
    <div className="flex flex-col w-2/3">
      <p className="text-[#20B486] font-semibold text-sm">{date}</p>
      <p className="font-semibold text-lg text-[#FFFFFF]">{title}</p>
      <p className="font-normal text-sm text-[#BBC5D9]">{description}</p>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section>
        <div className="w-full h-[168.38px]">
          <div
            className=" h-[168.38px]"
            style={
              {
                backgroundImage: "url('./images/blog-header.svg')",
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat"
              } as React.CSSProperties
            }
          >
            {/* Add your content here */}

            <div className=" w-[52%] mx-auto flex h-full  flex-col items-center justify-center  ">
              <div className="">
                <p className="text-[#F17216] font-semibold text-4xl leading-8">
                  Explore Our Blogs
                </p>
              </div>
              <div>
                <p className="text-[#E9EBF3] text-lg text-center leading-7">
                  Dive into a world of knowledge with articles crafted to
                  inform, inspire, and ignite your curiosity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <main className="w-full bg-[#1B1F23] py-8 -mt-2">
        <div className="flex flex-col sm:flex-row justify-between px-8">
          {/* Left Side Blog Posts */}
          <div className="w-full sm:w-3/5">
            <BlogPost
              date="November 16, 2024"
              title="Three Pillars of User Delight"
              description="Delight can be experienced viscerally, behaviorally, and reflectively. A great design is..."
              flex={'flex-row'}
              imageUrl="./images/blog1.svg"
              imageWidth={320}
              imageHeight={200}
            />
            <BlogPost
              date="November 16, 2024"
              title="Three Pillars of User Delight"
              description="Delight can be experienced viscerally, behaviorally, and reflectively. A great design is..."
              flex={'flex-row'}
              imageUrl="./images/blog2.svg"
              imageWidth={320}
              imageHeight={200}
            />
          </div>

          {/* Right Side Blog Post */}
          <div className="w-full sm:w-2/5 mt-8 sm:mt-0 ">
            <BlogPost
              date="November 16, 2024"
              title="Three Pillars of User Delight"
              description="Delight can be experienced viscerally, behaviorally, and reflectively. A great design is..."
              flex={'flex-col'}
              imageUrl="./images/blog3.svg"
              imageWidth={230}
              imageHeight={200}
            />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <section className="w-full">

      <div
            className=" h-[168.38px]"
            style={
              {
                backgroundImage: "url('./images/blog-footer.svg')",
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat"
              } as React.CSSProperties
            }
          >
            {/* Add your content here */}

            <div className=" w-[52%] mx-auto flex h-full  flex-col items-center justify-center  ">
              <div className="">
                <p className="text-[#F17216] font-semibold text-sm leading-8">
                Learn more
                </p>
              </div>
              <div>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default Blog;
