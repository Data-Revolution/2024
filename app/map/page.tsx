'use client';
import "./spinner.css";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";


export default function MapLayout() {
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <div className="h-screen bg-[#99cc00]"><div className="lds-circle"><div></div></div></div>,
            ssr: false
        }
    ), [])

    return (
        <div className="flex h-screen flex-col">
            <Header></Header>
            <div className="z-0">
                <Map position={[-12.816248802483768, 131.7415618693958]} zoom={8} />
            </div>
        </div>
    );
}
