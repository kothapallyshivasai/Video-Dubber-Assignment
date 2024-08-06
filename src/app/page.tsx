"use client";

import PathComponent from "@/components/PathComponent";
import PlanOptions from "@/components/PlanOptions";
import Profiles from "@/components/Profiles";
import SlideImage from "@/components/SlideImage";
import VideoDubberComponent from "@/components/VideoDubberComponent";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">

        <PathComponent />

        <VideoDubberComponent />

        <PlanOptions />

        <SlideImage />
        
        {/* <Profiles /> */}

      </div>
    </div>
  );
} 

