
import AboutUs from "@/components/LandingPage/AboutUs";
import Blog from "@/components/LandingPage/Blog";
import Mentors from "@/components/LandingPage/Mentors";
import Offer from "@/components/LandingPage/Offer";
import QnA from "@/components/LandingPage/QnA";
import Team from "@/components/LandingPage/Team";
// import Test from "@/components/LandingPage/Test";
import Welcome from "@/components/LandingPage/Welcome";

export default function Home() {
  return (
   <div className=" overflow-x-hidden sm:overflow-x-hidden">
    <Welcome />
    <Offer />
    <AboutUs />
    <Team />
    <Mentors />
    <Blog />
    {/* <Test /> */}
    <QnA />
    

   </div>
    
  );
}
