import { motion, useMotionValue } from "framer-motion"
import { useEffect } from "react";

export default function StickyCursor() {

    const cursorSize = 20;
    const mouse = {
        x: useMotionValue(500),
        y: useMotionValue(500)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => {window.removeEventListener("mousemove", manageMouseMove)}
    })

    return ( 
        <motion.div className="fixed bg-white size-[20px] rounded-full z-10" 
        style={{left: mouse.x, top: mouse.y}}>
        </motion.div>
    )
}