"use client"

import TechnologiesBar from "@/components/home/technologies-bar";
import Header from "@/components/home/header";
import { useEffect, useState } from "react";
import About from "@/components/home/about";
import useCursor from "@/hooks/useCursor";

export default function Home() {

  const { RenderedComponent, resetToNormal, startAnimationBigBlend, startAnimationBigSticky } = useCursor()
  const [StartedWebsite, setStartedWebsite] = useState(true)
  
  useEffect(() => {
    ( async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll();
      locomotiveScroll.start()
    })()
  }, [])

  return (
    <div className="w-full h-full">
      <Header 
        cursor={{blend: startAnimationBigBlend, sticky: startAnimationBigSticky, leave: resetToNormal}}
        setStartedWebsite={setStartedWebsite}
        ></Header>
      { StartedWebsite && <TechnologiesBar></TechnologiesBar> }
      { StartedWebsite && <About></About> }
      <RenderedComponent></RenderedComponent>
    </div>
  );
}
