import Carousel from "@/app/components/Carousel";
import Analytics from "@/app/components/Analytics";
import Achievements from "@/app/components/Achievements"; // New Import
import Roadmap from "@/app/components/Roadmap";
import Team from "@/app/components/Team"; // This contains your "About Us"
import ReportForm from "@/app/components/ReportForm";
import JoinUs from "@/app/components/JoinUs"; 

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Carousel />
      <Analytics />
      <Achievements /> {/* Added right after Analytics */}
      <Roadmap />
      <Team />
      
      {/* Forms */}
      <ReportForm />
      <JoinUs /> 
    </div>
  );
}