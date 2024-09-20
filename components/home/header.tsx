import { FaArrowDown } from "react-icons/fa";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Caveat } from 'next/font/google'
import clsx from "clsx";

const caveat = Caveat({
    subsets: ["cyrillic"],
    weight: "600",
    display: "swap"
})
  
export default function Header({ setStartedWebsite }: { StartedWebsite: boolean, setStartedWebsite: (x: boolean) => void }) {
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
          await animate("#header_3_animated", {opacity: 1}, {duration: 1})
          await animate("#header_4_animated", {opacity: 1}, {duration: 1})
          await animate("#header_5_animated", {opacity: 1}, {duration: 1})
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
            <div className="absolute flex top-0 left-0 w-full">
              <h1 id="header_1_animated" className="font-bold -ml-[70rem] text-[11rem] uppercase opacity-0">Software</h1>
              <div className="flex flex-col items-center justify-center w-full">
                <h1 id="header_3_animated" className={clsx("text-8xl opacity-0", caveat.className)}>7 years of experience</h1>
                <h1 id="header_4_animated" className={clsx("text-6xl opacity-0", caveat.className)}>Gold league player</h1>
              </div>
            </div>
            <div id="header-center" className="flex flex-col">
              <h1 className="text-8xl font-bold">DrunkTaric</h1>
              <button 
                className="ml-auto mr-auto text-center text-2xl" 
                onClick={() => StartTheHeaderAnimations() }
              >Click Me</button>
            </div>
            <div className="absolute flex bottom-0 right-0 w-full overflow-x-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <h1 id="header_5_animated" className={clsx("text-7xl opacity-0", caveat.className)}>this website made with ❤️</h1>
              </div>
              <h1 id="header_2_animated" className="font-bold text-[11rem] uppercase opacity-0 -mr-[70rem]">Engineer</h1>
            </div>
            <div className="absolute flex bottom-0 w-full h-32">
                <div id="indicator" className="flex opacity-0 bg-white size-16 m-auto animate-bounce rounded-full">
                    {<FaArrowDown className="text-[var(--background)] text-4xl m-auto"></FaArrowDown>}
                </div>
            </div>
        </header>
    )
    
}