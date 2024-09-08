'use client';
import "../map/spinner.css";
import Header from "@/components/header";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";


export default function MapLayout() {
    const Map = useMemo(() => dynamic(
        () => import('../map/Map'),
        {
            loading: () => <div className="h-screen bg-[#99cc00]"><div className="lds-circle"><div></div></div></div>,
            ssr: false
        }
    ), [])

    return (
        <div className="flex h-screen flex-col">
            <Header></Header>
            <div className="z-0">
                <Map position={[-14.4048933333333, 131.584643333333]} zoom={13} />
            </div>
        </div>
    );
}
