"use client"

import Header from "@/components/home/header";
import { useEffect, useState } from "react";
import useCursor from "@/hooks/useCursor";

export default function Home() {

  const { RenderedComponent, resetToNormal, startAnimationBigBlend, startAnimationBigSticky } = useCursor()
  const [StartedWebsite, setStartedWebsite] = useState(false)
  
  useEffect(() => {
    ( async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll();
    })()
  }, [])

  return (
    <div className="w-full h-full">
      <Header 
        cursor={{blend: startAnimationBigBlend, sticky: startAnimationBigSticky, leave: resetToNormal}}
        StartedWebsite={StartedWebsite} 
        setStartedWebsite={setStartedWebsite}
        ></Header>
      { StartedWebsite && <section className="w-full h-screen bg-blue-400 z-0">
      </section> }
      { StartedWebsite && <section className="w-full h-screen bg-red-400 z-0">
        </section> }
      <RenderedComponent></RenderedComponent>
    </div>
  );
}
