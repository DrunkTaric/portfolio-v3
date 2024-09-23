import { CursorExport } from "@/hooks/useCursor"
import "./style.css"
import Image from "next/image"

export default function About({ cursor }: {cursor: Omit<CursorExport, "RenderedComponent"> }) {
    return (
        <section className="relative w-full h-screen bg-foreground" onMouseEnter={() => {cursor.changeColor("transparent")}} onMouseLeave={() => {cursor.changeColor("white")}}>
            <div className="custom-shape-divider-top-1727095274">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="flex flex-col p-10">
                <h1 className="text-black text-7xl ml-auto mr-auto font-bold uppercase">About Me</h1>
                <div className="pt-20 space-y-10">
                    <h1 className="text-black text-5xl font-bold line-through">I am just a programmer, Trying to figure things.</h1>
                    <h1 className="text-black text-5xl font-bold line-through">Tying to find what is possible using code.</h1>
                    <h1 className="text-black text-5xl font-bold">Tying to Push the limits and beyond.</h1>
                </div>
                <div className="">
                    <Image />
                </div>
            </div>
        </section>
    )
}