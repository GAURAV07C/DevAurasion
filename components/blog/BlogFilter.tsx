import React from 'react'
import { Button } from '../ui/button';


interface BlogFilterProps {
  blogTypeData:{id:number , title:string}[];
  category :string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}


const BlogFilter:React.FC<BlogFilterProps> = ({blogTypeData , category , setCategory}) => {


  function filterHandler(title :string){
    setCategory(title)
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap justify-center md:justify-start">


          {blogTypeData.map((blogType:{id:number , title:string}) => (


              <Button onClick={() => filterHandler(blogType.title)} className={`bg-[#6A737D] rounded-full px-3 py-1 hover:text-white cursor-pointer ${category === blogType.title ? ('bg-opacity-60 border-white'):('bg-opacity-40 border-transparent')}`} key={blogType.id}> <p className='text-sm sm:text-base'>{blogType.title}</p> 

              </Button>

            
          ))}
        </div>
    </div>
  )
}

export default BlogFilter
