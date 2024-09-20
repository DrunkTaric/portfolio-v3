"use client"

import StickyCursor from "@/micro-components/stickyCursor";
import Header from "@/components/home/header";
import { useEffect, useState } from "react";

export default function Home() {

  const [StartedWebsite, setStartedWebsite] = useState(false)
  
  useEffect(() => {
    ( async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll();
    })()
  }, [])

  return (
    <div className="w-full h-full">
      <Header StartedWebsite={StartedWebsite} setStartedWebsite={setStartedWebsite}></Header>
      { StartedWebsite && <section className="w-full h-screen bg-blue-400 z-0">
      </section> }
      { StartedWebsite && <section className="w-full h-screen bg-red-400 z-0">
        </section> }
      <StickyCursor></StickyCursor>
    </div>
  );
}
