"use client"

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function EgyGlobe() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globeEl = useRef<any | null>();

    const pointsData = [
        {
          lat: 26.8206, // Approximate latitude of Egypt
          lng: 30.8025, // Approximate longitude of Egypt
          label: "Egypt", // Label to display
          population: 102334000, // Optional: additional info
        }
    ];

    useEffect(() => {
        const globe = globeEl.current;
        if (globe) {
            globe.controls().autoRotate = false; // Disable auto-rotation if you don't want it
            globe.controls().enableZoom = false; // Enable zoom if you want it
            globe.pointOfView({ lat: 26.0, lng: 30.0, altitude: 2 }, 0);
        }
        
    }, [])

    return (
        <Globe
            ref={globeEl}
            width={700}
            height={700}
            pointsData={pointsData}
            pointRadius={0.9}
            backgroundColor='rgba(0,0,0,0)'
            enablePointerInteraction={true}
            pointColor={() => 'rgba(20, 168, 3, 1)'}
            globeImageUrl={"https://unpkg.com/three-globe@2.31.3/example/img/earth-dark.jpg"}
            bumpImageUrl={"https://unpkg.com/three-globe@2.31.3/example/img/earth-topology.png"}
        ></Globe>
    )
}