
import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import Mentors from "@/components/Mentors";
import Offer from "@/components/Offer";
import Team from "@/components/Team";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
   <div className="">
    <Welcome />
    <Offer />
    <AboutUs />
    <Team />
    <Mentors />
    <Blog />

   </div>
    
  );
}
