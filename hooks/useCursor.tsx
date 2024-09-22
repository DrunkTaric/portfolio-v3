import { motion, useAnimate, useSpring, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react";

export default function useCursor() {

    const [scope, animate] = useAnimate()
    const [IsSticky, setIsSticky] = useState(false);

    const options = {
        size: {
            x: useMotionValue(20),
            y: useMotionValue(20)
        },
        padding: useMotionValue(0),
        paddingLeft: useMotionValue(0),
        paddingRight: useMotionValue(0),
        borderRadius: useMotionValue("50%"),
        mixBlendMode: useMotionValue("normal"),
    }

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const mouseSmooth = {
        x: useSpring(mouse.x, {mass: 0.5, damping: 20, stiffness: 300}),
        y: useSpring(mouse.y, {mass: 0.5, damping: 20, stiffness: 300})
    }

    const manageMouseMove = (e: MouseEvent) => {
        if (IsSticky) return
        const { clientX, clientY } = e;
        mouse.x.set(clientX - options.size.x.get() / 2)
        mouse.y.set(clientY - options.size.y.get() / 2)
    }

    const resetToNormal = async () => {
        setIsSticky(false)
        await animate("#cursor", { 
            width: 20, 
            height: 20, 
            paddingLeft: 0, 
            paddingRight: 0,
            mixBlendMode: "normal", 
            borderRadius: "50%"
        }, {duration: 0.2})
    }

    const startAnimationBigBlend = async (width: number = 100, height: number = 100) => {
        setIsSticky(false)
        await animate("#cursor", { width, height, mixBlendMode: "difference", borderRadius: "50%"}, {duration: 0.3})
    }

    const startAnimationBigSticky  = async (x: number, y: number, width: number, height: number, rounded: boolean = true) => {
        setIsSticky(true)
        mouse.x.set(x)
        mouse.y.set(y)
        await animate("#cursor", { 
            top: y,
            left: x,
            width, 
            height,
            padding: 8, 
            paddingLeft: 20, 
            paddingRight: 20, 
            mixBlendMode: "difference",
            borderRadius: rounded? "20px": "0%",
        }, {duration: 0.3})
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => {window.removeEventListener("mousemove", manageMouseMove)}
    })

    function RenderedComponent() {
        return (
            <div ref={scope}>
                <motion.div id="cursor" className="fixed bg-white pointer-events-none z-10" 
                    style={{
                        left: mouseSmooth.x, 
                        top: mouseSmooth.y, 
                        width: options.size.x, 
                        height: options.size.y, 
                        padding: options.padding,
                        paddingLeft: options.paddingLeft,
                        paddingRight: options.paddingRight,
                        mixBlendMode: options.mixBlendMode, 
                        borderRadius: options.borderRadius
                    }}>
                </motion.div>
            </div>
        )
    }

    return {
        resetToNormal,
        RenderedComponent,
        startAnimationBigBlend,
        startAnimationBigSticky
    }
}