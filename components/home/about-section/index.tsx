import { CursorExport } from "@/hooks/useCursor"
import "./style.css"
import Image from "next/image"

export default function About({ cursor }: {cursor: Omit<CursorExport, "RenderedComponent"> }) {
    return (
        <section className="relative w-full h-[150vh] bg-background" onMouseEnter={() => {cursor.changeColor("transparent")}} onMouseLeave={() => {cursor.changeColor("white")}}>
            <div className="flex flex-col p-10">
                <h1 className="text-7xl ml-auto mr-auto font-bold uppercase">About Me</h1>
                <div className="pt-20 space-y-10">
                    <h1 className="text-5xl font-bold line-through">I am just a programmer, Trying to figure things.</h1>
                    <h1 className="text-5xl font-bold line-through">Tying to find what is possible using code.</h1>
                    <h1 className="text-5xl font-bold">Tying to Push the limits and beyond.</h1>
                </div>
                <div className="flex pt-20">
                    <div className="w-[50%]">
                        <h1>Hello</h1>
                    </div>
                    <div className="w-[50%]">
                        <Image width={500} height={1000} alt="a photo of myself" src={"/photos/me.png"} className="overflow-hidden rounded-2xl w-[500px] h-[800px] bg-cover object-top object-cover ml-auto mr-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}