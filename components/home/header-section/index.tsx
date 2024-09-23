import { FaArrowDown } from "react-icons/fa";
import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Caveat } from 'next/font/google'
import clsx from "clsx";
import { CursorExport } from "@/hooks/useCursor";

const caveat = Caveat({
    subsets: ["cyrillic"],
    weight: "600",
    display: "swap"
})
  
export default function Header({ setStartedWebsite, cursor }: { setStartedWebsite: (x: boolean) => void, cursor: Omit<CursorExport, "RenderedComponent"> }) {
  const buttonRef = useRef<HTMLButtonElement>()
  const [scope, animate] = useAnimate()
  const [DidScroll, setDidScroll] = useState(false)
  const [ClickedHeaderButton, setClickedHeaderButton] = useState(false);
  function StartTheHeaderAnimations() {
      if (ClickedHeaderButton) return
      setClickedHeaderButton(true)
      const music = new Audio("/music.mp3")
      const mouthClickSound = new Audio("/click.mp3")
      mouthClickSound.play()
      animate("#header_1_animated", {opacity: 1, marginLeft: 0}, {duration: 0.4})
      animate("#header_2_animated", {opacity: 1, marginRight: 0}, {duration: 0.4}).then(async () => {
        await animate("#header_3_animated", { display: "block"}, {duration: 0})
        await animate("#header_4_animated", { display: "block"}, {duration: 0})
        await animate("#header_5_animated", { display: "block"}, {duration: 0})

        await animate("#header_3_animated", { opacity: 1}, {duration: 1})
        await animate("#header_4_animated", { opacity: 1}, {duration: 1})
        await animate("#header_5_animated", { opacity: 1}, {duration: 1})
        setStartedWebsite(true)
        await animate("#indicator", {opacity: 1}, {duration: 0.3})
      })
      music.volume = 0.2
      music.loop = true
      music.play()
  }

  useEffect(() => {
      ( () => {
          document.onscroll = async () => {
              if (DidScroll) return 
              setDidScroll(true)
              await animate("#indicator", {opacity: 0}, {duration: 0.3})
          }
      }
      )()
  }, [])

  return (
      <header ref={scope} className="flex flex-col w-full h-screen justify-center items-center z-0">
          <div className="absolute flex bottom-0 w-full h-32">
              <div id="indicator" className="flex opacity-0 bg-white size-16 m-auto animate-bounce rounded-full">
                  {<FaArrowDown className="text-[var(--background)] text-4xl m-auto"></FaArrowDown>}
              </div>
          </div>
          <div className="absolute flex top-0 left-0 w-full">
            <h1 id="header_1_animated" className="font-bold -ml-[70rem] text-[11rem] uppercase opacity-0" onMouseEnter={() => {cursor.startAnimationBigBlend(200, 200)}} onMouseLeave={cursor.resetToNormal}>Software</h1>
            <div className="flex flex-col items-center justify-center w-full">
              <h1 id="header_3_animated" className={clsx("text-8xl opacity-0 hidden", caveat.className)} onMouseEnter={() => {cursor.startAnimationBigBlend(100, 100)}} onMouseLeave={cursor.resetToNormal}>7 years of experience</h1>
              <h1 id="header_4_animated" className={clsx("text-6xl opacity-0 hidden", caveat.className)} onMouseEnter={() => {cursor.startAnimationBigBlend(100, 100)}} onMouseLeave={cursor.resetToNormal}>Gold league player</h1>
            </div>
          </div>
          <div id="header-center" className="flex flex-col space-y-7">
            <h1 className="text-8xl font-bold select-none" onMouseEnter={() => {cursor.startAnimationBigBlend()}} onMouseLeave={cursor.resetToNormal}>DrunkTaric</h1>
            <button 
              ref={buttonRef}
              className="ml-auto mr-auto text-center text-2xl p-2 pl-5 pr-5 hover:font-bold cursor-default" 
              onClick={StartTheHeaderAnimations}
              onMouseEnter={() => { 
                const { width, height, top, left } = (buttonRef.current as HTMLButtonElement).getBoundingClientRect()
                console.log(top, left)
                cursor.startAnimationBigSticky(left, top, width, height, true)
              }}
              onMouseLeave={cursor.resetToNormal}
            >Click Me</button>
          </div>
          <div className="absolute flex bottom-0 right-0 w-full overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 id="header_5_animated" className={clsx("text-7xl opacity-0 hidden", caveat.className)} onMouseEnter={() => {cursor.startAnimationBigBlend(100, 100)}} onMouseLeave={cursor.resetToNormal}>this website made with ❤️</h1>
            </div>
            <h1 id="header_2_animated" className="font-bold text-[11rem] uppercase opacity-0 -mr-[70rem] select-none" onMouseEnter={() => {cursor.startAnimationBigBlend(200, 200)}} onMouseLeave={cursor.resetToNormal}>Engineer</h1>
          </div>
      </header>
  ) 
}