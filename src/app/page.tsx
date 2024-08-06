"use client";

import PathComponent from "@/components/PathComponent";
import VideoDubberComponent from "@/components/VideoDubberComponent";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">

        <PathComponent />

        <VideoDubberComponent />


      </div>
    </div>
  );
} 

