import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen bg-[#1B1F23] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-12">
          🚧 Under Development
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mt-4">
          The page you are looking for is currently under development. Please check back later!
        </p>

        {/* Feature Name (optional) */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold mt-8">
          We&apos;re working hard to bring you the{" "}
          <span className="font-samarkan text-[#FFC209]">DevAurasion</span>{" "}
          experience.
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-xl">
          Stay tuned for updates as we continue to build and improve our platform. Your patience is greatly appreciated.
        </p>

        {/* Button to Join Community */}
        <div className="mt-8">
          <h3 className="text-white text-xl sm:text-2xl font-bold">For More Updates:</h3>
          <p className="text-gray-400 text-lg sm:text-xl mt-2">
            Join our community to stay informed about new features, updates, and events!
          </p>
          <Link href="/join">
            <button className="bg-[#FFC209] px-6 py-3 sm:py-4 rounded-lg text-white mt-4 hover:bg-[#e6a908] transition">
              <span className="font-semibold text-lg sm:text-xl leading-7">
                Join Our Community
              </span>
            </button>
          </Link>
        </div>

        {/* Back to Home */}
        <Link href="/">
          <button className="mt-4 text-[#FFC209] hover:text-[#e6a908] text-lg sm:text-xl transition">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
