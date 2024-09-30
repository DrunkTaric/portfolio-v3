import { CursorExport } from "@/hooks/useCursor"
import { Caveat } from "next/font/google"
import Image from "next/image"
import clsx from "clsx"
import "./style.css"


const caveat = Caveat({
    subsets: ["cyrillic"],
    weight: "600",
    display: "swap"
})

export default function About({ cursor }: {cursor: Omit<CursorExport, "RenderedComponent"> }) {
    return (
        <section className="flex flex-col p-20 w-full h-screen bg-background space-y-10">
            <h1 className={"text-8xl font-bold"}>About</h1>
            <div className="flex">
                <div className="w-[60%] space-y-10 mt-auto mb-auto">
                    <h1 className={clsx("text-5xl", caveat.className)}>
                        Hi, I’m Mohamed Ismail, a full-stack developer and systems architect.
                    </h1>
                    <h1 className={clsx("text-5xl", caveat.className)}>
                        I build things from scratch to understand how they work and to unlock new creative 
                        possibilities.
                    </h1>
                    <h1 className={clsx("text-5xl", caveat.className)}>
                        I’m passionate about solving complex problems and constantly pushing the limits 
                        of what’s possible in software development.
                    </h1>
                </div>
                <div className="w-[40%]">
                    <Image width={400} height={400} alt="a photo of myself" src={"/photos/hi.png"} className="overflow-hidden rounded-2xl bg-cover object-top object-cover ml-auto mr-auto" />
                </div>
            </div>
        </section>
    )
}