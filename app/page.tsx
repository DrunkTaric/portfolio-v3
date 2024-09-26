"use client"

import TechnologiesBar from "@/components/home/technologies-bar";
import useTarnsitionRouter from "@/hooks/useTarnsitionRouter";
import Header from "@/components/home/header-section";
import About from "@/components/home/about-section";
import { useEffect, useState } from "react";
import useCursor from "@/hooks/useCursor";

export default function Home() {

  const [StartedWebsite, setStartedWebsite] = useState(true)
  const { 
    changeColor,
    resetToNormal, 
    RenderedComponent, 
    startAnimationBigBlend, 
    startAnimationBigSticky
  } = useCursor()
  
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
        cursor={{resetToNormal, startAnimationBigBlend, startAnimationBigSticky, changeColor}}
        setStartedWebsite={setStartedWebsite}
        ></Header>
      { StartedWebsite && <TechnologiesBar></TechnologiesBar> }
      { StartedWebsite && <About
        cursor={{startAnimationBigBlend, startAnimationBigSticky, resetToNormal, changeColor}}
      ></About>}
      <RenderedComponent></RenderedComponent>
    </div>
  );
}
