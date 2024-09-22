import { useEffect, useRef, useState } from "react"
import { useMotionValue } from "framer-motion"
import Image from "next/image"

export default function TechnologiesBar() {

    const animatedDivRef = useRef<HTMLDivElement>() 
    const options = {
        marginRight: useMotionValue(0),
        marginLeft: useMotionValue(0),
        LastVal: useMotionValue(-1)
    }

    const scrollHandle = async () => {
        const { top } = (animatedDivRef.current as HTMLDivElement).getBoundingClientRect()
        const current_value = top * 0.01
        const inView = (current_value > 0 && current_value < 10)? true: false
        if (!inView) return
        const margin = Math.abs(current_value)
        if (options.LastVal.get() > current_value) {
            options.marginLeft.set(margin + options.marginLeft.get())
            options.marginRight.set(Math.abs(margin - options.marginRight.get()))
        } else {
            options.marginLeft.set(Math.abs(margin - options.marginLeft.get()))
            options.marginRight.set(margin + options.marginRight.get())
        }
        options.LastVal.set(current_value)
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollHandle)

        return (() => {
            document.removeEventListener("scroll", scrollHandle)
        })
    })

    return (
        <section className="flex flex-col w-full justify-center items-center p-10 space-y-12">
            <div ref={animatedDivRef} className="flex w-[75%] rounded-full justify-center items-center overflow-hidden">
                <div className="relative flex justify-center items-center space-x-14"
                    style={{paddingRight: options.marginRight.get(), paddingLeft: options.marginLeft.get()}}
                >
                    <Image width={70} height={70} alt="C#" src="/icons/languages/icons8-c.svg" />
                    <Image width={70} height={70} alt="Nodejs" src="/icons/languages/icons8-node-js.svg" />
                    <Image width={70} height={70} alt="Typescript" src="/icons/languages/icons8-typescript.svg" />
                    <Image width={70} height={70} alt="Python" src="/icons/languages/icons8-python.svg" />
                    <Image width={70} height={70} alt="Java" src="/icons/languages/icons8-java.svg" />
                    <Image width={70} height={70} alt="Docker" src="/icons/tech/icons8-docker.svg" />
                    <Image width={70} height={70} alt="Express.js" src="/icons/tech/icons8-express-js.svg" />
                    <Image width={70} height={70} alt="Next.js" src="/icons/tech/icons8-nextjs.svg" />
                    <Image width={70} height={70} alt="Prisma" src="/icons/tech/icons8-prisma-orm.svg" />
                    <Image width={70} height={70} alt="Jquery" src="/icons/tech/icons8-jquery.svg" />
                    <Image width={70} height={70} alt="Postgres" src="/icons/tech/icons8-postgres.svg" />
                </div>
            </div>
        </section>
    )
}