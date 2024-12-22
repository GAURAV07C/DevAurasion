import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-[#1B1F23] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-12">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mt-4">
          It seems you&apos;ve wandered off the beaten path. But don’t worry—we’ll guide you back!
        </p>

        {/* Welcome Message */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold mt-8">
          Welcome to the{" "}
          <span className="font-samarkan text-[#FFC209]">DevAurasion</span>{" "}
          Community!
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mt-4 max-w-xl">
          Join our vibrant community of developers, where we share knowledge,
          collaborate on exciting projects, and grow together. Let’s build
          something amazing!
        </p>

        {/* Button */}
        <Link href="/join">
          <button className="bg-[#FFC209] px-6 py-3 sm:py-4 rounded-lg text-white mt-6 hover:bg-[#e6a908] transition">
            <span className="font-semibold text-lg sm:text-xl leading-7">
              Join Our Community
            </span>
          </button>
        </Link>

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
