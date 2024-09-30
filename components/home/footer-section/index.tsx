"use client"

import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('./components/egy-globe'), {ssr: false, loading: () => {
    return <></>
}})

export default function Footer() {
    return (
        <div className="fixed flex flex-col w-full h-screen bg-white p-20 space-y-10 -z-10">
            <h1 className={"text-8xl font-bold text-background"}>Contact</h1>
            <Globe></Globe>
        </div>
    )
}