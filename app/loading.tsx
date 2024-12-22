import Spinner from "@/components/common/Spinner";
import React from "react";


const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spinner /> {/* You can use any loader or spinner here */}
    </div>
  );
};

export default Loading;
