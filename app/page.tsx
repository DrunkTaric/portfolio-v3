"use client"

import TechnologiesBar from "@/components/home/technologies-bar";
import Projects from "@/components/home/projects-section";
import Header from "@/components/home/header-section";
import Skills from "@/components/home/skills-section";
import Footer from "@/components/home/footer-section";
import About from "@/components/home/about-section";
import { useEffect, useState } from "react";
import useCursor from "@/hooks/useCursor";

export default function Home() {

  const [StartedWebsite, setStartedWebsite] = useState(false)
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
      { StartedWebsite && <Footer></Footer> }
      <Header 
        cursor={{resetToNormal, startAnimationBigBlend, startAnimationBigSticky, changeColor}}
        setStartedWebsite={setStartedWebsite}
        ></Header>
      { StartedWebsite && <TechnologiesBar></TechnologiesBar> }
      { StartedWebsite && <About></About> }
      { StartedWebsite && <Skills></Skills> }
      { StartedWebsite && <Projects></Projects> }
      <section className="w-full h-screen">
      </section>
      <RenderedComponent></RenderedComponent>
    </div>
  );
}
