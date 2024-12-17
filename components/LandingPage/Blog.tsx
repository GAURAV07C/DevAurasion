import Image from "next/image";
import React from "react";
import {  FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";


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
     <div className="w-full bg-[#1B1F23] h-auto min-h-screen flex items-center justify-center p-4">
           <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 mx-auto">
             
             {/* Left Side Content */}
             <div className="w-full lg:w-1/2 flex flex-col gap-4 h-full">
               {/* First Row */}
               <div className="flex flex-col sm:flex-row lg:flex-row gap-4 flex-1">
                 {/* Image */}
                 <div className="w-full sm:w-1/2">
                   <Image
                     src={"./images/blog1.svg"}
                     alt="blog1"
                     width={640}
                     height={400}
                     className="object-cover w-full h-full"
                   />
                 </div>
                 {/* Text Content */}
                 <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 p-4">
                   <p className="text-[#20B486] font-normal text-sm lg:text-base">
                     November 16, 2024
                   </p>
                   <p className="font-semibold text-lg lg:text-xl text-white">
                     Three Pillars of User Delight
                   </p>
                   <p className="font-normal text-sm lg:text-base text-[#BBC5D9]">
                     Delight can be experienced viscerally, behaviourally, and
                     reflectively. A great design is ...
                   </p>
                 </div>
               </div>
     
               {/* Second Row */}
               <div className="flex flex-col sm:flex-row lg:flex-row gap-4 flex-1">
                 {/* Image */}
                 <div className="w-full sm:w-1/2">
                   <Image
                     src={"./images/blog3.svg"}
                     alt="blog3"
                     width={640}
                     height={400}
                     className="object-cover w-full h-full"
                   />
                 </div>
                 {/* Text Content */}
                 <div className="w-full sm:w-1/2 flex flex-col justify-center gap-2 p-4">
                   <p className="text-[#20B486] font-normal text-sm lg:text-base">
                     September 24, 2024
                   </p>
                   <p className="font-semibold text-lg lg:text-xl text-white">
                     UX Mapping Methods
                   </p>
                   <p className="font-normal text-sm lg:text-base text-[#BBC5D9]">
                     Visual-design principles can be applied consistently throughout
                     the process of creating a polished UX map...
                   </p>
                 </div>
               </div>
             </div>
     
             {/* Right Side Content */}
             <div className="w-full lg:w-1/2 flex flex-col gap-4 h-full">
               <div className="w-full h-full">
                 <Image
                   src={"./images/blog3.svg"}
                   alt="blog3"
                   width={640}
                   height={400}
                   className="object-cover w-full h-full"
                 />
               </div>
               <div className="w-full flex flex-col justify-center gap-2 p-4 mt-4">
                 <p className="text-[#20B486] font-normal text-sm lg:text-base mt-2">
                   March 13, 2024
                 </p>
                 <p className="font-semibold text-lg lg:text-2xl text-white mt-3">
                   Agile Development Projects and Usability
                 </p>
                 <p className="font-normal text-sm lg:text-base text-[#BBC5D9]">
                   Agile methods aim to overcome usability barriers in traditional
                   development, but post new threats to user experience quality.
                 </p>
               </div>
             </div>
           </div>
         </div>
       

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

            <div className=" w-[100%] mx-auto flex h-full  flex-col items-center justify-center  ">
              <div className=""><Link href={'/blogs'}>
                <Button className="hover:bg-white"> <p className="text-[#F17216] font-semibold text-lg leading-8 text-center flex ">
                Learn more <FaArrowRight className="mt-1.5 ml-1" /> 
                </p></Button></Link>
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
